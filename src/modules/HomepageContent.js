import {useEffect, useRef} from 'react';

function HomepageContent(props) {

  const refMenueOpen = useRef(null);

  //let content disappear for full site menu
  useEffect(()=>{
   if(window.innerWidth < 1280 && props.menueForSmallInput === true){
       refMenueOpen.current.style.display = 'none';
    } else {
      refMenueOpen.current.style.display = 'block';
   }
}, [props.menueForSmallInput]);

  return (
    <div className="Main-Content" ref={refMenueOpen}>
      <section className="Content" style={props.stylesContentGerman}>
        <h1 className="HeadlineHomepage">Hallo Leute</h1>
        <h3>Willkommen auf meiner Homepage</h3>
        <p>Sie ist responsiv und mit React erstellt.</p>
        <p>Die Quelldateien findet ihr auf meinem <a href="https://github.com/Quaerksi/" target="blank">GitHub Account</a>.</p>
        <p>Diese Website wurde mit folgenden Technologien erstellt:</p>
        <ul>
          <li>Java Script ES6</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>PHP</li>
          <li>NPM</li>
          <li>Git</li>
          <li>Visual Studio Code</li>
          <li>Gimp</li>
          <li>Notepad</li>
        </ul>
        <p>Sie läuft auf Strato Hosting Plus mit einem PHP Apache Unix Server.</p>
      </section>
      <section className="Content" style={props.stylesContentEnglish}>
        <h1 className="Contact-Headline HeadlineHomepage">Hello folks</h1>
        <h3>Welcome to my homepage</h3>
        <p>It is responsive and built with React.</p>
        <p>You can find the source files on my <a href="https://github.com/Quaerksi/" target="blank">GitHub Account</a>.</p>
        <p>The website was created using the following technologies:</p>
        <ul>
          <li>Java Script ES6</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>PHP</li>
          <li>NPM</li>
          <li>Git</li>
          <li>Visual Studio Code</li>
          <li>Gimp</li>
          <li>Notepad</li>
        </ul>
        <p>It runs on Strato Hosting Plus with a PHP Apache Unix Server.</p>
      </section>   
    </div>
  );
}

export default HomepageContent;