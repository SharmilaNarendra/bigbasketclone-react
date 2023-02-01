import React, { useState } from 'react'
import { useDispatch  } from 'react-redux';
import {addItem,removeItem} from "./redux/cartSlice";


const ItemCard = ({productInfo}) => {
    //console.log(productInfo);
    const {p_img_url,p_desc,sp} = productInfo;
    const [itemsInCart,setItemsInCart] = useState(0);
    const dispatch = useDispatch();

  return (
    <div className='itemCard'>
    <div><img alt="" src={p_img_url}/></div>
    <div>{p_desc}</div>
    <div>{sp}</div>
    <div>

        <button onClick={()=>{

            setItemsInCart(itemsInCart+1);
            dispatch(addItem());
        }}>+</button>
        <h3>{itemsInCart}</h3>
        <button onClick={(itemsInCart>0)&&(()=>{
            setItemsInCart(itemsInCart-1);
            dispatch(removeItem());
        })}>-</button>
    </div>
    </div>
  )
}

export default ItemCard