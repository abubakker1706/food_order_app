import React,{useContext} from "react";
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props)=> {
const cartCxt=useContext(CartContext)
const numberofItems=cartCxt.items.reduce((current, item)=>{
                         return current+ item.amount
},0)

return(
<button className={classes.button} onClick={props.onClick}>
<span className={classes.icon}><CartIcon/></span>
<span>Your Chart</span>
<span className={classes.badge}>{numberofItems}</span>


</button>)
}
export default HeaderCartButton;