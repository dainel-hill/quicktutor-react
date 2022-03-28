import React, { useEffect } from "react";
const NormalButton = (props) => {
  useEffect(() => {}, []);
  return (
    <div className={props.class}>
      <a className="btn" href="#">
        {props.value}
        <img style={{display:props.imageDisplay}} src={`assets/icons/${props.image}`} />
      </a>
    </div>
  );
};
export default NormalButton;
