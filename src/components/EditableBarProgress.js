import React, { useState } from 'react'

const EditableBarProgress = () => {
  const [percentual,setPercentual] = useState(0);
  return (
    <div>
      <input onChange={percentualUpdate} type="number"  />
      <br />
      <progress value={percentual} max={100}></progress>
    </div>
  )
  function percentualUpdate(e){
    setPercentual(e.target.value);

  }
}

export default EditableBarProgress