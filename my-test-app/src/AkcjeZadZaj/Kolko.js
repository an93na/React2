import React, { useState } from "react";

export const Kolko = () => {
  const [colorTla, setColorTla] = useState("blue");
  const [ksztalt, setKsztalt] = useState("0");
  const [polozenie, setPolozenie] = useState("");
  const [colorRamki, setColorRamki] = useState("");
  const [gruboscRamki, setGruboscRamki] = useState("");

  return (
    <article>
      <h4>Stylowanie elementu</h4>
      <div style={{display: "flex", gap: 30, margin: 20}}>
        <h5>wybierz kolor tła: </h5><input type="color" name="" id="" style={{width: 100}} value={colorTla} onChange={(event) => setColorTla(event.target.value) }/>
      </div>
      <div style={{display: "flex", gap: 30, margin: 20}}>
        <h5>wybierz kształt: </h5><input type="range" name="" id="" style={{width: 150}} value={ksztalt} onChange={(event) => setKsztalt(event.target.value) }/>
      </div>
      
      <div style={{width:100, height:100, backgroundColor: colorTla, borderRadius:`${ksztalt}px`}}></div>
    </article>
  );
};
