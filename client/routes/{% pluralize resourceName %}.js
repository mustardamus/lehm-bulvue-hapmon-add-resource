module.exports = [
  { path: '/{% pluralize resourceName %}', name: '{% pluralize resourceName %}-index', component: require('../pages/{% pluralize resourceName %}-index') },
  { path: '/{% pluralize resourceName %}/add', name: '{% pluralize resourceName %}-add', component: require('../pages/{% pluralize resourceName %}-add') },
  { path: '/{% pluralize resourceName %}/:slug', name: '{% pluralize resourceName %}-show', component: require('../pages/{% pluralize resourceName %}-show') },
  { path: '/{% pluralize resourceName %}/:slug/edit', name: '{% pluralize resourceName %}-edit', component: require('../pages/{% pluralize resourceName %}-edit') }
]
