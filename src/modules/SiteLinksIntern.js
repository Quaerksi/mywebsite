import { NavLink} from "react-router-dom";

function SiteLinksIntern(props) {

    return (
      <div className="SiteLinksIntern">
        {/* activeClassName="active" */}
        <NavLink className="Link Link-Homepage"  onClick={props.toggleMenu} style={props.stylesContentEnglish} to="/">Homepage</NavLink>
        <NavLink className="Link Link-Homepage" onClick={props.toggleMenu} style={props.stylesContentGerman} to="/">Startseite</NavLink>
        <NavLink className="Link Link-About" onClick={props.toggleMenu} style={props.stylesContentEnglish} to="/myproject">My Project</NavLink>
        <NavLink className="Link Link-About" onClick={props.toggleMenu} style={props.stylesContentGerman} to="/myproject">Mein Projekt</NavLink>
        <NavLink className="Link"  onClick={props.toggleMenu} style={props.stylesContentEnglish} to="/contact">Contact</NavLink>
        <NavLink className="Link"  onClick={props.toggleMenu} style={props.stylesContentGerman} to="/contact">Kontakt</NavLink>
        <NavLink className="Link"  onClick={props.toggleMenu} style={props.stylesContentGerman} to="/tenzies">Tenzies Spiel</NavLink>
        <NavLink className="Link"  onClick={props.toggleMenu} style={props.stylesContentEnglish} to="/tenzies">Tenzies Game</NavLink>
        {/* Vanilla JS Game */}
        <a className="Link Link-Snake" href="http://snake-game.salevsky.net/" style={props.stylesContentEnglish}>&#128279;Snake Game</a>
        <a className="Link Link-Snake" href="http://snake-game.salevsky.net/" style={props.stylesContentGerman}>&#128279;Schlangenspiel</a>
      </div>
    );
  }
  
  export default SiteLinksIntern;