import { Octokit } from '@octokit/rest';
import { NextResponse } from 'next/server';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function POST(request: Request) {
  try {
    const events = await request.json();
    let fileSha: string | undefined;
    
    try {
      // Try to get the current file content to get its SHA
      const { data: file } = await octokit.repos.getContent({
        owner: process.env.GITHUB_OWNER || '',
        repo: process.env.GITHUB_REPO || '',
        path: 'src/data/events.json',
        ref: 'main',
      });

      if ('sha' in file) {
        fileSha = file.sha;
      }
    } catch (error: unknown) {
      // File doesn't exist yet, that's okay
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.log('File does not exist yet, will create it:', errorMessage);
    }

    // Update or create the file
    await octokit.repos.createOrUpdateFileContents({
      owner: process.env.GITHUB_OWNER || '',
      repo: process.env.GITHUB_REPO || '',
      path: 'src/data/events.json',
      message: 'Update events via admin interface',
      content: Buffer.from(JSON.stringify(events, null, 2)).toString('base64'),
      sha: fileSha,
      branch: 'main',
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