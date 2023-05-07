import React from "react";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";

export const FilterableProductTable = () => {
  return (
    <article style={{ marginLeft: 30, marginRight: 30 }}>
      <h4>FilterableProductTable</h4>
      <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: 400, border: '2px solid yellow', padding:30, margin: 10}}>
        <SearchBar />
        <ProductTable />
      </div>
      </div>
      
    </article>
  );
};
