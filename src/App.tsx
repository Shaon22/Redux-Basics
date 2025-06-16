
import { useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSLice'

function App() {
  
const dispatch=useDispatch()

const handleIncrement=()=>{
  dispatch(increment())
}
const handleDecrement=()=>{
  dispatch(decrement())
}
  return (
    <div>
      <h1>counter with redux</h1>
      <div>0</div>
      <button onClick={handleIncrement}>Increament</button>
      <button onClick={handleDecrement}>Decreament</button>
    </div>
  )
}

export default App
