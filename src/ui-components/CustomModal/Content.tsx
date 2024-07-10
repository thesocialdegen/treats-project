// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import CampaignCreationModalContent from '@/components/Campaigns/contents/modal/CampaignCreationModalContent';
import SponsorModalContent from '@/components/Sponsors/modal/SponsorModalContent';
import { EContentType } from '@/redux/modal/@types';
import { FC } from 'react';

interface IModalContentProps {
	type?: EContentType;
}

const ModalContent: FC<IModalContentProps> = (props) => {
	switch (props.type) {
		case EContentType.SPONSOR_DETAILS:
			return <SponsorModalContent />;
		case EContentType.CAMPAIGN_DETAILS:
			return <CampaignCreationModalContent />;
		default:
			return <></>;
	}
};

export default ModalContent;
