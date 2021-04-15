import React from 'react';
import Header from '../header';
import Main from '../main/Main';
import Sidebar from '../sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Header />
      <div className="mainThumb">
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

export default App;
