import {useEffect, useRef} from 'react';

function Content(props) {

  const refMenueOpen = useRef(null);

  useEffect(()=>{
    console.log(`windows screen width: ${window.screen.width}`);
   if(window.screen.width < 1280 && props.menueForSmallInput === true){
       refMenueOpen.current.style.display = 'none';
      //  console.log('styleInput' + styleInput)
    } else {
   refMenueOpen.current.style.display = 'block';
      // console.log('styleInput' + styleInput)
   }
}, [props.menueForSmallInput]);

  return (
    <div className="Main-Content" ref={refMenueOpen}>
      <section className="Content" style={props.stylesContentGerman}>
        <p>Hallo ihr Runkelrüben</p>
        <p>Ich heiße Juliette und ich bin Frontend-Entwicklerin.</p>
        <p>Am Computer auf einem weichen Stuhl, da halte ich es gerne lange aus.</p>
        <p>Zu Hause nutze ich jede freie Zeit fürs Selbststudium.</p>
        <p>Diese responsive Internetseite besteht aus HTML, CSS und JavaScript, eingebetet in
          die React Bibliothek. Bilder bearbeite ich mit gimp. Der Quellcode ist
          auf GitHub zu finden.</p>
      </section>
      <section className="Content" style={props.stylesContentEnglish}>
        <p>Hello you turnips</p>
        <p>My name is Juliette and I'm a frontend developer.</p>
        <p>At the computer on a soft chair, I like to endure it for a long time.</p>
        <p>At home I use every free time for self-study.</p>
        <p>This responsive website consists of HTML, CSS and JavaScript embedded in
          the React library. I edit images with gimp. The source code is
          found on GitHub.</p>
      </section>   
    </div>
  );
}

export default Content;