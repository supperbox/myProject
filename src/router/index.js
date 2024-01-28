import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/digitalPeople',
      name: 'digitalPeople',
      component: () => import('../views/DigitalPeople/index.vue')
    },
    {
      path: '/home',
      name: 'index',
      component: () => import('../views/Home/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/login.vue')
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useDigitalStore()
  const routerStore = useRouterStore()
  console.log(to)
  if (!to.name) {
    next({ path: '/' })
  }
  switch (to.name) {
    case 'index':
      store.selectMenu = 1
      break
    case 'digitalPeople':
      store.selectMenu = 2
      break
    default:
      break
  }
  routerStore.name = to.name
  routerStore.path = to.path
  next()
})

export default router
