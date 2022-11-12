import create from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import axios from 'axios'

export interface Post {
  userId: string
  id: string
  title: string
  body: string
}

type postStore = {
  posts: Post[]
  getPosts: () => void
  getPostById: (id: string) => void
  removePosts: () => void
}

export const usePostStore = create<postStore>((set, get) => ({
  posts: [],
  getPosts: async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    if (response.data) {
      set({ posts: response.data })
    }
  },
  getPostById: async (id: string) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    if (response.data) {
      const state = get()
      set({ posts: [...state.posts, response.data] })
    }
  },
  removePosts: () => {
    set({ posts: [] })
  },
}))

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('postStore', usePostStore)
}
