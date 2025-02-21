import React from "react";
import "./AlgoritmusStilus.css";

function AlgoritmusOldal() {
  return (
    <div className="container">
      <h1 className="title">Algoritmusok</h1>

      <div className="info-box">
        <h2>ℹ️ Információ</h2>
        <p>
          Az alábbi feladatokban különböző algoritmusokat kell elkészíteni. Minden
          algoritmushoz tartozik egy kiinduló Python kód, amely tartalmaz{" "}
          <code>unittest</code> teszteket is.
        </p>
      </div>

      <div className="limit-box">
        <h2>⚠️ Idő- és memóriakorlátozások</h2>
        <p>A feladatok megoldásánál figyelj a megadott idő- és memóriakorlátozásokra!</p>
        <ul>
          <li>Időlimit: 1.00 sec</li>
          <li>Memória limit: 512 MB</li>
        </ul>
      </div>
    </div>
  );
};

export default AlgoritmusOldal;
