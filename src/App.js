import './App.css';
import {useState} from 'react'
import Button from './Button';
import Message from './Message';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];



function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious(){
    if(step > 1)
    setStep((s)=>s-1)
   }
   
   function handleNext(){
    if(step < 3)
     setStep((s)=>s+1)
    }

  return (
    <div>
      <button className='close' onClick={()=>setIsOpen((is)=>!is)}>&times;</button>
      {isOpen?(<div className="steps">
      <div className="numbers">
        <div className={`${step >=1?"active":""}`}>1</div>
        <div className={`${step >=2?"active":""}`}>2</div>
        <div className={`${step >=3?"active":""}`}>3</div>
      </div>
      <Message>Step {step} - {messages[step - 1]}</Message>
      <div className="buttons">
        <Button textColor="#fff" bgColor= "#7950f2" onClick={handlePrevious}>⏮️ Previous</Button>
        <Button textColor="#fff" bgColor= "#7950f2" onClick={handleNext}>Next ⏭️</Button>
      </div>
    </div>):(null)}
    </div>
  );
}

export default App;
