<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">Posts</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <router-link
        v-for="post in posts"
        :key="post.id"
        :to="`/posts/${post.id}`"
      >
        <PostCard :post="post" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePostsStore } from '../stores/posts'
import PostCard from '../components/PostCard.vue'

const store = usePostsStore()
const { posts, loading, error } = store

onMounted(() => {
  store.fetchPosts()
})
</script>
