import React from "react";

interface RowProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

const WorkRow: React.FC<RowProps> = ({title, description, buttonText, href}: RowProps) => {
  return (
    <div className="row">
      <div className="left">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="button-container">
        <a href={href} target="_blank">
          <button>{buttonText}</button>
        </a>
      </div>
    </div>
  );
}

export default WorkRow;