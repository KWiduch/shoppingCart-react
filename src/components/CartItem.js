import React,{useState} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from '@material-ui/core';

const CartItem=({
  id,
  name,
  price,
  image,
  quantity: initQuantity,
  onRefresh: handleRefresh,
  onDelete: handleDeleteItem,
})=>{
  const [newPrice,setNewPrice] = useState(price * initQuantity);
  const [quantity,setQuantity] = useState(initQuantity);

  const increment = () =>{
    setQuantity(counter => counter + 1);
    setNewPrice(prevPrice => prevPrice + price)
  }
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(counter => counter - 1);
      setNewPrice(prevPrice => prevPrice - price)
    }
    else handleDeleteItem();
  }
  
  return(
    <>
      <div className="container">
        <div className="cart__del">
          <IconButton onClick={() => handleDeleteItem(id)}>
            <ClearIcon style={{ fontSize: 18, color: 'black' }}/>
          </IconButton>
        </div>
        <div className="cart__img"><img src={image} alt="img"/></div>
        <div className="cart__name">{name}</div>
        <div className="cart__price">
          {(Math.round(newPrice * 100) / 100).toFixed(2)}
        </div>
        <div className="cart__quantity">
          <div className="minus">
            <IconButton onClick={decrement}>
              <RemoveIcon style={{ fontSize: 18, color: 'black' }}/>
            </IconButton>
          </div>
          <div className="number">{quantity}</div>
          <div className="plus">
            <IconButton onClick={increment}>
              <AddIcon style={{ fontSize: 18, color: 'black' }}/>
            </IconButton></div>
          <div className="edit">
            <IconButton onClick={() => handleRefresh(newPrice)}>
              <CreateIcon style={{ fontSize: 16, color: 'black' }}/>
            </IconButton>
          </div>
        </div>
        </div>
        <div className="cart__footer">
        <div className="cart__update">
          <button onClick={() => handleRefresh(newPrice)}>
            Update Shopping Cart
          </button></div>
      </div>
    </>
    )
}

export {CartItem}
