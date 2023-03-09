import React from 'react'

const AlertButton = () => {
  alert('Its work')
  return (
<button onChange={alert}>Clique aqui!</button>  
)
}

export default AlertButton