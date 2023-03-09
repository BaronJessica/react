



const ItemList = ({listaItens}) => {
  
 
  return (
 <div>
   {listaItens.filter((elemento) => elemento.estoque === true).map((elemento) => (
     <li>{elemento.nome} {elemento.estoque === true? 'e estoque ok': ""}</li> ))}
    
      
   
  </div>
     

    
  )
}

export default ItemList



