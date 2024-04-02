import { IMeeting } from "@/models/IMeeting";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface MeetingState {
  meeting: IMeeting[];
}
const initialState: MeetingState = {
  meeting: [],
};

export const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    setMeeting(state, action: PayloadAction<IMeeting>) {
      state.meeting.push(action.payload);
    },
    deleteMeeting(state, action) {
      state.meeting.splice(action.payload, 1);
    },
  },
});

export const { setMeeting, deleteMeeting } = meetingSlice.actions;
export default meetingSlice.reducer;
