import React,{useState} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from '@material-ui/core';
// import {data} from './data'

const CartItem=({name,data,d,setData,setShipping,shipping,subTotal,setSubTotal,setGrandTotal,key,price,image,quantity})=>{
    const [newprice,setNewPrice]=useState(price*quantity);
    const [counter,setCounter]=useState(quantity);
    const Increment =()=>{
        setCounter(counter+1);
        setNewPrice(newprice+price)
    }
    const Decrement =()=>{
        if(counter>1){
        setCounter(counter-1);
        setNewPrice(newprice-price)
        }
        else deleteItem();


    }
    const deleteItem=()=>{
    setData(data.filter((el) => el.id !== d.id));
    setSubTotal(0)
    setNewPrice(0)
    setGrandTotal(0)
    //ddd
    }
    
    const Refresh=()=>{
        let decimalPrice=(Math.round(newprice * 100) / 100)
        if(decimalPrice>=100){
            setShipping(0)
            setSubTotal(decimalPrice)
            let decimalTotal=decimalPrice+shipping
            setGrandTotal(decimalTotal)
        }
        else
        setSubTotal(decimalPrice)
        let decimalTotal=decimalPrice+shipping
        setGrandTotal(decimalTotal)
    }
    
    return(
        <>
        <div className="container">
            <div className="cart__del"><IconButton onClick={deleteItem}><ClearIcon style={{ fontSize: 18, color: 'black' }}/></IconButton></div>
            <div className="cart__img"><img src={image} alt="img"/></div>
            <div className="cart__name">{name}</div>
            <div className="cart__price">{(Math.round(newprice * 100) / 100).toFixed(2)}</div>
            <div className="cart__quantity">
                <div className="minus"> <IconButton onClick={Decrement}><RemoveIcon style={{ fontSize: 18, color: 'black' }}/></IconButton></div>
                <div className="number">{counter}</div>
                <div className="plus"><IconButton onClick={Increment}><AddIcon style={{ fontSize: 18, color: 'black' }}/></IconButton></div>
                <div className="edit"><IconButton onClick={Refresh}><CreateIcon style={{ fontSize: 16, color: 'black' }}/></IconButton></div>
            </div>
        </div>
             <div className="cart__footer">
                <div className="cart__update"><button onClick={Refresh}>Update Shopping Cart</button></div>
            </div>
        
       
        </>
    )
}

export {CartItem}