// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { campaignsStore } from './index';
// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createAsyncThunk } from '@reduxjs/toolkit';
import { campaignsActions } from '.';
import { FormInstance } from 'antd';
import { RootState } from '../@types';
import { ICampaignDetailsBody } from '@/types/backend-types';
import { api } from '../api';

interface ICampaignDetailsValueChangedParams {
	values: {
		name?: string;
		category?: string;
		askAmount?: string;
		description?: string;
		xAccount?: string;
		poster?: string;
	};
}

interface ICampaignDetailsParams {
	form?: FormInstance<any>;
	values: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const campaignDetails = createAsyncThunk('campaigns/campaignDetails', async (params: ICampaignDetailsParams, { dispatch, getState }) => {
	// const { form } = params;
	const store = getState() as RootState;
	const campaignsStore = store.campaigns;
	const { campaign_details } = campaignsStore;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const query: ICampaignDetailsBody = {
		askAmount: campaign_details?.askAmount || '',
		category: campaign_details?.category || '',
		description: campaign_details?.description || '',
		name: campaign_details?.name || '',
		poster: campaign_details?.poster || '',
		xAccount: campaign_details?.xAccount || ''
	};
	console.log('query --> ', query);
	dispatch(api.endpoints.createCampaignsDetails.initiate(query))
		.unwrap()
		.then((data) => {
			console.log(data);
			// dispatch(profileActions.setUser({
			// ...user,
			// ...data.user
			// }));
			// dispatch(profileActions.setCurrentProfile(data.user));
			// dispatch(profileActions.setLoadingEditProfile(false));
			// dispatch(successNotification('Profile updated successfully.'));
			// dispatch(editProfileModalClose({ form }));
		})
		.catch(() => {
			// dispatch(profileActions.setLoadingEditProfile(false));
			// dispatch(errorNotification('Failed to update profile'));
		});
});

export const campaignDetailsFieldValueChanged = createAsyncThunk('campaigns/campaignDetailsFieldValueChanged', async (params: ICampaignDetailsValueChangedParams, { dispatch }) => {
	const { values } = params;
	if (values?.name) {
		dispatch(
			campaignsActions.setCampaignDetails_Field({
				key: 'name',
				value: values?.name
			})
		);
	} else if (values?.category) {
		dispatch(
			campaignsActions.setCampaignDetails_Field({
				key: 'category',
				value: values?.category
			})
		);
	} else if (values?.askAmount) {
		dispatch(
			campaignsActions.setCampaignDetails_Field({
				key: 'askAmount',
				value: values?.askAmount
			})
		);
	} else if (values?.description) {
		dispatch(
			campaignsActions.setCampaignDetails_Field({
				key: 'description',
				value: values?.description
			})
		);
	} else if (values?.xAccount) {
		dispatch(
			campaignsActions.setCampaignDetails_Field({
				key: 'xAccount',
				value: values?.xAccount
			})
		);
	} else if (values?.poster) {
		dispatch(
			campaignsActions.setCampaignDetails_Field({
				key: 'poster',
				value: values?.poster
			})
		);
	}
});
