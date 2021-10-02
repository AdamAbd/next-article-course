import React from 'react';
import Head from 'next/head';

export default function CustomHead(props) {
    return (
        <div>
            <Head>
                <title>{props.children}</title>
            </Head>
        </div>
    );
};
