import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchIssue = createAsyncThunk<string[], void, {rejectValue: string}>(
    "githubIssue/fetchIssues",
    async (_, thunkAPI) => {
        try{
            const response = await fetch("https://api.github.com/repos/github/hub/issues");
            const data = await response.json();
            const issues = data.map((issue:{title:string})=>issue.title);
            return issues;
        } catch(error){
            return thunkAPI.rejectWithValue("Failed to fetch issues");
        }
    }
)