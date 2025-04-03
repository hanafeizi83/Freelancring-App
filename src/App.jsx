import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import CompleteProfile from './pages/CompleteProfile'
import OwnerDashboard from './pages/OwnerDashboard'
import Projects from './pages/Projects'
import Project from './pages/Project'
import DarkModeProvider from './context/DarkModeProvider'
import OwnerLayout from './features/owner/OwnerLayout'
import FreelancerLayout from './features/freelancer/FreelancerLayout'
import FreelancerDashboard from './pages/FreelancerDashboard'
import SubmitProjects from './pages/SubmitProjects'
import Proposals from './pages/Proposals'
import AdminLayout from './features/admin/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import Users from './pages/Users'
import Categories from './pages/Categories'
import ProtectedRoute from './ui/ProtectedRoute'

function App() {
  const queryClinet = new QueryClient();
  return (
    <div>
      <DarkModeProvider>
        <QueryClientProvider client={queryClinet}>
          <Toaster />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/compelete-profile' element={<CompleteProfile />} />

            <Route path='/owner' element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to='dashboard' />} />
              <Route path='dashboard' element={<OwnerDashboard />} />
              <Route path='projects' element={<Projects />} />
              <Route path='project/:id' element={<Project />} />
            </Route>

            <Route path='/freelancer' element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to='dashboard' />} />
              <Route path='dashboard' element={<FreelancerDashboard />} />
              <Route path='projects' element={<SubmitProjects />} />
              <Route path='proposals' element={<Proposals />} />
            </Route>

            <Route path='/admin' element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to='dashboard' />} />
              <Route path='dashboard' element={<AdminDashboard />} />
              <Route path='users' element={<Users />} />
              <Route path='projects' element={<SubmitProjects />} />
              <Route path='proposals' element={<Proposals />} />
              <Route path='categories' element={<Categories />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </DarkModeProvider>

    </div>

  )
}

export default App
