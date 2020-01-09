import Vue from 'vue'
import VueRouter from 'vue-router'
import cookies from '../until/cookie'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    component: () => import('../views/main'),
    redirect: '/main/home',
    children: [
      {
        path: '/main/home',
        component: () => import('../views/main/home')
      },
      {
        path: '/main/classify',
        component: () => import('../views/main/classify')
      },
      {
        path: '/main/car',
        component: () => import('../views/main/car'),
        meta: {
          required: true
        }
      },
      {
        path: '/main/mine',
        component: () => import('../views/main/mine'),
        meta: {
          required: true
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/login')
  },
  {
    path: '/location',
    component: () => import('../views/location')

  },
  {
    path: '/address',
    component: () => import('../views/address'),
    meta: {
      isLocation: true
    }
  },
  {
    path: '/order',
    component: () => import('../views/order')
  },
  {
    path: '/detail',
    component: () => import('../views/detail')
  },
  {
    path: '/newAddress',
    component: () => import('../views/newAddress'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/selectLocation',
    component: () => import('../views/selectLocation')
  },
  {
    path: '/',
    redirect: '/main'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (Object.keys(store.state.user.location).length<=0 && !to.meta.isLocation){
    next({
      path: '/address',
      query: { redirect: to.path }
    })
  } else {
    if (to.meta.required){
      const token=cookies.getItem('token');
      console.log(token)
      if (!token){
        next({
          path: '/login',
          query: { redirect: to.path }
        });
      } else {
        next()
      }
    } else {
      next()
    }
  }
})
export default router
