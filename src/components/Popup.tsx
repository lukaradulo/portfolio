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
          Throughout my experience within several IT disciplines and more, I have discovered a passion for Game Design and the position’s potential to innovate and improve the video game industry. Through its abundance of challenging problem solving and keeping up with the ever-changing industry, I hope to keep contributing to gaming’s impressive growth!<br/><br/>
          I love learning, discovering new perspectives and contributing to things that truly matter. Video game development is as exciting as it is demanding and seeing the worlds I imagine come to life is truly a privilege. I find myself very fortunate to be able to call it my job.<br/><br/>
          Read more about who I am, my experience, skills, education, as well as my game Quiet Thoughts in the PDF attached below:
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
            I am seeking out opportunities to collaborate with studios or individuals in making the best video game possible. I want to bring my collective design and development experience to our project so we can achieve the best possible results for our target player base.<br/><br/>
            Let’s create something unforgettable together!<br/><br/>
            Feel free to reach out through my e-mail down below:
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
          <WorkRow title={"Quiet Thoughts"} description={"Led a team of 5+ people to create and publish a game"} buttonText={"To Steam"} href={"https://store.steampowered.com/app/1514620/Quiet_Thoughts/"} src={"banner.png"} />
          <WorkRow title={"Jumpin' Around"} description={"Created a Super Mario Maker 2 level to showcase my level design skills"} buttonText={"To itch.io"} href={"https://lukaradulo.itch.io/lukas-mario-level"} src="mario-level.JPG"/>
          <WorkRow title={"Unity Demo"} description={"Created a demo in Unity to further improve game engine and programming skills"} buttonText={"To itch.io"} href={"https://lukaradulo.itch.io/lukas-playable"} src={"playable.png"}/>
          <div className="button-container">
            <a href="luka-resume.pdf" download="luka-resume.pdf">
              <button>{buttonText}</button>
            </a>
          </div>
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