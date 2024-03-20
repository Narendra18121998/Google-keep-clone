import React, { useState,useRef,useContext } from 'react'
import {Box, TextField ,styled,ClickAwayListener} from '@mui/material'
import { DataContext } from '../../context/DataProvider'
import {v4 as uuid} from 'uuid';
const Container = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:20px 15px;
    box-shadow:0 1px 2px 0 rgb(60 64  67/30%) , 0 2px 6px 2px rgb(60 64 67/15%);
    border-color:#e0e0e0;
    border-radius:8px;
    width:500px;
    margin:auto`

const note = {
  id:'',
  heading:'',
  text:''
}

const Form = () => {
  const [showTextField,setShowTextField] = useState(false);
  const containerRef=useRef();
  const {setNotes}=useContext(DataContext);
  const [addnote,setAddNote] = useState( { ...note , id:uuid() })

  const onTextAreaClick=()=>{
    setShowTextField(true)
    containerRef.current.style.minHeight='70px'
  }

  const onTextChange=(e)=>{
    const {name,value} = e.target;
    setAddNote({ ...addnote , [name]:value })
  }

  const handleClickAway=()=>{
    setShowTextField(false)
    containerRef.current.style.minHeight='25px'
    if(addnote.heading || addnote.text) {
      setNotes(prevState=>[...prevState,addnote]);
    }
    setAddNote({...note, id:uuid() })
  }

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Container ref={containerRef}>
          {showTextField &&
            <TextField placeholder='Title' variant='standard' InputProps={{disableUnderline:true}} style={{marginBottom:10}} onChange={onTextChange} name='heading' value={addnote.heading} />
          }
            <TextField placeholder='Take a note...' multiline variant='standard' InputProps={{disableUnderline:true}} onClick={onTextAreaClick} onChange={onTextChange} name='text' value={addnote.text} />
          
        </Container>
        </ClickAwayListener>
    </>
  )
}

export default Form
