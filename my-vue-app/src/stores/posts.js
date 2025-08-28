import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    loading: false,
    error: null
  }),
  actions: {
  async fetchPosts() {
  const cacheKey = 'cached_posts'
  const cacheTimestampKey = 'cachedPostsTimestamp'
  const now = Date.now()

  const cachedData = localStorage.getItem(cacheKey)
  const cachedTimestamp = localStorage.getItem(cacheTimestampKey)

  if (cachedData && cachedTimestamp && now - Number(cachedTimestamp) < 15 * 60 * 1000) {
    this.posts = JSON.parse(cachedData)
    return
  }

  this.loading = true
  try {
    const res = await axios.get('https://dummyjson.com/posts')
    this.posts = res.data.posts

    // Store in localStorage
    localStorage.setItem(cacheKey, JSON.stringify(this.posts))
    localStorage.setItem(cacheTimestampKey, now.toString())
  } catch (err) {
    this.error = err.message
  } finally {
    this.loading = false
  }
}

  }
})


