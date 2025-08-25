// import { defineStore } from 'pinia'
// import axios from 'axios'

// const API_URL = 'https://dummyjson.com/posts'
// const CACHE_KEY = 'cached_posts'
// const CACHE_TIME = 15 * 60 * 1000 // 15 mins

// export const usePostsStore = defineStore('posts', {
//   state: () => ({
//     posts: [],
//     selectedPost: null,
//     loading: false,
//     error: null,
//   }),
//   actions: {
//     async fetchPosts() {
//       this.loading = true
//       this.error = null

//       const cached = JSON.parse(localStorage.getItem(CACHE_KEY))
//       const now = new Date().getTime()

//       if (cached && now - cached.timestamp < CACHE_TIME) {
//         this.posts = cached.data
//         this.loading = false
//         return
//       }

//       try {
//         const res = await axios.get(API_URL)
//         this.posts = res.data.posts

//         localStorage.setItem(CACHE_KEY, JSON.stringify({
//           data: this.posts,
//           timestamp: now
//         }))
//       } catch (err) {
//         this.error = err.message
//       } finally {
//         this.loading = false
//       }
//     },

//     async fetchPostById(id) {
//       this.loading = true
//       this.error = null
//       this.selectedPost = null
//       try {
//         const res = await axios.get(`${API_URL}/${id}`)
//         this.selectedPost = res.data
//       } catch (err) {
//         this.error = err.message
//       } finally {
//         this.loading = false
//       }
//     }
//   }
// })

// stores/posts.js
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


