import React, {useState} from 'react';

import {Box, Typography, TextField, Stack, Button} from "@mui/material";
import ProjectCard from "./components/ProjectCard";
import { useDispatch, useSelector } from 'react-redux';
import { addIssue } from './redux/IssueReducer';
import { RootState } from './redux';

const HomePage = () => {
    const dispatch = useDispatch();
    const issueList = useSelector((state:RootState)=>state.issue.projectIssues);
    const [textInput, setTextInput] = useState<string>('');
    const handleTextInputChange = (event:any)=>{
        setTextInput(event.target.value);
    };

    const handleClick = () => {
        dispatch(addIssue(textInput));
    }

    return (
        <div className="home_page">
              <Box sx={{ml: '5rem', mr: '5rem'}} >
                <Typography variant="h4" sx={{textAlign: 'center'}}>
                    Project Issue Tracker
                </Typography>
                <Box sx={{display: 'flex'}}>
                    <Stack spacing={2} border={2} borderRadius={2} borderColor={'burlywood'} p={1}>
                        <Typography variant="h5">
                            Add new issue
                        </Typography>
                        <TextField 
                        id="outlined-basic" 
                        label="Title" 
                        variant="outlined" 
                        onChange={handleTextInputChange}
                        value={textInput}
                        />
                        <Button variant="contained" onClick={handleClick}>Submit</Button>
                    </Stack>
                </Box>
                <Box sx={{ml: '1rem', mt: '3rem'}}>
                    <Typography variant="h5" >
                        Opened issue
                    </Typography>
                      {
                            issueList.map((issue, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <ProjectCard issueTitle={issue} />
                                    </React.Fragment>
                                )
                            })
                      }
                </Box>
            </Box>
        </div>
    )
}


export default HomePage;