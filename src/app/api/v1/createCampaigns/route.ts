// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import getReqBody from '../../api-utils/getReqBody';
import { NextRequest, NextResponse } from 'next/server';
import withErrorHandling from '../../api-utils/withErrorHandling';
import { APIError } from '@/global/exceptions';
import MESSAGES from '@/global/messages';
import { API_ERROR_CODE } from '@/global/constants/errorCodes';
import { campaignsCollection } from '@/services/firebase/utils';

export const POST = withErrorHandling(async (req: NextRequest) => {
	const { name, category, askAmount, description, xAccount, poster } = await getReqBody(req);

	if (!name && !category && !askAmount && !description && !xAccount) {
		throw new APIError(`${MESSAGES.REQ_BODY_ERROR}`, 500, API_ERROR_CODE.REQ_BODY_ERROR);
	}
	if (name && typeof name !== 'string') {
		throw new APIError(`${MESSAGES.INVALID_PARAM_TYPE}`, 500, API_ERROR_CODE.INVALID_PARAM_TYPE);
	}

	// Check if campaign name already exists
	const existingCampaign = await campaignsCollection.where('name', '==', name).get();
	if (!existingCampaign.empty) {
		throw new APIError(`${MESSAGES.CAMPAIGN_NAME_EXISTS}`, 400, API_ERROR_CODE.CAMPAIGN_NAME_EXISTS);
	}

	const campaignDoc = campaignsCollection.doc();
	const newCampaign: ICampaignsFields = {
		askAmount,
		campaign_id: name.replace(' ', '_'),
		category,
		description,
		name,
		poster,
		xAccount
	};

	await campaignDoc.set(newCampaign, { merge: true });

	return NextResponse.json({
		event: {
			...newCampaign
		}
	});
});
