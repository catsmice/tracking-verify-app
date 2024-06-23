import { promises as fs } from 'fs';

export const runtime = 'edge';

export default async function handler(req) {
  const { query } = req;
  global.log = global.log || [];
  global.log.push({ type: 'visit', query });

  const filePath = path.resolve('.', 'public/1x1-pixel.jpg');
  const fileBuffer = await fs.readFile(filePath);

  return new Response(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'image/jpeg',
    },
  });
}
