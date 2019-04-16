
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'Index', component: () => import('pages/Index.vue') },
      { path: 'Form', component: () => import('pages/Form.vue') },
      { path: 'Card', component: () => import('pages/Card.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
