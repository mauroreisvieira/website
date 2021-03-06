import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
    render(): React.ReactElement {
        return (
            <Html lang="en">
                <Head />
                <body className="leading-relaxed font-light bg-white dark:bg-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
