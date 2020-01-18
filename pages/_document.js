import Document, { Html, Head, Main, NextScript } from "next/document";

class PokrDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Personal OKRs</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Be+Vietnam:400,500,700&display=swap&display=swap"
            rel="stylesheet"
          />
          <style global jsx>
            {`
              body {
                font-family: "Be Vietnam", sans-serif;
              }
              img {
                max-width: 100%;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PokrDocument;
