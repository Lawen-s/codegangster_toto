import React from 'react';
import './CountClear.css';
import dummyData from '../static/dummyData';

const CountClear = ({ isClear, handleClear, datas, setDatas }) => {

  return (

    <div className="count_Container">
      {!datas.length ? <span className="span--remainTodos">비어있어요!</span>
        : <span className="span--remainTodos">남은 할 일: {datas.length}</span>}
      <button onClick={handleClear} className="btn--clearAll">Clear All</button>
    </div>

  )
}

export default CountClear;
