import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";

export const FilterableProductTable = () => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  return (
    <article style={{ marginLeft: 30, marginRight: 30 }}>
      <h4>Filterable Product Table</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 400,
            border: "2px solid yellow",
            padding: 30,
            margin: 10,
          }}
        >
          <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}
          />
          <ProductTable
            products={PRODUCTS}
            filterText={filterText}
            inStockOnly={inStockOnly}
          />
        </div>
      </div>
    </article>
  );
};
