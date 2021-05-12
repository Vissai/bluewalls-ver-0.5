export const surveySubmit = (survey) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //Make async call to the database
        const firestore = getFirestore();
        const authId = getState().firebase.auth;
        
        firestore.collection('surveyResponses').add({
            ...survey,
            submittedBy: authId.uid,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'SURVEY_SUBMIT_SUCCESS', survey});
        }).catch((err) => {
            dispatch({ type: 'SURVEY_SUBMIT_ERROR', err});
        })
    }
}