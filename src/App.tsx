
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSLice'
import { useAppDispatch, useAppSelector } from './redux/hook'

function App() {
  const counter=useAppSelector((state)=>state.counter)
  const {count}=counter
const dispatch=useAppDispatch()

const handleIncrement=(amount : number)=>{
  dispatch(increment(amount))
}
const handleDecrement=()=>{
  dispatch(decrement())
}
  return (
    <div>
      <h1>counter with redux</h1>
      <div>{count}</div>
      <button onClick={()=>handleIncrement(1)}>Increament</button>
      <button onClick={()=>handleIncrement(5)}>Increament by 5</button>
      <button onClick={handleDecrement}>Decreament</button>
    </div>
  )
}

export default App
