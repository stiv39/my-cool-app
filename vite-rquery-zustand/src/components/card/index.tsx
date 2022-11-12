import { Typography, Card, CardContent, CardMedia } from '@mui/material'

export interface CharacterCardProps {
  name: string
  imgUrl: string
  status: string
  species: string
  gender: string
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  imgUrl,
  status,
  species,
  gender,
}) => {
  return (
    <Card sx={{ maxWidth: 300, margin: '10px' }}>
      <CardMedia component="img" image={imgUrl} alt={name} />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ flexWrap: 'wrap' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <ul>
            <li>Status: {status}</li>
            <li>Species: {species}</li>
            <li>Gender: {gender}</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  )
}
