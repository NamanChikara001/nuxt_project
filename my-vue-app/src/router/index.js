import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../pages/Posts.vue'
import PostDetail from '../pages/PostDetail.vue'

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', name: 'Posts', component: Posts },
  { path: '/posts/:id', name: 'PostDetail', component: PostDetail, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
