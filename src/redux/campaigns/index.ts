// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { ICampaignDetails, ICampaignsStore } from './@types';

const initialState: ICampaignsStore = {
	campaign_details: {},
	campaigns: {},
	error: null,
	isCampaignsLoading: false,
	loading: false
};

type ICampaignDetailsPayload = {
	[K in keyof ICampaignDetails]: {
		key: K;
		value: ICampaignDetails[K];
	};
}[keyof ICampaignDetails];

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
				campaign_details: {},
				campaigns: {},
				error: null,
				isCampaignsLoading: false,
				loading: false
			};
		},
		setCampaignDetails_Field: (state, action: PayloadAction<ICampaignDetailsPayload>) => {
			const obj = action.payload;
			if (obj) {
				const { key, value } = obj;
				switch (key) {
					case 'name':
						state.campaign_details[key] = value;
						break;
					case 'category':
						state.campaign_details[key] = value;
						break;
					case 'askAmount':
						state.campaign_details[key] = value;
						break;
					case 'description':
						state.campaign_details[key] = value;
						break;
					case 'xAccount':
						state.campaign_details[key] = value;
						break;
					case 'poster':
						state.campaign_details[key] = value;
						break;
				}
			}
		},
		setCampaigns: (state, action: PayloadAction<ICampaignsFields>) => {
			state.campaigns = action.payload;
		},
		setCampaignsLoading: (state, action: PayloadAction<boolean>) => {
			state.isCampaignsLoading = action.payload;
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
