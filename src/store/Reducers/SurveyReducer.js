const initState = {}

const customerSurveyReducer = (state = initState, action) => {
    switch (action.type) {
      case 'SURVEY_SUBMIT':
        console.log('submit', action.survey);
        return state;
      case 'SURVEY_SUBMIT_ERROR':
        console.log('submit error', action.err)
        return state;
      default:
          return state
    }
  }
  export default customerSurveyReducer