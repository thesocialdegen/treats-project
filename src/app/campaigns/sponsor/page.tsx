// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import CampaignSponsor from '@/components/Sponsors';
import SEOHead from '@/global/SEOHead';
import React from 'react';

const page = () => {
	return (
		<>
			<SEOHead
				title={'welcome to campigns sponsor page'}
				desc={'welcome to campigns sponsor page'}
				// img={house?.logo}
			/>
			<section className={'flex h-full w-full justify-center'}>
				<CampaignSponsor />
			</section>
		</>
	);
};

export default page;
