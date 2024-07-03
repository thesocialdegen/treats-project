// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { modalActions } from '.';
import { AppMiddleware } from '../@types';
import { EContentType, EFooterType, ETitleType } from './@types';
import { resetModal } from './actions';

export const modalMiddleware: AppMiddleware = (store) => (next) => (action) => {
	next(action);
	const dispatch = store.dispatch;

	if (resetModal.match(action)) {
		dispatch(
			modalActions.setModal({
				contentType: EContentType.NONE,
				footerType: EFooterType.NONE,
				open: false,
				titleType: ETitleType.NONE
			})
		);
	}
};
