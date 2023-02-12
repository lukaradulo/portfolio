import React, { useState } from "react";
import Popup from "./Popup";

const Content: React.FC = () => {
  const [open, setOpen] = useState(false);

  const callbackFunction = (value: boolean) => {
    setOpen(value);
  }

  const aboutPopup: () => JSX.Element = () => {
    return ( 
      <Popup 
        title={'I design & build digital products'} 
        text={'mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch'} 
        buttonText='send email'
        parentCallback = {callbackFunction}
      /> 
    );
  };

  return (
    <div className="content">
      <div className="upper">
        <h2 onClick={() => setOpen(!open)}>About</h2>
        <h2>Contact</h2>
      </div>
      <div className="lower">
        <h1>Work</h1>
      </div>

      <img src="plant.png" className="plant" alt="plant"/>
      <img src="pipe.svg" className="pipe" alt="pipe"/>
    
      { open ? 
      aboutPopup()
      : <></>}
    </div>
  );
}

export default Content;