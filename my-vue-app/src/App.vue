<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <header class="bg-white shadow p-4">
      <h1 class="text-2xl font-bold">
        My Blog App
      </h1>
    </header>

    <main class="p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// No logic needed here unless you want global state, etc.
</script>
