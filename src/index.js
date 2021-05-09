import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import firebase from 'firebase/app';

import { createStore, applyMiddleware, compose } from 'redux'
import RootReducer from './store/Reducers/RootReducer';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore,createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import firebaseConfig from './firebaseConfig';
 

    const store = createStore(RootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase, firebaseConfig)
    ));

    const profileConfig = {
        userProfile: 'users',
        useFirestoreForProfile: true
      }

    const rrfProps = {
        firebase,
        config: profileConfig,
        dispatch: store.dispatch,
        createFirestoreInstance,
    }

    function AuthIsLoaded({ children }) {
        const auth = useSelector(state => state.firebase.auth)
        if (!isLoaded(auth)) return <div>Loading Screen...</div>;
            return children
    }

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded><App /></AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>, 
    document.getElementById('root'));
