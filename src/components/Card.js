import React, { useContext } from "react";

import { hoverContext } from "../App";

export default function Card({ clase, texto }) {
  const { isHover, noHover } = useContext(hoverContext);

  return (
      <div onMouseEnter={isHover} onMouseLeave={noHover} className={"card " + clase}>
        <p className="card__title">{texto}</p>
      </div>
  );
}
