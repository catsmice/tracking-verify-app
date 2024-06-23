export const runtime = 'edge';

if (typeof global.log === 'undefined') {
  global.log = [];
}

export default async function handler(req) {
  const { query } = req;
  global.log.push({ type: 'dvbm', query });

  const response = `
    console.log("dvbm.js script loaded");
    // Your JavaScript code here
  `;

  return new Response(response, {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
