
import React, { useEffect, useMemo, useState } from 'react'
import {CartItem} from './CartItem'
const SHIPPING_AMOUNT = 23.8

const Cart = () => {
    const [data, setData] = useState(
    [
      {
        "id":1,
        "name":"Headphones",
        "image":"./images/headphones.png",
        "price":11.90,
        "productId":1,
        "quantity":2
      },
    ]
  )

  const [subTotal, setSubTotal] = useState(0)
  const [toggler, setToggler] = useState(true)

  useEffect(() => {
    const newSubTotal = data.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
    setSubTotal(newSubTotal)
  }, [data])


  const shipping = useMemo(() => (
    subTotal >= 100 ? 0 : SHIPPING_AMOUNT
  ), [subTotal])

  const checkout = () => {
    setToggler(!toggler);
  }

  const handleDeleteItem = (id) => {
    const newData = data.filter((el) => el.id !== id)
    setData(newData)
  }
    
  const handleRefresh = (newPrice) => {
    const decimalPrice = (Math.round(newPrice * 100) / 100)
    setSubTotal(decimalPrice)
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
                  <div className="cart__item">
                    {data.map(({ name, image, price, quantity, id})=>(
                      <CartItem
                        key={id}
                        id={id}
                        quantity={quantity}
                        name={name}
                        image={image}
                        price={price}
                        onRefresh={handleRefresh}
                        onDeleteItem={handleDeleteItem} 
                      />
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
                        <div className="grandtotalPrice">{`$ ${subTotal + shipping}`}</div>
                      </div>
                  <div className="cart__proceed">
                    <button onClick={checkout}>Proceed to checkout</button>
                  </div>
                <div className="cart__checkout" style={toggler ? {display: 'none'} : {display: 'flex'}}>
                  Your order has been submitted successfully
                </div>
            </div>
          </div>
      </div>      
    </>
    )
}

export {Cart}
