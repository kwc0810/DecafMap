import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import {Provider} from 'react-redux'



const MyApp = ({Component}) => {

    return (
        <>
            <Head>
                <title>DecafMap</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    )
};


export default MyApp;