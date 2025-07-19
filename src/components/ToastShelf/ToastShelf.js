import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { listOfToasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {listOfToasts.map(({ variant, message, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} message={message} id={id} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
