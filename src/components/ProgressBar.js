
const ProgressBar = ({percentual}) => {
  return (
    <div>
    <label>Downloading progress: </label>
      <progress id="barraProgresso" value={percentual} max="100"></progress>
    <span>{percentual}%</span>
    </div>
  )
}

export default ProgressBar