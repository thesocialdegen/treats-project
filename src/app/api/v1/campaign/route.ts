// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// import getReqBody from '../../api-utils/getReqBody';
import { NextResponse } from 'next/server';
import withErrorHandling from '../../api-utils/withErrorHandling';
import getErrorMessage, { getErrorStatus } from '@/utils/getErrorMessage';
import { StatusCodes } from 'http-status-codes';
import { campaignsCollection } from '@/services/firebase/utils';
export const getCampaigns = async () => {
	try {
		const campaigns: ICampaignsFields[] = [];
		const campaignsQuery: FirebaseFirestore.Query<FirebaseFirestore.DocumentData> = campaignsCollection;
		const campaignsSnapshot = await campaignsQuery.get();
		if (campaignsSnapshot.size > 0) {
			campaignsSnapshot.docs.forEach((doc) => {
				if (doc && doc.exists) {
					const data = doc.data() as ICampaignsFields;
					if (data?.campaign_id) {
						const campaign: ICampaignsFields = {
							askAmount: data?.askAmount,
							campaign_id: data?.campaign_id,
							category: data?.category,
							description: data?.description,
							name: data?.name,
							poster: data?.poster,
							xAccount: data?.xAccount
						};
						campaigns.push(campaign);
					}
				}
			});
		}

		return {
			data: JSON.parse(
				JSON.stringify({
					events: campaigns,
					total: campaigns.length
				})
			),
			status: StatusCodes.OK
		};
	} catch (error) {
		return {
			error: getErrorMessage(error),
			status: getErrorStatus(error)
		};
	}
};

export const POST = withErrorHandling(async () => {
	// const { campaigns } = await getReqBody(req);
	const { data } = await getCampaigns();
	console.log(data);
	return NextResponse.json({
		campaigns: { data }
	});
});
