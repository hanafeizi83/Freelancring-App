import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'




function App() {
  const queryClinet = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClinet}>
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </QueryClientProvider>

    </div>

  )
}

export default App
