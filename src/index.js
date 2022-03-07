import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Layout from './components/layout/layout';
import Footer from './components/footer/footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Layout />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
