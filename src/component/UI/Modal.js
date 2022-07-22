import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const BackDrops = (props)=>{
return <div className={classes.backdrop} onClick={props.onClose}>

</div>
}


 const ModalOverLay=(props)=>{
return <div className={classes.modal}>
<div className={classes.content}>{props.children}</div>

</div>
 }



 const portalElement = document.getElementById('overlays');

const Modal =(props)=> {
return <Fragment> 
{ReactDOM.createPortal(<BackDrops onClose={props.onClose}/>,portalElement)}
{ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElement)}


</Fragment>
}

export default Modal;