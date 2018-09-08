import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import List from './components/list/List';
import './index.css';

const App = () => {
  // const title = 'React Crypto'
   return (
    <div>
       <Header />

       <List />
    </div>
	)
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);