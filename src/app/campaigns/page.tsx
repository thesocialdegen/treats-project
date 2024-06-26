// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
'use client';

import CampaignsPage from '@/components/Campaigns';
import SEOHead from '@/global/SEOHead';
import React from 'react';

const page = () => {
	return (
		<>
			<SEOHead
				title={'welcome to campigns page'}
				desc={'welcome to campigns page'}
				// img={house?.logo}
			/>
			<section className={'h-full w-full'}>
				<CampaignsPage />
			</section>
		</>
	);
};

export default page;
