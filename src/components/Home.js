import React from 'react'
import SwipeDrawer from './SwipeDrawer'
import Notes from './notes/Notes'
import { Box } from '@mui/material'
import Archives from './archives/Archives'
import DeleteNotes from './delete/DeleteNotes'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Box style={{display:'flex',width:'100%'}}>
        <BrowserRouter>
          <SwipeDrawer />
          <Routes>
            <Route path="/" element={<Notes/>} />
            <Route path="/archive" element={<Archives/>} />
            <Route path="/delete" element={<DeleteNotes />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  )
}

export default Home
