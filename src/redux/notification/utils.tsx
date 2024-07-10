// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React, { FC } from 'react';
import { ENotificationStatus, ISendNotificationPayloadType } from './@types';
import { notification } from 'antd';
import ImageIcon from '@/ui-components/ImageIcon';

interface INotificationIconProps {
	status: ENotificationStatus;
}

const NotificationIcon: FC<INotificationIconProps> = (props) => {
	const { status } = props;
	return (
		<ImageIcon
			src={`/assets/icons/${[ENotificationStatus.SUCCESS, ENotificationStatus.INFO].includes(status) ? 'success' : 'error'}-icon.svg`}
			imgWrapperClassName={`bg-${[ENotificationStatus.SUCCESS, ENotificationStatus.INFO].includes(status) ? 'green' : 'red'}_notification`}
			alt='notification-icon'
		/>
	);
};

export const notify = (params: ISendNotificationPayloadType) => {
	const { title, status, message, duration } = params;
	notification[status]({
		description: message,
		duration: duration || 4.5,
		icon: <NotificationIcon status={status} />,
		message: title
	});
};
