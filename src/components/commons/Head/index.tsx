import React from 'react';
import NextHead from 'next/head';

export function Head() {
  return (
    <NextHead>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
}
