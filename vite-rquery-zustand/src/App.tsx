import { useBearStore } from './state/store'
import { Bear } from './components/bear'
import { QueryProvider } from './providers'
import { Characters } from './components/character'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function App() {
  const { bears, increasePopulation, removeAllBears } = useBearStore()

  const [selectedView, setSelectedView] = React.useState<string>('')

  const handleSelectBearView = () => setSelectedView('bear')
  const handleSelectRickMortyView = () => setSelectedView('morty')

  return (
    <Box sx={{ width: 1, height: 1 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2">CHOOSE</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
        <Button variant={'contained'} onClick={handleSelectBearView}>
          Bears with Zustand
        </Button>
        <Button variant={'contained'} onClick={handleSelectRickMortyView}>
          Rick & Morty with React Query
        </Button>
      </Box>
      <Box sx={{ marginTop: '50px' }}>
        {selectedView === 'bear' ? (
          <Box sx={{ width: 1, textAlign: 'center' }}>
            <Bear
              bears={bears}
              increasePopulation={increasePopulation}
              removeAllBears={removeAllBears}
            />
          </Box>
        ) : selectedView === 'morty' ? (
          <QueryProvider>
            <Characters />
          </QueryProvider>
        ) : null}
      </Box>
    </Box>
  )
}

export default App
