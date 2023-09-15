import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IssueInitialState {
    projectIssues: string[];
};

const initialState: IssueInitialState = {
    projectIssues: [],
}

export const issueSlice = createSlice({
    name:'issue',
    initialState,
    reducers: {
        addIssue: (state, action: PayloadAction<string>) => {
            state.projectIssues.push(action.payload);
        }
    }
})

export const {addIssue} = issueSlice.actions;
export default issueSlice.reducer;