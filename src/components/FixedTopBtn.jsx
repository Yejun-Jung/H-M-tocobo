import React from "react";
import "./styles/FixedTopBtn.scss";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const FixedTopBtn = () => {
  const scrollTo = useSmoothScroll();

  return (
    <div className="FixedTopBtn">
      <button
        type="button"
        className="top-btn"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("hero");
        }}
      >
        위로 올라가는 버튼
      </button>
      <div className="talk1">
        <a href="#!" className="talk-btn"></a>
      </div>
    </div>
  );
};

export default FixedTopBtn;
