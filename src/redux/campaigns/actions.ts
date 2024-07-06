// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createAsyncThunk } from '@reduxjs/toolkit';
import { FormInstance } from 'antd';
import { campaignsActions } from '.';

interface ICampaignDetailsValueChangedParams {
	form: FormInstance<any>;
	values: {
		name?: string;
		category?: string;
		askAmount?: string;
		description?: string;
		xAccount?: string;
		poster?: string;
	};
}
export const campaignDetailsFieldValueChanged = createAsyncThunk('campaigns/campaignDetailsFieldValueChanged', async (params: ICampaignDetailsValueChangedParams, { dispatch }) => {
	const { form, values } = params;

	if (values?.name) {
		form.setFieldValue('bio', values?.name);
		dispatch(
			campaignsActions.setCampaignDetails_Field({
				key: 'name',
				value: values?.name
			})
		);
	} else if (values?.category) {
		form.setFieldValue('category', values?.category);
		dispatch(
			campaignsActions.setCampaignDetails_Field({
				key: 'category',
				value: values?.category
			})
		);
	} else if (values?.askAmount) {
		form.setFieldValue('askAmount', values?.askAmount);
		dispatch(
			campaignsActions.setCampaignDetails_Field({
				key: 'askAmount',
				value: values?.askAmount
			})
		);
	} else if (values?.description) {
		form.setFieldValue('description', values?.description);
		dispatch(
			campaignsActions.setCampaignDetails_Field({
				key: 'description',
				value: values?.description
			})
		);
	} else if (values?.xAccount) {
		form.setFieldValue('xAccount', values?.xAccount);
		dispatch(
			campaignsActions.setCampaignDetails_Field({
				key: 'xAccount',
				value: values?.xAccount
			})
		);
	} else if (values?.poster) {
		form.setFieldValue('poster', [
			{
				name: 'poster',
				status: 'done',
				uid: '-1',
				url: values?.poster
			}
		]);
		dispatch(
			campaignsActions.setCampaignDetails_Field({
				key: 'poster',
				value: values?.poster
			})
		);
	}
});
