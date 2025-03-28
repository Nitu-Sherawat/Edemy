import React from 'react'
import { Routes ,Route, useMatch } from 'react-router-dom'
// import {Home,CourseList,CourseDetails,MyEnrollments,Player,Loading} from './pages/students'
// import {Educator,AddCourse,Dashboard,MyCourses,StudentsEnrolled} from './pages/educators'
import Home from './pages/students/Home';
import CourseDetails from './pages/students/CourseDetails'
import MyEnrollments from './pages/students/MyEnrollment'
import Player from './pages/students/Player'
import Loading from './components/students/Loading';
import CourseList from './pages/students/CourseList';
import Educator from './pages/educators/Educator'
import Dashboard from './pages/educators/Dashboard'
import AddCourse from './pages/educators/AddCourse'
import MyCourses from './pages/educators/MyCourses'
import StudentsEnrolled from './pages/educators/StudentsEnrolled'
import Navbar from './components/students/Navbar'

const App = () => {

const isEducatorRoute = useMatch('/educator/*')

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course-list/:id' element={<CourseList/>}/>
        <Route path='/course/:id' element = {<CourseDetails/>}/>
        <Route path='/my-enrollments' element = {<MyEnrollments/>}/>
        <Route path='/player/:courseId' element = {<Player/>}/>
        <Route path='/loading/:path' element = {<Loading/>}/>
        <Route path='/educator' element={<Educator/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='add-course' element={<AddCourse/>}/>
            <Route path='my-course' element={<MyCourses/>}/>
            <Route path='student-enrolled' element={<StudentsEnrolled/>}/>
            </Route>
      </Routes>
    </div>
  )
}

export default App

