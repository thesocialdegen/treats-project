// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { getAccessToken } from '@privy-io/react-auth';
import { isHydrateAction } from './utils/isHydrateAction';
import { endpoints } from './endpoints';

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/v1',
		prepareHeaders: async (headers) => {
			// const token = await getAccessToken();
			// if (token) {
			// headers.set('Authorization', `Bearer ${token}`);
			// }
			headers.set('Content-Type', 'application/json');
			headers.set('x-token-type', 'privy');
			return headers;
		}
	}),
	endpoints: endpoints,
	extractRehydrationInfo(action, { reducerPath }): any {
		if (isHydrateAction(action)) {
			return (action as any)?.payload?.[reducerPath];
		}
	},
	reducerPath: 'backend-api'
});

// export const {
// useReactionMutation,
// useGetHousesQuery,
// useGetBountiesQuery,
// useGetNotificationsQuery,
// useGetHousesWithVPQuery,
// useGetVPQuery,
// useGetPostsSearchQuery,
// useGetStrategiesQuery,
// useGetStrategyQuery,
// useGetHouseRulesQuery,
// useGetAiSummaryQuery,
// useGetChannelVerifyTokenMutation
// } = api;
