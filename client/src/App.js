import React, { useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import ContentTodo from "./component/ContentTodo";
import CountClear from "./component/CountClear";
import Filterbar from "./component/Filterbar";
import Footer from "./Footer";
import Header from "./Header";
import MakeTodo from "./component/MakeTodo";
import dummy from "./static/dummyData";

import "./App.css";

function App() {
  const [isClear, setIsClear] = useState(false);
  const [datas, setDatas] = useState(dummy);

  const handleClear = () => {
    setIsClear(true);
    setDatas([]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Header />
          <Filterbar datas={datas} setDatas={setDatas} />
          <MakeTodo datas={datas} setDatas={setDatas} />
          <CountClear datas={datas} setDatas={setDatas} isClear={isClear} handleClear={handleClear} />
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
