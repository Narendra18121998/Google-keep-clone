import { CardActions, CardContent,Card, Typography,styled } from "@mui/material";
import {RestoreFromTrashOutlined as Restore , DeleteForeverOutlined as Delete } from "@mui/icons-material"
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
    width:200px;
    margin:8px;
    box-shadow:none;
    border:1px solid #e0e0e0;
    border-radius:8px`

const DeleteNote=({note})=>{
    const {setNotes,deleteNotes , setDeletedNotes} = useContext(DataContext);

    const restoreNote=()=>{
        const updatedNotes = deleteNotes.filter(data=>data.id!==note.id)
        setDeletedNotes(updatedNotes)
        setNotes(prevArr=>[...prevArr , note])
    }
    const deleteNote=()=>{
        const updatedNotes = deleteNotes.filter(data=>data.id!==note.id)
        setDeletedNotes(updatedNotes)
    }   

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>

            <CardActions>
                <Delete onClick={deleteNote} style={{marginLeft:'auto'}} />
                <Restore onClick={restoreNote} />
                
            </CardActions>
        </StyledCard>
    )
}

export default DeleteNote;
