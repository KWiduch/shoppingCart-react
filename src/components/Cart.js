
import React,{useEffect, useState} from 'react'
import {CartItem} from './CartItem'



const Cart =()=>{
 
    
    // const [counter,setCounter]=useState(1);
   
    const [data,setData]=useState([{
    "id":1,
    "name":"Headphones",
    "image":"./images/headphones.png",
    "price":11.90,
    "productId":1,
    "quantity":2
  },
//   {
//     "id":2,
//     "name":"shoe",
//     "image":"./images/headphones.png",
//     "price":13.90,
//     "productId":2,
//     "quantity":4
//   },
]);

 const [subTotal,setSubTotal]=useState(13.90*2)
 const [shipping,setShipping]=useState(23.8)
 const [grandTotal,setGrandTotal]=useState(subTotal+shipping)
 const [toggler,setToggler]=useState(true)

 function checkout (){
    setToggler(!toggler);
 }

    return(
        
        <> 
         <div className="head">
                    <div className="cart__title">Shopping Cart</div>
                    <div className="cart__btnCheckOut">
                        <button onClick={checkout}>Proceed to checkout</button>
                    </div>
                </div>
            <div className="cart__container">
              
           
                <div className="cart__content">
                    <div className="cart__main">
                        <div className="cart__header">
                            <div className="cart__product">Product Name</div>
                            <div className="cart__unit">Unit Price</div>
                            <div className="cart__qty">Qty</div>
                        </div>
                        <div className="cart__item">{data.map((d)=>(
                        <CartItem d={d} data={data} setData={setData} setGrandTotal={setGrandTotal} shipping={shipping} setShipping={setShipping} subTotal={subTotal} setSubTotal={setSubTotal} quantity={d.quantity} name={d.name} image={d.image} price={d.price} key={d.id} />
                        ))}
                        
                        </div>
                   
            
                    </div>
                    <div className="cart__summary"></div>
                </div>
                <div className="cart__side">
                    <div className="cart__shipping">
                        <div className="shipping">SHIPPING</div>
                        <div className="shippingPrice">{shipping}</div>
                    </div>
                    <div className="cart__totals">
                        <div className="totals">CART TOTALS</div>
                        <div className="cart__subtotal">
                            <div className="subtotal">Subtotal</div>
                            <div className="subtotalPrice">{"$"+subTotal}</div>
                        </div>
                        <div className="cart__grandtotal">
                            <div className="grandtotal">Grand Total</div>
                            <div className="grandtotalPrice">{"$"+grandTotal}</div>
                        </div>
                    <div className="cart__proceed">
                        <button onClick={checkout}>Proced to checkout</button>
                    </div>
                    <div className="cart__checkout" style={toggler?{display: 'none'}:{display: 'flex'}}>Your order has been submitted successfully</div>
                </div>
            </div>
        </div>
            
    </>
    )
}

export {Cart}