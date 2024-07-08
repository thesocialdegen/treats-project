// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { notificationActions } from '.';
import { AppMiddleware } from '../@types';
import { ENotificationStatus } from './@types';
import { errorNotification, successNotification } from './actions';

export const notificationMiddleware: AppMiddleware = (store) => (next) => (action) => {
	next(action);
	const dispatch = store.dispatch;

	if (errorNotification.match(action)) {
		const { message, title } = action.payload;
		dispatch(
			notificationActions.send({
				message: message,
				status: ENotificationStatus.ERROR,
				title: title || 'Failed!'
			})
		);
	} else if (successNotification.match(action)) {
		const { message, title } = action.payload;
		dispatch(
			notificationActions.send({
				message: message,
				status: ENotificationStatus.SUCCESS,
				title: title || 'Success!'
			})
		);
	}
};
