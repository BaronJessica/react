import React, { useState } from 'react'

const Contador = () => {

  const [contador, setContador] = useState(0)

  const somar = () =>{
    setContador(contador+1)
}
    const subtrair = () => {
      setContador(contador-1)
    }



  return (
    <>
      <button onClick={somar}>+</button>
      <button onClick={subtrair}>-</button>
    <span>{contador}</span>
    </>
  )
}

export default Contador