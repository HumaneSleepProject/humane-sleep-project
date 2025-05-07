import { NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const owner = process.env.GITHUB_OWNER || '';
const repo = process.env.GITHUB_REPO || '';
const path = 'src/data/events.json';

export async function POST(request: Request) {
  try {
    const events = await request.json();

    // Get the current file to get its SHA
    const { data: currentFile } = await octokit.repos.getContent({
      owner,
      repo,
      path,
    });

    if (!('sha' in currentFile)) {
      throw new Error('Could not get file SHA');
    }

    // Update the file
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: 'Update events data',
      content: Buffer.from(JSON.stringify(events, null, 2)).toString('base64'),
      sha: currentFile.sha,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating events:', error);
    return NextResponse.json(
      { error: 'Failed to update events' },
      { status: 500 }
    );
  }
} 