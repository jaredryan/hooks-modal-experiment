import React from 'react';
import './page.css';

const Page = React.forwardRef((props, ref) => (
  <div className="pageContainer">
    <button
      onClick={props.openModal}
      ref={ref}
      className="primary"
    >
      CSS Test Modal
    </button>
    <p className="needToScroll"><b>Scroll to see me</b></p>
  </div>
));

export default Page;
