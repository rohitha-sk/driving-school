import React from 'react'
import InfoTable from './pages/candidate/InfoTable'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CandidateDetails from './pages/candidate/action-menu/CandidateDetails';


function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
       staleTime:0,
      },
    },
  });


  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/candidate-info' element={<InfoTable />} />
          <Route path='/candidate/:id' element={<CandidateDetails />} />
        </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App