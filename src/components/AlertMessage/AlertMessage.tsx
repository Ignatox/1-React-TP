import {useState} from 'react';
import AlertGenerator from '../AlertGenerator/AlertGenerator';

const AlertMessage = () => {
    //Guarda el valor del campo de texto
    const [inputValue, setInputValue] = useState('');
    //Guarda el mensaje
    const [message, setMessage] = useState('');
    //Muestra el componente hijo segun el estado
    const [showAlert, setShowAlert] = useState(false);
    //Si el campo no esta vacio se guarda el texsto que escribio el usuariuo en message
    //Se renderiza el componente hijo 
    const handleClick = () => {
        if(inputValue.trim() !== ''){
            setShowAlert(true);
            setMessage(inputValue);
        }else {
            setShowAlert(false);
        }
    }
  return (
    <div className='m-3'>
        <h2>Ejemplo 2</h2>

        {/* Componente padre */}
        <input type="text" value={inputValue} onChange={(e) => 
        setInputValue(e.target.value)} />
        <button onClick={handleClick}> Enviar </button>

        {/* Componente hijo */}
        {showAlert && <AlertGenerator message={message}/>}
    </div>
  )
}

export default AlertMessage