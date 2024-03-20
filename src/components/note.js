import { CardActions, CardContent,Card, Typography,styled } from "@mui/material";
import {ArchiveOutlined as Archive , DeleteOutlineOutlined as Delete } from "@mui/icons-material"
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const StyledCard = styled(Card)`
    width:200px;
    margin:8px;
    box-shadow:none;
    border:1px solid #e0e0e0;
    border-radius:8px`

const Note=({note})=>{
    const {notes, setNotes,setArchiveNotes, setDeletedNotes} = useContext(DataContext);
    
    const archiveNote=()=>{
        const updatedNotes = notes.filter(data=>data.id!==note.id)
        setNotes(updatedNotes)
        setArchiveNotes(prevArr=>[...prevArr , note])
    }
    const deleteNote=()=>{
        const updatedNotes = notes.filter(data=>data.id!==note.id)
        setNotes(updatedNotes)
        setDeletedNotes(prevArr=>[...prevArr , note])
    }   

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>

            <CardActions>
                <Archive style={{marginLeft:'auto'}} onClick={archiveNote} />
                <Delete onClick={deleteNote} />
            </CardActions>
        </StyledCard>
    )
}

export default Note;
