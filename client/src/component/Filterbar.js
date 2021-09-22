import React, { useState } from "react";
import "./Filterbar.css";

const Filterbar = ({ datas, setDatas }) => {
  const handleChange = (e) => {
    if (e.target.value === "D-day") {
      const cpDatas = datas.slice();
      const dDaySort = cpDatas.sort((a, b) => a.d_day - b.d_day);
      setDatas(dDaySort);
    }

    if (e.target.value === "Create At") {
      const cpDatas = datas.slice();
      const createdAtSort = cpDatas.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setDatas(createdAtSort);
    }
  };
  const today = new Date();

  return (
    <div className="filterbar__container">
      <div className="filterbar__wrapper">
        <select className="dropdown" onChange={handleChange}>
          드롭다운
          <option className="option">--정렬방식 선택--</option>
          <option className="option">D-day</option>
          <option className="option">Create At</option>
        </select>
        <div className="filterbar__currentDate">
          {today.getFullYear()}년{today.getMonth() + 1}월{today.getDate()}일
        </div>
      </div>
    </div>
  );
};

export default Filterbar;
