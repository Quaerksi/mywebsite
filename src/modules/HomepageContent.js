import {useEffect, useRef} from 'react';

function Content(props) {

  const refMenueOpen = useRef(null);

  //let content disappear for full site menu
  useEffect(()=>{
   if(window.screen.width < 1280 && props.menueForSmallInput === true){
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
        <p>Diese responsive Internetseite besteht aus HTML, CSS und JavaScript, eingebetet in die
          React.</p>
        <p>Die Quelldateien findet ihr auf meinem <a href="https://github.com/Quaerksi/mywebsite">GitHub Account</a>.</p>
        <p>Ich arbeite mit folgenden Versionen:</p>
        <ul>
          <li>Java Script ES6</li>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>PHP 8.1.4</li>
          <li>NPM 8.5.0</li>
          <li>GIT 2.35.1</li>
          <li>Visual Studio Code 1.65.2</li>
          <br></br>
          <li>Win 10</li>
          <li>Google Chrome 100</li>
          <li>Firefox 99</li>
          <li>Gimp 2.10.22</li>
          <li>Notepad 8.1.7</li>
        </ul>
        <p>Diese Webseite läuft auf Strato Hosting Plus mit einem PHP/8.0.17 Apache/2.4.53 (Unix) Server.</p>
      </section>
      <section className="Content" style={props.stylesContentEnglish}>
        <h1 className="Contact-Headline HeadlineHomepage">Hello folks</h1>
        <h3>Welcome to my homepage</h3>
        <p>This responsive website consists of HTML, CSS and JavaScript embedded in React</p>
        <p>You can find the source files on my <a href="https://github.com/Quaerksi/mywebsite">GitHub Account</a>.</p>
        <p>I work with the following versions:</p>
        <ul>
          <li>Java Script ES6</li>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>PHP 8.1.4</li>
          <li>NPM 8.5.0</li>
          <li>GIT 2.35.1</li>
          <li>Visual Studio Code 1.65.2</li>
          <br></br>
          <li>Win 10</li>
          <li>Google Chrome 100</li>
          <li>Firefox 99</li>
          <li>Gimp 2.10.22</li>
          <li>Notepad 8.1.7</li>
        </ul>
        <p>This website runs on Strato Hosting Plus with a PHP/8.0.17 Apache/2.4.53 (Unix) Server.</p>
      </section>   
    </div>
  );
}

export default Content;