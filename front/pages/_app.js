import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import {Provider} from 'react-redux'
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";

const MyApp = ({Component}) => {

    return (
        <ThemeProvider theme={Theme}>
            <>
            <GlobalStyles />
                <Head>
                    <title>DecafMap</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
                </Head>
                <AppLayout>
                    <Component />
                </AppLayout>
            </>
        </ThemeProvider>
    )
};


export default MyApp;