import AuthReducer from './AuthReducer';
import SurveyReducer from './SurveyReducer';

import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const RootReducer = combineReducers({
    auth: AuthReducer,
    survey:  SurveyReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default RootReducer;
