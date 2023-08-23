import { useState } from 'react';
import './App.css';
import {FcCheckmark}  from "react-icons/fc";
import {FaArrowAltCircleDown} from "react-icons/fa"

function App() {

  const[fio, setFio] = useState('')
  const [number, setNumber] = useState('')
  const [mail, setMail] = useState('')
  const [show, setShow] = useState(false)
  const [errorMessage, setErrorMesage] = useState('')

  const handleFioChange = (e) => {
    setFio(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  }

  const handleMailChange = (e) => {
    setMail(e.target.value);
  }

  const handleShowChange = () => {
    setShow(true)
  }


  const errorText = () => {
    if(fio === "" && mail === "" && number === ""){
      return setErrorMesage('Заполните поля!')
    }else {
      handleShowChange()
      return setErrorMesage('')
    }
  }

  const final = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <form className='card'>
        <label htmlFor='fio'>Твоя ФИО</label>
        <input type='text' id='fio' value={fio} onChange={handleFioChange}></input>
        <label htmlFor='number'>Твой номер телефона</label>
        <input type='number' id='number' value={number} onChange={handleNumberChange}></input>
        <label htmlFor='mail'> Твой gmail</label>
        <input type='text' id='mail' value={mail} onChange={handleMailChange}></input>
        <button type='button' onClick={errorText} >Проверить</button>
        <h3 style={{color: 'red'}}>{errorMessage}</h3>
      </form> 
      {show && (
      <div className='card'>
        <div className='show-all'>
            Ваши ответы
            <div className='demonstrate'> Ваши ФИО <FaArrowAltCircleDown className='icon'/></div>
            <div className='display'>{fio}</div>
            <div className='demonstrate'>Твой номер <FaArrowAltCircleDown className='icon'/></div>
            <div className='display'>{number}</div>
            <div className='demonstrate'>Твой GMail <FaArrowAltCircleDown className='icon'/></div>
            <div className='display' >{mail}</div>
            <button onClick={final}>Все верно <FcCheckmark /></button>
        </div>  
      </div> 
    )}
    </div>
  );
}

export default App;
