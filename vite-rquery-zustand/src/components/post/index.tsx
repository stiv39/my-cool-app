import { Button, TextField } from '@mui/material'
import React from 'react'
import { Post } from '../../state/postStore'

interface PostComponentProps {
  posts: Post[]
  getPosts: () => void
  getPostById: (id: string) => void
  removePosts: () => void
}

export const PostComponent: React.FC<PostComponentProps> = ({
  posts,
  getPosts,
  getPostById,
  removePosts,
}) => {
  const [value, setValue] = React.useState<string>('')

  return (
    <div>
      <TextField
        placeholder="post id"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant={'contained'} onClick={getPosts}>
        Get posts
      </Button>
      <Button
        variant={'contained'}
        disabled={isNaN(parseInt(value))}
        onClick={() => getPostById(value)}
      >
        Get post by id
      </Button>
      <Button variant={'contained'} onClick={removePosts}>
        Remove posts
      </Button>
      <div>Post count: {posts.length}</div>
      <div>
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>
  )
}
