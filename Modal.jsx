import { useEffect, useRef, useState } from 'react';
import closeImg from './close.png';

import './modal.css';

function Modal({ title, content, buttonRef }) {
  const [display, setDisplay] = useState({ display: 'none' });
  const modalRef = useRef(null);

  function open() {
    setDisplay({ display: 'block' });
  }

  function close() {
    setDisplay({ display: 'none' });
  }

  useEffect(() => {
    modalRef.current.onclick = close;
    const currentBtnRef = buttonRef.current;
    if (buttonRef.current) {
      buttonRef.current.onclick = open;
    }
    return () => {
      if (currentBtnRef) {
        currentBtnRef.onclick = null;
      }
    };
  }, [buttonRef]);

  return (
    <div className="modalContainer" ref={modalRef} style={display}>
      <div className="modal">
        {title && <h2 className="modal__title">{title}</h2>}
        <div>{content && <p className="modal__content">{content}</p>}</div>
        <img
          src={closeImg}
          alt="close button"
          className="modal__close"
          onClick={close}
        />
      </div>
    </div>
  );
}

export default Modal;
