import React from "react";

import Card from "./Card";

export default function Main() {
  let cardsInfo = [["Impone", "fashion-1"], ["Destaca", "fashion-2"], ["Cautiva", "fashion-3"]]

  return (
    <section className="container">
      <div className="grid-container">
        {cardsInfo.map(function(info) {
          return <Card key={info[0]} clase={info[1]} texto={info[0]} />
        })}
      </div>
    </section>
  );
}