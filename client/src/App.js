import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import ContentTodo from './component/ContentTodo';
import CountClear from './component/CountClear';
import Filterbar from './component/Filterbar';
import Footer from './Footer';
import Header from './Header';
import MakeTodo from './component/MakeTodo';
import dummy from './static/dummyData';

import './App.css';

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000').then((res) => setDatas(res.data));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Header />
          <Filterbar datas={datas} setDatas={setDatas} />
          <MakeTodo datas={datas} setDatas={setDatas} />

          <CountClear datas={datas} setDatas={setDatas} />

          <div className="listPart">
            <ContentTodo datas={datas} setDatas={setDatas} />
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
