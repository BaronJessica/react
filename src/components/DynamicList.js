import React, { useState } from 'react'

const DynamicList = () => {
  const [item, setItem] = useState('');
  const [listaItens, setListaItens]= useState([]);

  const handleItem = (event) => {
    setItem(event.target.value);
  };

  const handleInclude = ()=> {
    if(item.length>0) setListaItens([...listaItens, item]);
    setItem(' ');
  }

  return (
    <>
    <div>
      <span>Nome do item<input type={item} onChange={handleItem} /></span>
     <button onClick={handleInclude}> Enviar</button>
    </div>
    <div>
      <ul>
        {listaItens.map((item) =>
        <li>{item}</li>)}
      </ul>
    </div>
    </>
  )
  
}
export default DynamicList