// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ETitleType } from '@/redux/modal/@types';
import { FC } from 'react';

interface IModalTitleProps {
	type?: ETitleType;
}
const ModalTitle: FC<IModalTitleProps> = (props) => {
	switch (props.type) {
		default:
			return <></>;
	}
};

export default ModalTitle;
