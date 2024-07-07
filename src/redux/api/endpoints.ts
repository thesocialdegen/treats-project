// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// Copyright 2019-2025 @polka-labs/townhall authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BaseQueryFn, EndpointBuilder, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import { transformErrorResponse } from './utils/error';
import { ICampaignDetailsBody, ICampaignDetailsResponse } from '@/types/backend-types';

export const endpoints = (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, 'backend-api'>) => ({
	campaignsDetails: builder.mutation<ICampaignDetailsResponse, ICampaignDetailsBody>({
		query: (body: any) => ({
			body: body,
			method: 'POST',
			url: 'campaigns'
		}),
		transformErrorResponse: transformErrorResponse,
		transformResponse: (response: ICampaignDetailsResponse) => response
	})
});