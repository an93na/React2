import React, { useEffect, useState } from "react";


export const TestData = () => {
    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => {
            setPhoto(data);
          });
      }, []);
    return <div>
        <select name="" id="">
            <option value="" hidden>Wybiesz zdjęcie</option>
            {photo.map((fot)=> {
                return <option value={fot}>{fot}</option>
            })}
        </select>
    </div>
}