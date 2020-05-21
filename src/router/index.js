import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import about from '@/components/pages/about'
import project from '@/components/pages/project'
import skill from '@/components/pages/skill'
import achievement from '@/components/pages/achievement'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: { title: 'HomePage' }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: { title: 'About me' }
    },
    {
      path: '/project',
      name: 'project',
      component: project,
      meta: { title: 'project' }
    },
    {
      path: '/skill',
      name: 'skill',
      component: skill,
      meta: { title: 'skill' }
    },
    {
      path: '/achievement',
      name: 'achievement',
      component: achievement,
      meta: { title: 'achievement' }
    },
  ]
})
