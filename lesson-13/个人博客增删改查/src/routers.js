import ShowBlogs from './components/ShowBlogs.vue'
import AddBlogs from './components/AddBlog.vue'
import Details from './components/Details.vue'
import Edit from './components/Edit.vue'
export default[
  {path:"/",component:ShowBlogs},
  {path:"/add",component:AddBlogs},
  {path:"/details/:id",component:Details},
  {path:"/edit/:id",component:Edit},

]
