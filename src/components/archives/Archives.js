import React from 'react'
import { Box,styled,Grid } from '@mui/material';
import { useContext } from 'react';

//component
import Archive from '../archives/Archive'
import { DataContext } from '../../context/DataProvider';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));


const Archives = () => {
    const {archiveNotes} = useContext(DataContext)
  return (
    <Box sx={{display:'flex'}}>
        <Box component="main" sx={{flexGrow:1 , p:3}}>
            <DrawerHeader />
            <Grid container style={{marginTop:16}}>
            {
              archiveNotes.map(archive=>{
                return (
                <Grid item key={archive.id}>
                   <Archive note={archive}/> 
                </Grid>
                )
              })
            }
            </Grid>
        </Box>
    </Box>
  )
}

export default Archives;
