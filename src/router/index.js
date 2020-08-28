import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../components/Home.vue'
import ProjectsSkills from '../components/ProjectsSkills.vue'
import Blog from '../components/Blog.vue'
import Contact from '../components/Contact.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ProjectsSkills',
    name: 'ProjectsSkills',
    component: ProjectsSkills
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
