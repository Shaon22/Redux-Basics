
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSLice'
import { useAppDispatch, useAppSelector } from './redux/hook'

function App() {
  const counter=useAppSelector((state)=>state.counter)
  const {count}=counter
const dispatch=useAppDispatch()

const handleIncrement=()=>{
  dispatch(increment())
}
const handleDecrement=()=>{
  dispatch(decrement())
}
  return (
    <div>
      <h1>counter with redux</h1>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increament</button>
      <button onClick={handleDecrement}>Decreament</button>
    </div>
  )
}

export default App
