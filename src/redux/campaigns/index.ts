// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { ICampaignsStore } from './@types';

const initialState: ICampaignsStore = {
	error: null,
	loading: false
};

export const campaignsStore = createSlice({
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action) => {
			console.log('hydrate campaigns', (action as PayloadAction<any>).payload);
			return {
				...state,
				...(action as PayloadAction<any>).payload.campaigns
			};
		});
	},
	initialState,
	name: 'campaigns',
	reducers: {
		reset: (state) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			state = {
				error: null,
				loading: false
			};
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		}
	}
});

export default campaignsStore.reducer;
const campaignsActions = campaignsStore.actions;
export { campaignsActions };
