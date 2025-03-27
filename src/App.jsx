import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import CompleteProfile from './pages/CompleteProfile'
import AppLayout from './ui/AppLayout'
import OwnerDashboard from './pages/OwnerDashboard'
import Projects from './pages/Projects'
import Project from './pages/Project'

function App() {
  const queryClinet = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClinet}>
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/compelete-profile' element={<CompleteProfile />} />

          <Route path='/owner' element={<AppLayout />}>
            <Route index element={<Navigate to='dashboard' />} />
            <Route path='dashboard' element={<OwnerDashboard />} />
            <Route path='projects' element={<Projects />} />
            <Route path='prajects/:id' element={<Project />} />
          </Route>
        </Routes>
      </QueryClientProvider>

    </div>

  )
}

export default App
