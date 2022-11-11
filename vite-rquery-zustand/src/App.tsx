import { useBearStore } from './state/store'

function App() {
  const { bears, increasePopulation, removeAllBears } = useBearStore()
  return (
    <div>
      APP
      <div>Bear counter: {bears}</div>
      <button onClick={increasePopulation}>Pridaj medveda</button>
      <button onClick={removeAllBears}>Rip medvede</button>
    </div>
  )
}

export default App
