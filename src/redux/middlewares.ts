// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { campaignMiddleware } from './campaigns/middlewares';
import { api } from './api';
import { notificationMiddleware } from './notification/middlewares';

export const getDefaultMiddlewares = (getDefaultMiddleware: any) => {
	return getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
		}
	})
		.concat(api.middleware)
		.concat(campaignMiddleware)
		.concat(notificationMiddleware);
};
