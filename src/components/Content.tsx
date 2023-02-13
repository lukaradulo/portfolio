import React, { useState } from "react";
import Popup from "./Popup";

const Content: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(0);

  const callbackFunction = (value: boolean) => {
    setOpen(value);
    setSelect(0);
  }

  const popupSwitch = (value?: number) => {
    if (value) setOpen(!open);
    if (value) setSelect(value);

    if (select === 1) {
      return ( 
        <Popup 
          title={'Hi, I\'m Luka.'} 
          content={1} 
          buttonText='download resume'
          parentCallback = {callbackFunction}
        /> 
      );
    } else if (select === 2) {
      return ( 
        <Popup 
          title={'Let\'s make something great!'} 
          content={2} 
          buttonText='send email'
          parentCallback = {callbackFunction}
        /> 
      );
    } else if (select === 3) {
      return ( 
        <Popup 
          title={'What I\'ve done:'} 
          content={3}
          buttonText='download resume'
          parentCallback = {callbackFunction}
        /> 
      );
    } else {
      return (
        <></>
      )
    }
  };

  return (
    <div className="content">
      <div className="upper">
        <h2 onClick={() => popupSwitch(1)}>About</h2>
        <h2 onClick={() => popupSwitch(2)}>Contact</h2>
      </div>
      <div className="lower">
        <h1 onClick={() => popupSwitch(3)}>Work</h1>
      </div>

      <img src="plant.png" className="plant" alt="plant"/>
      <img src="pipe.svg" className="pipe" alt="pipe"/>
    
      {open ? popupSwitch() : <></>}
    </div>
  );
}

export default Content;