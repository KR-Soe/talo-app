import './styles/index.scss';

function Modal({ title, modalHandler, shouldBeShown, children}) {
  return (
    <div className='modal'>
      <div className="modal-component">
        <div className='modal-header'>
          <div className='modal-header__title'><span>{title}</span></div>
          <div className='modal-header__close-button' onClick={() => modalHandler()}></div>
        </div>
        <div className='modal-body'>
          {children}
        </div>
      </div>
    </div>
  );
}
  
export default Modal;
  