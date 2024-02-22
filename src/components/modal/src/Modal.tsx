import ReactDOM from 'react-dom'
import '../style/desktop.scss'
const Modal = ({children}) => {
  return ReactDOM.createPortal(
    <>
      <div className="ModalBackground"></div>
      <div className="Modal">{children}</div>
    </>,
    document.getElementById('modal'),
  )
}

export default Modal
