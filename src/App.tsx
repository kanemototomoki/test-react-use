import './App.css'
import { Hover } from './Hover'

function App() {
  const arr = [1, 2, 3, 4, 5]

  return (
    <>
      {arr.map(item => {
        return <Hover key={item}>{item}</Hover>;
      })}
    </>
  )
}

export default App
