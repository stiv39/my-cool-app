import { Box, Typography } from '@mui/material'

export interface CardProps {
  title: string
  url: string
}

export const Card: React.FC<CardProps> = ({ title, url }) => {
  return (
    <Box
      sx={{
        background: 'rgb(59, 62, 67)',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        marginBottom: '1rem',
        marginRight: '1rem',
        display: 'flex',
        maxWidth: '30rem',
      }}
    >
      <img src={url} style={{ width: '15rem', height: '100%' }} />
      <Box sx={{ padding: '1rem' }}>
        <Typography
          variant="h4"
          color="white"
          sx={{ fontSize: '2rem', overflow: 'clip' }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  )
}

/* <div className="card">
<img src={character.image} alt="" />
<div className="text-container">
  <h3>{character.name}</h3>
  <p className="status">
    {character.status} - {character.species}
  </p>
  <p className="title">Last seen on</p>
  <p>{character.location.name}</p>
</div>
</div> */
