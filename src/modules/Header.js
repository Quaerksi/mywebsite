import './Header.css';
import {Outlet, Link} from "react-router-dom";
import SiteLinksIntern from './SiteLinksIntern';
import {useState, useEffect, useRef} from 'react'

// debouncer for window size releod
//ms is time to wait
function debounce(fn, ms = 30){
  let timer
  return () => {
    clearTimeout(timer);
    timer = setTimeout( _ => {
       timer = null
       fn.apply(this, arguments)
      }, ms)
  };
}

function Header(props) {

  //state for window size
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  function handleResize(){
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  const refMenu = useRef(null);

  let menuDisappear = () => refMenu.current.style.left = '-250vw';
  let menuAppear = () => refMenu.current.style.left = '0';
  let changeState = () => props.setMenueForSmallInput(state => !state);

  useEffect(() =>{
        const debounceHandleResize = debounce(handleResize);
        // console.log(`Window height: ${dimensions.height}, Window with ${dimensions.width}`);

        if(dimensions.width > 1280 && props.menueForSmallInput === true){
          changeState()
          menuDisappear();
        }

        window.addEventListener('resize', debounceHandleResize);
    
        return ()=> { window.removeEventListener('resize', debounceHandleResize);
    }
  })

  //toggle menu on small screens
  function toggleMenu(){ 

    if(dimensions.width < 1280 ){

      if(props.menueForSmallInput === false){
        menuAppear();
      }
      if(props.menueForSmallInput === true){
        menuDisappear();
      }
      // change state
      changeState();
      }
    }

  //toggle language
  function toggle(){
    let elemToggle = document.getElementById('Toggler');

    elemToggle.classList.toggle('TogglerRight')
    props.toggleLanguage();
  }

  return (
    <>
    <div className="ShowMenu" ref={refMenu}>
           <button className="MenuCloseX" id="MenuCloseX" onClick={toggleMenu}> &#10006;</button>
           <section className="SectionSites">
             <SiteLinksIntern  stylesContentEnglish={props.stylesContentEnglish} stylesContentGerman={props.stylesContentGerman} toggleMenu={toggleMenu}/>
           </section>
       </div>
    <div className="Header HeaderBackground">
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