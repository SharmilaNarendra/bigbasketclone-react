import React from 'react'
import cart from './images/shopping-cart.png'
import { useSelector  } from 'react-redux'

const Nav = () => {

  const itemCount = useSelector((store)=>store.cart);

  return (
    <div className='Nav'>
        <div ><img className='logo' alt="" src='https://gumlet.assettype.com/afaqs%2F2021-11%2Fc57035f1-ad95-4b5c-881e-086506b1f6db%2Fbb_TATA_Double_line_logo.jpg?w=1200&auto=format%2Ccompress&ogImage=true'/></div>
        <div></div>
        <div ><img className='cart' alt=""  src={cart}/>{itemCount}</div>
    </div>
  )
}

export default Nav