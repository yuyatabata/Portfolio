import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '@/components/PostList.vue'
import Post from '@/components/Post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'posts',
    component: PostList,
  },
  //詳細ページのURLを定義する
  {
    path: '/detail/:id',
    name: 'detail',
    component: Post,
    props: routes => ({
      id: Number(routes.params.id),
    })
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return saveposition
    } else {
      return {x: 0, y: 0}
    }
  }
})

export default router
