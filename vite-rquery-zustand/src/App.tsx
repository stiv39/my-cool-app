import { useBearStore, usePostStore } from './state'
import { Bear } from './components/bear'
import { QueryProvider } from './providers'
import { Characters } from './components/character'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { PostComponent } from './components/post'
import { Hogwarts } from './components/hogwarts'

function App() {
  const { bears, increasePopulation, removeAllBears } = useBearStore()
  const { posts, getPosts, getPostById, removePosts } = usePostStore()

  const [selectedView, setSelectedView] = React.useState<string>('')

  const handleSelectBearView = () => setSelectedView('bear')
  const handleSelectRickMortyView = () => setSelectedView('morty')
  const handleSelectPostsView = () => setSelectedView('posts')
  const handleSelectHPView = () => setSelectedView('hogwarts')

  const getMarkUp = (key: string) => {
    switch (key) {
      case 'bear': {
        return (
          <Box sx={{ width: 1, textAlign: 'center' }}>
            <Bear
              bears={bears}
              increasePopulation={increasePopulation}
              removeAllBears={removeAllBears}
            />
          </Box>
        )
      }
      case 'morty': {
        return (
          <QueryProvider>
            <Characters />
          </QueryProvider>
        )
      }
      case 'posts': {
        return (
          <PostComponent
            posts={posts}
            getPosts={getPosts}
            getPostById={getPostById}
            removePosts={removePosts}
          />
        )
      }
      case 'hogwarts': {
        return (
          <QueryProvider>
            <Hogwarts />
          </QueryProvider>
        )
      }
      default:
        return <></>
    }
  }

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
        <Button variant={'contained'} onClick={handleSelectPostsView}>
          Posts with zustand
        </Button>
        <Button variant={'contained'} onClick={handleSelectHPView}>
          Explore Hogwarts
        </Button>
      </Box>

      <Box sx={{ marginTop: '50px' }}>{getMarkUp(selectedView)}</Box>
    </Box>
  )
}

export default App
