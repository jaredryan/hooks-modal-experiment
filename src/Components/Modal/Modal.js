import React, { useRef, useImperativeHandle } from 'react';
import { capitalize } from '../../Utils/formatUtil';
import './modal.css';

const buttonsInformation = [{
  type: 'secondary',
  content: 'CTA Button 1'
}, {
  type: 'primary',
  content: 'Close Modal'
}];

const mapButtonInfoToButton = (props, refs) => info => (
  <button
    key={info.type}
    className={info.type}
    ref={refs[`${info.type}Button`]}
    onClick={props[`on${capitalize(info.type)}Click`]}
  >
    {info.content}
  </button>
);

const Modal = React.forwardRef((props, ref) => {
  const refs = {
    secondaryButton: useRef(),
    primaryButton: useRef(),
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      refs.secondaryButton.current.focus();
    },
    get secondaryButton() {
      return refs.secondaryButton.current;
    },
    get primaryButton() {
      return refs.primaryButton.current;
    },
  }));

  return (
    <>
      {props.open && <div className="overlay" onClick={props.onClickOutsideModal} />}
      <dialog key="modal" open={props.open}>
        <h1>Modal Header</h1>
        <section>
          {Array.from({ length: 40 }, (_info, index) => <p key={index}>Content</p>)}
        </section>
        <footer>
          {buttonsInformation.map(mapButtonInfoToButton(props, refs))}
        </footer>
      </dialog>
    </>
  )
});

export default Modal;
