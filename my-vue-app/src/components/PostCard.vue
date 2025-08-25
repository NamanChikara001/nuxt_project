<template>
  <div class="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer">
    <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
    <p class="text-gray-600">{{ post.body.slice(0, 100) }}...</p>
  </div>
</template>

<script setup>
defineProps({
  post: Object
})
</script>
