import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onClose}/>

}

function ModalOverLay(props) {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const portalElement = document.getElementById('overlays');

function Modal(props) {
    return <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/> , portalElement)}
    {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement)}
    </>
}
export default Modal;