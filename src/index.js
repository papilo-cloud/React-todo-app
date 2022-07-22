import React, {Component,  useState } from 'react';
import ReactDOM from 'react-dom';
// import Apps from './Apps';
// import App from './reactHooks/App'
// import './index.css'
import Reducer from './reactHooks/Reducer';
// import Home from './reactHooks/Home';
// import App from './expenseTracker/App';
// import Home from './dojo_blog/Home';
import Search from './dojo_blog/Search';
// import App from './pagination/App';
import TimersDashBoard from './compo1/TimersDashBoard';
import Apps from './components/Apps';
import Homes from './localStorage/Homes';
import Home from './components/Home';



const data = [
  {id: "todo-0", name: "Eat", completed: true},
  {id: "todo-1", name: "Sleep", completed: false},
  {id: "todo-2", name: "Repeat", completed: false}
]




ReactDOM.render(
  // <Ap tasks={data}/>,
  // <Apps />,
  <Home />,
  // <Homes />,
  // <Home />,
  // <App />,
  // <Home />,
  // <App />,
  // <Search />,
  // <TimersDashBoard />,
  document.getElementById('root')
);


if(module.hot) {
  module.hot.accept()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

