// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import SponsorModalFooter from '@/components/Sponsors/modal/SponsorModalFooter';
import { EFooterType } from '@/redux/modal/@types';
import { FC } from 'react';

interface IModalFooterProps {
	type?: EFooterType;
}

const ModalFooter: FC<IModalFooterProps> = (props) => {
	switch (props.type) {
		case EFooterType.SPONSOR_DETAILS:
			return <SponsorModalFooter />;
		default:
			return <></>;
	}
};

export default ModalFooter;
