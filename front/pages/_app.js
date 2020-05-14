import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import {Provider} from 'react-redux'
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import {Container} from 'next/app';
import PropTypes  from 'prop-types';
import withRedex from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const MyApp = ({Component, store}) => {

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

// const configureStore = (initialState, options)=>{
//     const sagaMiddleware = createSagaMiddleware();
//     const middlewares = [sagaMiddleware, (store)=>(next)=>(action)=> {
//       console.log(action);
//       next(action);
//     }];
//     const enhancer = process.env.NODE_ENV === 'production'
//       ? compose(applyMiddleware(...middlewares))
//       : compose(
//         applyMiddleware(...middlewares),
//         !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
//       );
//     const store = createStore(reducer,initialState,enhancer);
//     //withReduxSaga할 때 필요
//     store.sagaTask = sagaMiddleware.run(rootSaga);
//     return store;
// }


export default MyApp;

// export default withRedex(configureStore)(withReduxSaga(MyApp));