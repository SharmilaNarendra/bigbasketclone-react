import React, { useEffect, useState } from 'react'
import Category from './Category'
import data from "./data.json"

const Container = () => {
const [categoryList,setCategoryList] = useState({});

useEffect(()=>{
   setCategoryList(data);
},[]);

  return (
    <div><Category categoryInfo={categoryList} /></div>
  )
}

export default Container