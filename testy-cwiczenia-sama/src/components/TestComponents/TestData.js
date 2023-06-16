import React, { useEffect, useState } from "react";

export const TestData = () => {
  const [photo, setPhoto] = useState([]);
  const [checked, setChecked] = useState('')
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPhoto(data);
      });
  }, []);
  return (
    <div>
      <select name="" id="" onChange={(e) => setChecked(e.target.value)}>
        <option value="" hidden>
          Wybiesz zdjęcie
        </option>
        {photo.map((fot) => {
          return <option value={fot.id}>{fot.title}</option>;
        })}
      </select>
        
    </div>
  );
};
