import React, { useState } from "react";

export const Kolko = () => {
  const [colorTla, setColorTla] = useState("blue");
  const [ksztalt, setKsztalt] = useState("0");
  const [colorRamki, setColorRamki] = useState("");
  const [gruboscRamki, setGruboscRamki] = useState("");
  const [justifyContentValue, setJustifyContentValue] = useState("flex-start");

  const handleRadioButtonChange = (e) => {
    setJustifyContentValue(e.target.value);
  };
  return (
    <article>
      <h4>Stylowanie elementu</h4>
      <div style={{ display: "flex", gap: 30, margin: 20 }}>
        <h5>wybierz kolor tła: </h5>
        <input
          type="color"
          name=""
          id=""
          style={{ width: 100 }}
          value={colorTla}
          onChange={(event) => setColorTla(event.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: 30, margin: 20 }}>
        <h5>wybierz kształt: </h5>
        <input
          type="range"
          name=""
          id=""
          style={{ width: 150 }}
          value={ksztalt}
          onChange={(event) => setKsztalt(event.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: 30, margin: 20 }}>
        <h5>wybierz położenie: </h5>
        <label>
          <input
            onChange={handleRadioButtonChange}
            type="radio"
            name="flex"
            value="flex-start"
          />{" "}
          Flex-start
        </label>

        <label>
          <input
            onChange={handleRadioButtonChange}
            type="radio"
            name="flex"
            value="center"
          />{" "}
          Center
        </label>

        <label>
          <input
            onChange={handleRadioButtonChange}
            type="radio"
            name="flex"
            value="flex-end"
          />{" "}
          Flex-end
        </label>
      </div>

      <div style={{ display: "flex", gap: 30, margin: 20 }}>
        <h5>wybierz grubość ramki: </h5>
        <select name="" id="" onChange={(e) => setGruboscRamki(e.target.value)}>
          <option value="" hidden>
            Wybierz grubość ramki
          </option>
          <option value="1px">1px</option>
          <option value="2px">2px</option>
          <option value="3px">3px</option>
          <option value="4px">4px</option>
          <option value="5px">5px</option>
        </select>
      </div>
      <div style={{ display: "flex", gap: 30, margin: 20 }}>
        <h5>wybierz kolor ramki: </h5>
        <input
          type="color"
          name=""
          id=""
          style={{ width: 100 }}
          value={colorRamki}
          onChange={(event) => setColorRamki(event.target.value)}
        />
      </div>
      <b style={{ display: "block", margin: 30 }}>Preview</b>
      <div style={{ display: "flex", justifyContent: justifyContentValue }}>
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: colorTla,
            borderRadius: `${ksztalt}px`,
            border: `${gruboscRamki} solid ${colorRamki}`,
          }}
        ></div>
      </div>
    </article>
  );
};
