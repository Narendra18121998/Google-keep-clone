import { CardActions, CardContent,Card, Typography,styled } from "@mui/material";
import {UnarchiveOutlined as Unarchive , DeleteOutlineOutlined as Delete } from "@mui/icons-material"
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
    width:200px;
   margin:8px;
    box-shadow:none;
    border:1px solid #e0e0e0;
    border-radius:8px`

const Archive=({note})=>{
    const { setNotes,setArchiveNotes,archiveNotes, setDeletedNotes} = useContext(DataContext);
    const UnarchiveNote=()=>{
        const updatedNotes = archiveNotes.filter(data=>data.id!==note.id)
        setArchiveNotes(updatedNotes)
        setNotes(prevArr=>[...prevArr , note])
    }
    const deleteNote=()=>{
        const updatedNotes = archiveNotes.filter(data=>data.id!==note.id)
        setArchiveNotes(updatedNotes)
        setDeletedNotes(prevArr=>[...prevArr , note])
    }   

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>

            <CardActions>
                <Unarchive style={{marginLeft:'auto'}} onClick={UnarchiveNote} />
                <Delete onClick={deleteNote} />
            </CardActions>
        </StyledCard>
    )
}

export default Archive;
