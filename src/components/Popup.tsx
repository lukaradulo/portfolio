import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';

interface PopupProps {
  title: string;
  text: string;
  buttonText: string;
  parentCallback: (value: boolean) => void;
}

const Popup: React.FC<PopupProps> = ({title, text, buttonText, parentCallback}: PopupProps) => {  
  
  const sendData = () => {
    parentCallback(false);
  }
  
  return (
    <div className="popup">
      <div className="innards">
        <div className="header">
          <h1>{title}</h1>
          <div className="exit">
            <CancelIcon onClick={sendData} sx={{ color: 'white', cursor: 'pointer' }}/>
          </div>
        </div>

        <p className="text">{text}</p>

        <div className="button-container">
          <button>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;