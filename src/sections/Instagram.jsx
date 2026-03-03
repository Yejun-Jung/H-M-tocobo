import React from "react";
import instar from "../util/instagram";
import "./styles/Instagram.scss";
const Instargram = () => {
  return (
    <div className="inner instar-inner">
      <div className="t-wrap">
        <h2 className="tit">Instagram</h2>
        <p className="txt">@hm</p>
      </div>
      <ul className="instar-list">
        {instar.map((i) => (
          <li key={i.id}>
            <a
              href={i.link}
              alt={i.alt}
              style={{ backgroundImage: `url(${i.image})` }}
            >
              {i.id}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Instargram;
