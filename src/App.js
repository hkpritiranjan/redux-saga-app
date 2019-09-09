import React from 'react';
import Button from './containers/Button';
import NewsItem from './containers/NewsItem';
import Loading from './containers/Loading';
import Input from './containers/Input';
import HeaderText from './containers/HeaderText';

let App = () => (
  <div>
    <Input />
     <Button />
     <HeaderText/>
     <Loading />
     <NewsItem />
     hi
  </div>
);

export default App;