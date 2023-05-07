import React from "react";

export const ProductCategoryRow = (props) => {
  const { category } = props;
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
};
