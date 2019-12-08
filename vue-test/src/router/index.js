import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateArticle from '../views/CreateArticle'
import ListArticle from '../views/ListArticle'
import EditArticle from '../views/EditArticle'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/articles/index',
  }, 

  {
    path: '/articles/index',
    component: ListArticle
  },
  {
    path: '/articles/create',
    component: CreateArticle
    
  },
  {
    path: '/articles/:id/edit',
    component:  EditArticle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
