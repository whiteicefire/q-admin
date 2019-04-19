
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'Index', component: () => import('pages/Index.vue') },
      { path: 'Table', component: () => import('pages/Table.vue') },
      { path: 'Card', component: () => import('pages/Card.vue') },
      { path: 'CardDetails', component: () => import('pages/CardDetails.vue') },
      { path: 'Form', component: () => import('pages/Form.vue') }
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
