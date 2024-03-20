import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List' 
import LightbulbIcon  from '@mui/icons-material/Lightbulb';
import ArchiveIcon  from '@mui/icons-material/Archive';
import DeleteIcon  from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const NavList = () => {

    const navList=[
        {id:1,name:'Notes',icon:<LightbulbIcon />,route:'/'},
        {id:2,name:'Archive',icon:<ArchiveIcon />,route:'/archive'},
        {id:3,name:'Trash',icon:<DeleteIcon />,route:'/delete'}
    ]

  return (
    <>
        <List>
          {
            navList.map(list => (
            <ListItem  key={list.id}>
                <Link to={list.route} style={{textDecoration:'none',display:'flex'}}>
                <ListItemIcon style={{alignItems:'center'}}> {list.icon} </ListItemIcon>
                <ListItemText primary={list.name} />
              </Link>
            </ListItem>
          ))
          }
        </List>
    </>
  )
}

export default NavList
