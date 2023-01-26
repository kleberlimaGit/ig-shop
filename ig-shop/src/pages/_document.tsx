import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <body className="font-sans bg-grayR-900 text-grayR-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
