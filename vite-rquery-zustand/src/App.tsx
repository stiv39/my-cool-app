import { useBearStore } from './state/store'
import { Bear } from './components/bear'
import { QueryProvider } from './providers'
import { Characters } from './components/character'
import { Box } from '@mui/material'

function App() {
  const { bears, increasePopulation, removeAllBears } = useBearStore()

  return (
    <Box sx={{ width: 1, height: 1 }}>
      APP
      <Bear
        bears={bears}
        increasePopulation={increasePopulation}
        removeAllBears={removeAllBears}
      />
      <QueryProvider>
        <Characters />
      </QueryProvider>
    </Box>
  )
}

export default App
