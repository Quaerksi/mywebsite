import './Teaser.css';

function Teaser() {
  return (
    <div>

      <div className="Spacer"></div>
      <img className="Teaser-small" src="./images/static-teaser.png" width="100%" alt="static teaser for small screens"/>
    
      <div className="Teaser">
        <div className="Layout-container">
          <div className="Logo-css3"></div>
          <div className="Logo-gimp"></div>
          <div className="Logo-html5"></div>
          <div className="Logo-js"></div>
          <div className="Logo-npm"></div>
          <div className="Logo-react"></div>
        </div>
      </div>
      
    </div>
  );
}

export default Teaser;