// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EContentType, EFooterType, ETitleType } from '@/redux/modal/@types';

export const getTitleWrapperClassName = (titleType?: ETitleType, footerType?: EFooterType, contentType?: EContentType) => {
	if (contentType === EContentType.SPONSOR_DETAILS || contentType === EContentType.CAMPAIGN_DETAILS) {
		return 'flex items-center bg-app_dark_background justify-between gap-x-2 p-6 border-0 rounded-t-xl';
	}

	return 'flex items-center bg-app_dark_background justify-between gap-x-2 p-6 border-0 border-b border-solid border-dark_grey_primary rounded-t-xl';
};

export const getCloseButtonClassName = (titleType?: ETitleType, footerType?: EFooterType, contentType?: EContentType) => {
	return contentType === EContentType.SPONSOR_DETAILS || contentType === EContentType.CAMPAIGN_DETAILS;
};
