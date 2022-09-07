import { NavLink} from "react-router-dom";

function SiteLinksIntern(props) {

    return (
      <div className="SiteLinksIntern">
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentGerman} to="/">Startseite</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentEnglish} to="/">Homepage</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentGerman} to="/myproject">Mein Blog</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentEnglish} to="/myproject">My blog</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentGerman} to="/projectLinks">Projekte</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentEnglish} to="/projectLinks">Projects</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentGerman} to="/contact">Kontakt</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentEnglish} to="/contact">Contact</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentGerman} to="/tenzies">Tenzies Spiel</NavLink>
        <NavLink className="Link" onClick={props.toggleMenu} style={props.stylesContentEnglish} to="/tenzies">Tenzies Game</NavLink>      </div>
    );
  }
  
  export default SiteLinksIntern;