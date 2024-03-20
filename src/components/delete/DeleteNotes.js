import React from 'react'
import { Box,styled,Grid } from '@mui/material';
import { useContext } from 'react';

//components
import DeleteNote from '../delete/DeleteNote';
import { DataContext } from '../../context/DataProvider';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

const DeleteNotes = () => {
  const {deleteNotes} = useContext(DataContext)
  return (
    <Box sx={{display:'flex'}}>
        <Box component="main" sx={{flexGrow:1 , p:3}}>
            <DrawerHeader />
            <Grid container style={{marginTop:16}}>
              {
                deleteNotes.map(note=>{
                  return (
                  <Grid item key={note.id}>
                    <DeleteNote note={note}/> 
                  </Grid>
                  )
                })
              }
            </Grid>
        </Box>
    </Box>
  )
}

export default DeleteNotes;
