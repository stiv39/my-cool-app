import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'

interface HogwartsProps {}

function useHogwartsCharacters() {
  return useQuery({
    queryKey: ['hogwartsCharacters'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://hp-api.herokuapp.com/api/characters'
      )
      return data
    },
  })
}

export const Hogwarts: React.FC<HogwartsProps> = ({}) => {
  const { data, status, error, isFetching } = useHogwartsCharacters()

  const [selectedHouse, setSelectedHouse] = useState<string>('')

  const getHouses = () => {
    const h = data.map((character: any) => character.house)
    const unique = [...new Set(h)]

    return unique.filter((v) => v !== '')
  }

  const getHouseMembers = (house: string): string[] => {
    return data.filter((c: any) => c.house === house)
  }

  if (isFetching) {
    return <div>Loading</div>
  }

  return (
    <Box>
      <Box>
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          Hogwarts
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
        {data.length > 0
          ? getHouses().map((h: any) => (
              <Button
                key={h}
                onClick={() => setSelectedHouse(h)}
                variant={'outlined'}
              >
                {h}
              </Button>
            ))
          : null}
      </Box>
      <Stack
        direction="row"
        sx={{
          flexWrap: 'wrap',
          marginTop: '20px',
          display: 'flex',
        }}
      >
        {selectedHouse !== '' &&
          getHouseMembers(selectedHouse).map((hm: any, index) => (
            <Box key={`${hm}${index}`} sx={{ margin: 10 }}>
              <h3>{hm.name}</h3>
              <img src={hm.image} style={{ height: 160 }} />
            </Box>
          ))}
      </Stack>
    </Box>
  )
}
