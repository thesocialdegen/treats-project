// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INotificationStore, ISendNotificationPayloadType } from './@types';
import { HYDRATE } from 'next-redux-wrapper';
import { notify } from './utils';

const initialState: INotificationStore = {};

export const notificationStore = createSlice({
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action) => {
			return {
				...state,
				...(action as PayloadAction<any>).payload.notification
			};
		});
	},
	initialState,
	name: 'notification',
	reducers: {
		send: (state, action: PayloadAction<ISendNotificationPayloadType>) => {
			notify(action.payload);
		}
	}
});

export default notificationStore.reducer;
const notificationActions = notificationStore.actions;
export { notificationActions };
