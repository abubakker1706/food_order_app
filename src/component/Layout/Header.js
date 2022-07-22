import React,{Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'

const Header =(props)=>{

return <Fragment>
<header className={classes.header}>

<h1 >Abu's Meal</h1>
<HeaderCartButton onClick={props.onShowCart}/>
</header>
<div>
<img  className={classes['main-image']}src={mealsImage} alt="Table of delicious food"/>
</div>


</Fragment>
}
export default Header;