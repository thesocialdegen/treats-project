// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { configureStore } from '@reduxjs/toolkit';
import { campaignsStore } from './campaigns';
import { modalStore } from './modal';
import { useDispatch } from 'react-redux';

export const store = configureStore({
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
	reducer: {
		[campaignsStore.name]: campaignsStore.reducer,
		[modalStore.name]: modalStore.reducer
	}
});
export type RootState = ReturnType<typeof store.getState>;
// export type TAppStore = ReturnType<typeof >;

// export const useAppDispatch: any = () => useDispatch<TAppStore['dispatch']>();
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppDispatch = typeof store.dispatch;
