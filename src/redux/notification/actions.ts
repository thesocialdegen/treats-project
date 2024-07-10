// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createAction } from '@reduxjs/toolkit';

export const successNotification = createAction('notification/successNotification', (message: string, title?: string) => {
	return {
		payload: {
			message,
			title
		}
	};
});

export const errorNotification = createAction('notification/errorNotification', (message: string, title?: string) => {
	return {
		payload: {
			message,
			title
		}
	};
});
