import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import WorkRow from "./WorkRow";

interface PopupProps {
  title: string;
  content: number;
  buttonText?: string;
  parentCallback: (value: boolean) => void;
}

const Popup: React.FC<PopupProps> = ({title, content, buttonText, parentCallback}: PopupProps) => {  
  
  const sendData = () => {
    parentCallback(false);
  }

  const renderContent: () => JSX.Element = () => {
    if (content === 1) {
      return (
        <div className="about-and-contact">
          <p className="text">
          I am an individual that enjoys reading and working on video games that have the potential to innovate and improve the video game industry. After working through several IT disciplines, I became particularly interested in Game Design as it provides an abundance of challenging, logical problems that I enjoy solving.<br/><br/>
          I prefer to keep learning, continue challenging myself, and do interesting things that matter. Almost every part of video game development is fun to me, and I find myself very fortunate to be able to call this my job.<br/><br/>
          You can read more about me and my experience, skills, education, and much more in the PDF attached below:
          </p>

          <div className="button-container">
            <a href="luka-resume.pdf" download="luka-resume.pdf">
              <button>{buttonText}</button>
            </a>
          </div>
        </div>
      );
    } else if (content === 2) {
      return (
        <div className="about-and-contact">
          <p className="text">
            I'm seeking out opportunities to collaborate with studios / individuals, and make the best video game possible. I want to bring my collective design and development experience to the table where we can work together to create the best experience for your target player base.<br/><br/>
            I thrive in an open-minded environment where the focus is on innovation and creation of an experience which players will remember for years. If you have that then I believe we'd be a great fit!<br/><br/>
            Feel free to reach out through my email down below:
          </p>

          <div className="button-container">
            <a href="mailto: radultec@gmail.com">
              <button>{buttonText}</button>
            </a>
          </div>
        </div>
      );
    } else if (content === 3) {
      return (
        <div className="work">
          <WorkRow title={"Quiet Thoughts"} description={"Led a team of 5+ people to create and publish a game"} buttonText={"To Steam"} href={"https://store.steampowered.com/app/1514620/Quiet_Thoughts/"} />
          <WorkRow title={"Super Mario Maker 2"} description={"Created a level to showcase my level design skills"} buttonText={"To itch.io"} href={"https://lukaradulo.itch.io/lukas-mario-level"} />
          <WorkRow title={"Unity Demo"} description={"Created a demo in Unity to further improve game engine and programming skills"} buttonText={"To itch.io"} href={"https://lukaradulo.itch.io/lukas-playable"} />
        </div>
      );
    }
    return (<></>)
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

        {renderContent()}
      </div>
    </div>
  );
};

export default Popup;