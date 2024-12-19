import { FC, PropsWithChildren, useRef } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

interface IModal {
  isOpen: boolean;
}

const Modal: FC<PropsWithChildren<IModal>> = ({ isOpen, children }) => {
  const modalRef = useRef<HTMLElement | null>(document.getElementById('modal'));

  if (!modalRef.current || !isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRef.current
  );
};

export default Modal;
