// Copyright 2019-2025 @polka-labs/townhall authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export type ErrorResponse = { message?: string } & { error?: string };

export const transformErrorResponse = (response: any) => {
	return {
		error: (response?.data as ErrorResponse)?.message || (response?.data as ErrorResponse)?.error || 'Something went wrong.',
		status: response?.status
	};
};