import { useEffect, useState, useRef } from 'react';
import './TenziesMain.css';
import Tenzie from './Tenzie.js';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti';
import Footer from '../modules/Footer';

function TenziesMain(props) {

  //lazy state initialization
  const [myNumbers, setMyNumbers] = useState(() => randomNumbers())
  const [win, setWin] = useState(() => false)

  //console.log(`My numbers:  ${myNumbers[0].number}, ${myNumbers[0].id}, ${myNumbers[0].isActive}`)

  useEffect(() => {
    if (myNumbers.every(object => object.isActive) 
    && myNumbers.every((currentValue, index, arr) => arr[0].number === currentValue.number )) {
     
     setWin(true)
    }
  }, [myNumbers])

  // useEffect(() => {
  //   console.log('gewonnen')
  // },[win] )

  function newRandomObject(){
    return {
      'number': Math.ceil((Math.random()*6)), 
      'id': nanoid(),
      'isActive': false
    }
  }

  //10 random numbers between 1 and 6
  function randomNumbers(){
    let randomNumbers = []

    for(let i = 0; i < 10; i++){

      randomNumbers.push(newRandomObject())
    }
   
    //console.log(`Random number: ${randomNumbers[0].id}`)
    return randomNumbers;
  }

  randomNumbers();

  function toggle(id){
    //console.log(`toggle: ${myNumbers[0].isActive}`)
    setMyNumbers(oldNumbers => oldNumbers.map(oldNumber => 
      oldNumber.id === id ? {...oldNumber, 'isActive': !oldNumber.isActive} : oldNumber)
    )
  }

  function controlButton(){
    if(win){
      setMyNumbers(randomNumbers())
      setWin(false)
      } 
      setMyNumbers(numbers => numbers.map(number =>
        number.isActive ? number : newRandomObject()
      ))
    }

    const refMenueOpen = useRef(null);

    //let content disappear for full site menu
    useEffect(()=>{
        // console.log(`menue open? ${props.menueForSmallInput}`)
        if(window.innerWidth < 1280 && props.menueForSmallInput === true){
            refMenueOpen.current.style.display = 'none';
         } else {
            refMenueOpen.current.style.display = 'block';
        }
     }, [props.menueForSmallInput]);
    
  return (
    // className="Layout"
    <div className="Layout" >
     
      <div className="TenziesMain Main-Content"  ref={refMenueOpen}>
      {win && <Confetti />}
      <h1 className="Template-Headline">Tenzies</h1>
      <p className='titleParagraph' style={props.stylesContentGerman}>Rollen Sie, bis alle Würfel gleich sind. Klicken Sie auf jeden Würfel, um ihn zwischen den Würfen auf seinem aktuellen Wert einzufrieren.</p>
      <p className='titleParagraph' style={props.stylesContentEnglish}>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
        <div className="Tenzie-Game">
          {
            myNumbers.map(numb => <Tenzie num={numb.number} key={numb.id} isActive={numb.isActive} onClick={() => toggle(numb.id)} />)
          }
          
        </div>
        <button className="btn" onClick={controlButton} style={props.stylesContentGerman}>{win ? 'Start again': 'Rollen'}</button>
        <button className="btn" onClick={controlButton} style={props.stylesContentEnglish}>{win ? 'Start again': 'Roll'}</button>
      </div>
      <Footer stylesContentGerman={props.stylesContentGerman} stylesContentEnglish={props.stylesContentEnglish}/> 
    </div>
  );
}

export default TenziesMain;
