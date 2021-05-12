const initState = {
}

const surveyReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SURVEY_SUBMIT_SUCCESS':
      console.log('submit', action.survey);
      return state;
    case 'SURVEY_SUBMIT_ERROR':
      console.log('submit error', action.err)
      return state;
    default:
        return state
  }
}
export default surveyReducer