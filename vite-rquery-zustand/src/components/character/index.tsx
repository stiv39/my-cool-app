import { Box, Button, Stack } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { CharacterCard } from '../card'

interface CharactersProps {}

function useTodos(page: number) {
  return useQuery({
    queryKey: ['todos', page],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      )
      return data
    },
  })
}

export const Characters: React.FC<CharactersProps> = ({}) => {
  const [page, setPage] = useState<number>(1)
  const { data, status, error, isFetching } = useTodos(page)

  const handleNextPage = () => setPage(page + 1)
  const handlePreviousPage = () => setPage(page - 1)

  if (isFetching) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>could not fetch data </div>
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          onClick={handlePreviousPage}
          variant="contained"
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          onClick={handleNextPage}
          variant="contained"
          disabled={page === data.info.pages}
        >
          Next
        </Button>
      </Box>
      <Stack
        direction="row"
        sx={{
          flexWrap: 'wrap',
          marginTop: '20px',
          display: 'flex',
        }}
      >
        {data?.results.length > 0 &&
          data.results.map((character: any) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              imgUrl={character.image}
              species={character.species}
              gender={character.gender}
              status={character.status}
            />
          ))}
      </Stack>
    </Box>
  )
}
