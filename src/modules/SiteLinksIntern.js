import { NavLink} from "react-router-dom";

function SiteLinksIntern(props) {

    return (
      <div className="SiteLinksIntern">
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentEnglish} to="/">Homepage</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentGerman} to="/">Startseite</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentEnglish} to="/myproject">My blog</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentGerman} to="/myproject">Mein Blog</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentEnglish} to="/contact">Contact</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentGerman} to="/contact">Kontakt</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentGerman} to="/tenzies">Tenzies Spiel</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentEnglish} to="/tenzies">Tenzies Game</NavLink>
        {/* Chat App */}
        <a className="Link Link-Snake" target="blank" href="https://object-driven-chat-app.herokuapp.com/">&#128279;Chat App</a>
        
        {/* Vanilla JS Game */}
        <a className="Link Link-Snake" target="blank" href="http://snake-game.salevsky.net/" style={props.stylesContentEnglish}>&#128279;Snake Game</a>
        <a className="Link Link-Snake" target="blank" href="http://snake-game.salevsky.net/" style={props.stylesContentGerman}>&#128279;Schlangenspiel</a>
      </div>
    );
  }
  
  export default SiteLinksIntern;