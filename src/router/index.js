import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Personal from '@/view/personal'
import CoursesList from '@/view/courses-list'
import CoursesDetail from '@/view/courses-detail'
import TeacherAbstract from '@/view/teacher-abstract'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/courses-list',
      name: 'coursesList',
      component: CoursesList
    },
    {
      path: '/courses-detail',
      name: 'coursesDetail',
      component: CoursesDetail
    },
    {
      path: '/teacher-abstract',
      name: 'teacherAbstract',
      component: TeacherAbstract
    }
  ]
})
