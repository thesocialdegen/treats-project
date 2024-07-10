// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RootState } from '@/redux/@types';
import { Action, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export function isHydrateAction(action: Action): action is PayloadAction<RootState> {
	return action.type === HYDRATE;
}
