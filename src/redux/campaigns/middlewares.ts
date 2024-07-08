// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { campaignsActions } from '.';
import { AppMiddleware } from '../@types';
import { api } from '../api';
import { getCampaigns } from './actions';

export const campaignMiddleware: AppMiddleware = (store) => (next) => (action) => {
	next(action);
	const dispatch = store.dispatch;

	if (getCampaigns.match(action)) {
		if (action.payload.isLoading) {
			dispatch(campaignsActions.setCampaignsLoading(true));
		}
		dispatch(api.endpoints.getCampaigns.initiate(action.payload.query))
			.unwrap()
			.then((data) => {
				console.log('from middleware --> ', data.campaigns);
				dispatch(campaignsActions.setCampaigns(data.campaigns));
				if (action.payload.isLoading) {
					dispatch(campaignsActions.setCampaignsLoading(false));
				}
			})
			.catch(() => {
				if (action.payload.isLoading) {
					dispatch(campaignsActions.setCampaignsLoading(false));
				}
			});
	}
};
