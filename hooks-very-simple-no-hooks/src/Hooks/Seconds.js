import { useState,useEffect } from 'react';//Hooks

const Seconds = () => {

  const [seconds, setSeconds] = useState(0);

  //funcion de actualizacion,primerparametroFuncion,dependencia
  //componentDidMount,componentDidMount,componentWillUnmount
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds+1);
     }, 1000) ;
      return ()=>{
        clearInterval(intervalId);
     };
    },[seconds]);//
    return seconds;
}

export default Seconds;