import { Octokit } from '@octokit/rest';
import { COLLECTIONS, type Collection, type Item } from '@/data/admin/collections';

// Admin lists live as JSON files on a separate branch, so saving never rebuilds the public site.
const owner = process.env.GITHUB_OWNER || '';
const repo = process.env.GITHUB_REPO || '';
const branch = process.env.ADMIN_DATA_BRANCH || 'admin-data';
const pathFor = (key: Collection['key']) => `admin-data/${key}.json`;

export const storeConfigured = () => Boolean(process.env.GITHUB_TOKEN && owner && repo);
const gh = () => new Octokit({ auth: process.env.GITHUB_TOKEN });

async function ensureBranch(o: Octokit) {
  try {
    await o.git.getRef({ owner, repo, ref: `heads/${branch}` });
    return;
  } catch (e) {
    if ((e as { status?: number }).status !== 404) throw e;
  }
  const { data: repoInfo } = await o.repos.get({ owner, repo });
  const { data: base } = await o.git.getRef({ owner, repo, ref: `heads/${repoInfo.default_branch}` });
  await o.git.createRef({ owner, repo, ref: `refs/heads/${branch}`, sha: base.object.sha });
}

export async function readCollection(key: Collection['key']): Promise<{ items: Item[]; sha: string | null; saved: boolean }> {
  const seed = COLLECTIONS[key].seed;
  if (!storeConfigured()) return { items: seed, sha: null, saved: false };
  try {
    const { data } = await gh().repos.getContent({ owner, repo, path: pathFor(key), ref: branch });
    if (Array.isArray(data) || !('content' in data)) return { items: seed, sha: null, saved: false };
    const items = JSON.parse(Buffer.from(data.content, 'base64').toString('utf8')) as Item[];
    return { items, sha: data.sha, saved: true };
  } catch (e) {
    if ((e as { status?: number }).status === 404) return { items: seed, sha: null, saved: false };
    throw e;
  }
}

export async function writeCollection(key: Collection['key'], items: Item[], sha: string | null, editor: string) {
  const o = gh();
  await ensureBranch(o);
  const res = await o.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: pathFor(key),
    branch,
    message: `Admin: update ${COLLECTIONS[key].title.toLowerCase()}${editor ? ` (${editor})` : ''}`,
    content: Buffer.from(JSON.stringify(items, null, 2)).toString('base64'),
    ...(sha ? { sha } : {}),
  });
  return res.data.content?.sha ?? null;
}
