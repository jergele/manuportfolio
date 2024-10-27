import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.SANITY_WEBHOOK_SECRET) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Trigger GitHub Actions workflow
    const response = await fetch(
      `https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/dispatches`,
      {
        method: 'POST',
        headers: {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          event_type: 'sanity_update'
        })
      }
    );

    return res.json({ message: 'Revalidation triggered' });
  } catch (err) {
    return res.status(500).json({ message: 'Error revalidating' });
  }
}
