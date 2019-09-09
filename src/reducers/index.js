const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_NEWS':
           return { ...state, loading: true };
      case 'NEWS_RECEIVED':
           return { ...state, news: action.json[0], loading: false, text:action.text }
     case 'SET_TEXT':
          return { ...state, text: action.text }     
      default: 
           return state;
    }
   };
   export default reducer;