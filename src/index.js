import React, {Component,  useState } from 'react';
import ReactDOM from 'react-dom';
import Apps from './Apps';
import './index.css'

const data = [
  {id: "todo-0", name: "Eat", completed: true},
  {id: "todo-1", name: "Sleep", completed: false},
  {id: "todo-2", name: "Repeat", completed: false}
]




ReactDOM.render(
  <Apps tasks={data}/>,
  document.querySelector('div')
);


if(module.hot) {
  module.hot.accept()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

