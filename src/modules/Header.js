import './Header.css';
import {Outlet, Link} from "react-router-dom";
import { useState } from 'react';
import SiteLinksIntern from './SiteLinksIntern';

function Header(props) {
  
  // const [activeMenu, setActiveMenu] = useState(() => false)

  function toggle(){
    let elemToggle = document.getElementById('Toggler');

    elemToggle.classList.toggle('TogglerRight')
    props.toggleLanguage();
  }

  let styles = {
    // display: activeMenu ? 'block' : 'none' 
    // left: 100vw,
  }

  function toggleMenu(){ 
    
    // if(document.getElementById("MenuCloseX").style.dispay != 'none'){
      var move = document.getElementById('move');
      
      // var mainContent = document.getElementById('mainContent');
      // console.log(`Elements by class name: ${mainContent}`)
      if(props.menueForSmallInput === false){
        move.style.left = '0';
        
        // props.setMenueForSmallInput(input => false);
      }
      if(props.menueForSmallInput === true){
        move.style.left = '-250vw';
        // props.setMenueForSmallInput(input => true);
      }

      // if(window.screen.width < 1280 ){
        // setActiveMenu(state => !state);
        props.setMenueForSmallInput(state => !state);
      // }
      
    // }
    
  }

  return (
    <>
    <div className="ShowMenu" id="move" style={styles}>
           <button className="MenuCloseX" id="MenuCloseX" onClick={toggleMenu}> &#10006;</button>
           <section className="SectionSites">
             <SiteLinksIntern  stylesContentEnglish={props.stylesContentEnglish} stylesContentGerman={props.stylesContentGerman} toggleMenu={toggleMenu}/>
           </section>
       </div>
    <div className="Header">
    <Link className="Link BlockTitle" to="/">Juliettes <br/> Block</Link>
      <div className="InternLinks">
        <SiteLinksIntern stylesContentEnglish={props.stylesContentEnglish} stylesContentGerman={props.stylesContentGerman} toggleMenu={toggleMenu}/>
      </div>
      
      <div className="ToggleButton" onClick={toggle}>
          <div id="Toggler" className="Toggler"></div>
       </div>
       <div className="Menu" onClick={toggleMenu}> &#9776; </div>     
    </div>
    <Outlet />
    </>
  );
}

export default Header;