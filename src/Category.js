import React from 'react'
import ItemCard from "./ItemCard"

const Category = ({categoryInfo}) => {

  console.log(categoryInfo);
  const heading = categoryInfo?.tab_info? categoryInfo.tab_info[0].screen_name:null;
  const productList = categoryInfo?.tab_info? categoryInfo.tab_info[0].product_info.products:null;
   
  return (
    <>
    <div><h1>{heading}</h1></div>
    <div className='category'>{productList?.map((product)=><ItemCard productInfo={product} key={product.sku}/>)}</div>
    </>
  )
}

export default Category