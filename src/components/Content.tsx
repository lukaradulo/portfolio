import React from "react";

const Content: React.FC = () => {
  return (
    <div className="content">
      <div className="upper">
        <h2>About</h2>
        <h2>Contact</h2>
      </div>
      <div className="lower">
        <h1>Work</h1>
      </div>

      <img src="plant.png" className="plant" alt="plant"/>
      <img src="pipe.svg" className="pipe" alt="pipe"/>
    </div>
  );
}

export default Content;