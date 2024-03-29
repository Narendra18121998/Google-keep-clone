import React from 'react'
import { Box,styled,Grid } from '@mui/material';
import { useContext } from 'react';

//components
import Form from './Form'
import Note from '../note';
import { DataContext } from '../../context/DataProvider';
import EmptyNotes from './EmptyNotes';
import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd"

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex < startIndex ? endIndex : endIndex - 1, 0, removed);
  
    return result;
  };

const Notes = () => {
  const {notes,setNotes} = useContext(DataContext)

 const onDragEnd=(result)=> {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = reorder(
      notes,
      result.source.index,
      result.destination.index
    );

    setNotes(items);
  }

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppableId">
              {(provided, snapshot) => (
                <Grid container style={{ marginTop: 16 }} {...provided.droppableProps} ref={provided.innerRef}>
                  {notes.map((note, index) => (
                    <Draggable key={note.id} draggableId={note.id} index={index}>
                      {(provided, snapshot) => (
                        <Grid item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Note note={note} />
                        </Grid>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
    </>
  );
}

export default Notes;
