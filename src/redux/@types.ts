// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyAction, Dispatch, Middleware, ThunkDispatch } from '@reduxjs/toolkit';
import { ICampaignsStore } from './campaigns/@types';

export type RootState = {
	campaigns: ICampaignsStore;
};

export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction> & Dispatch<AnyAction>;
export type AppMiddleware = Middleware<{}, RootState, AppDispatch>;
