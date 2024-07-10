// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { campaignsStore } from './index';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { campaignsActions } from '.';
import { FormInstance } from 'antd';
import { RootState } from '../@types';
import { ICampaignDetailsBody, ICampaignDetailsQuery } from '@/types/backend-types';
import { api } from '../api';
import { errorNotification, successNotification } from '../notification/actions';

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

function getCampaign(action: any) {
	const campaignBody = action || {};
	const { name, askAmount, description, category, campaign_id, poster, xAccount } = campaignBody;
	const newCampaign: ICampaignsFields = {
		askAmount,
		campaign_id,
		category,
		description,
		name,
		poster,
		xAccount
	};
	return newCampaign;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const campaignDetails = createAsyncThunk('campaigns/campaignDetails', async (params: ICampaignDetailsParams, { dispatch, getState }) => {
	const store = getState() as RootState;
	const campaignsStore = store.campaigns;
	const { campaign_details } = campaignsStore;

	const query: ICampaignDetailsBody = {
		askAmount: campaign_details?.askAmount || '',
		category: campaign_details?.category || '',
		description: campaign_details?.description || '',
		name: campaign_details?.name || '',
		poster: campaign_details?.poster || '',
		xAccount: campaign_details?.xAccount || ''
	};
	dispatch(api.endpoints.createCampaignsDetails.initiate(query))
		.unwrap()
		.then(() => {
			const campaign = getCampaign(query);
			dispatch(campaignsActions.setNewCampaign(campaign));
			dispatch(successNotification('Campaign added successfully'));
		})
		.catch(() => {
			dispatch(errorNotification('Failed to add campaign'));
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

export const getCampaigns = createAction('house/getCampaign', (params: ICampaignDetailsQuery, isLoading?: boolean) => {
	return {
		payload: {
			isLoading,
			query: params
		}
	};
});
