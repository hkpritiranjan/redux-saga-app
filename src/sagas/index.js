import { put, takeLatest, all, select } from 'redux-saga/effects';

function* fetchNews() {
  console.log('text ka value1 :->')
  let text = yield select((state)=> state.text);
  console.log('hamara text ', text)
  const json = yield fetch('https://newsapi.org/v2/everything?q='+text+'&from=2019-09-09&sortBy=publishedAt&apiKey=280371f1acc243d1aeaf8405cf895f5b')
        .then(response => response.json(), );    
  yield put({ type: "NEWS_RECEIVED", json: json.articles,text:text });
}
function* actionWatcher() {
     yield takeLatest('GET_NEWS', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}