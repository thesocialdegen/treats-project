// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export interface ICampaignsStore {
	error: string | null;
	loading: boolean;
	campaign_details: ICampaignDetails;
}

export interface ICampaignDetails {
	name?: string;
	category?: string;
	askAmount?: string;
	description?: string;
	xAccount?: string;
	poster?: string;
}
