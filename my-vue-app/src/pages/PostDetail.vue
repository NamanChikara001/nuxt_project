<template>
  <div class="p-8">
    <router-link to="/posts" class="text-blue-500 underline mb-4 inline-block">← Back to Posts</router-link>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else-if="post" class="border p-6 rounded shadow">
      <h1 class="text-2xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-gray-700">{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '../stores/posts'

const route = useRoute()
const store = usePostsStore()

const { selectedPost: post, loading, error } = store

onMounted(() => {
  store.fetchPostById(route.params.id)
})
</script>
