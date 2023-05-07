import React from 'react'
import { SearchBar } from './SearchBar'
import { ProductTable } from './ProductTable'



export const FilterableProductTable = () => {
    return <article style={{marginLeft: 30, marginRight: 30}}>
        <h4>FilterableProductTable</h4>
        <SearchBar />
        <ProductTable />
    </article>
}