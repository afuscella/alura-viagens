module.exports = [
  {
    source: '/:path*/',
    headers: [
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
    ],
  },
];
