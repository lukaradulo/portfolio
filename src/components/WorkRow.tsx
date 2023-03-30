import React from "react";

interface RowProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  src: string;
  hasButton: boolean;
}

const WorkRow: React.FC<RowProps> = ({title, description, buttonText, href, src, hasButton}: RowProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="left">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {
          hasButton ?
          <div className="button-container">
            <a href={href} target="_blank" rel="noreferrer">
              <button>{buttonText}</button>
            </a>
          </div>
          : <></>
        }
      </div>

      <div className="image-container">
        <img src={src} alt="project" />
      </div>
    </div>
  );
}

export default WorkRow;