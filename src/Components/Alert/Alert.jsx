import React from 'react';
import { CSSTransition } from 'react-transition-group';
import css from './Alert.module.css';

const Alert = () => {
  return (
    // <CSSTransition
    //   classNames={css}
    //   in={true}
    //   appear={true}
    //   timeout={1500}
    //   unmountOnExit
    // >
      <div className={css.alertWrapper}>
        <p>Contact already exist !</p>
      </div>
    {/* </CSSTransition> */}
  );
};

export default Alert;
