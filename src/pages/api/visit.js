export const runtime = 'edge';

const base64Image = 'R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

export default async function handler(req) {
  const { query } = req;
  global.log = global.log || [];
  global.log.push({ type: 'visit', query });

  const imageBuffer = Buffer.from(base64Image, 'base64');

  return new Response(imageBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Content-Length': imageBuffer.length,
    },
  });
}
