export const runtime = 'edge';

if (typeof global.log === 'undefined') {
  global.log = [];
}

const base64Image = 'R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

export default async function handler(req) {
  const { query } = req;
  global.log.push({ type: 'visit', query });

  const imageBuffer = Buffer.from(base64Image, 'base64');

  return new Response(imageBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Content-Length': imageBuffer.length,
      'Access-Control-Allow-Origin': '*', // Allow all origins
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Allow these methods
      'Access-Control-Allow-Headers': 'Content-Type', // Allow these headers
    },
  });
}
