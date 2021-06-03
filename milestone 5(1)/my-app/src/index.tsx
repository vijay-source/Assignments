
import ReactDOM from 'react-dom';
import React from 'react';
import BookList from './components/booklist'
import { AddBook } from './components/addbook'
import Details from './components/details'
import './design.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BookProvider } from "./Context/BookContext";
import SiteHeader from './app'
ReactDOM.render(
  <div><BookProvider>
    <SiteHeader />
  </BookProvider>
  </div>,
  document.getElementById('root')
);



