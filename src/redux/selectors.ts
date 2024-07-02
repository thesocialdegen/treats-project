// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { useSelector } from 'react-redux';
import { RootState } from './store';
import { ICampaignsStore } from './campaigns/@types';

export const useCampaignsSelector = () => {
	return useSelector<RootState, ICampaignsStore>((state) => state.campaigns);
};
