// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ImageIcon from '@/ui-components/ImageIcon';
import React from 'react';
import SponsorCard from './SponsorCard';
const CampaignSponsor = () => {
	return (
		<section
			className='flex max-h-[2439px] w-full flex-col py-6'
			style={{
				backgroundImage: 'url(/assets/icons/sponsor-bg.svg)',
				backgroundPosition: 'center',
				border: '5px solid #000',
				borderRadius: '30px'
			}}
		>
			<div className='-mt-[176px] flex max-h-[450px] justify-center'>
				<ImageIcon
					src='/assets/GIFs/project-sponsor.gif'
					alt='sponsor-gif'
					imgClassName='h-[600px] w-[600px] scale-[60%]'
				/>
			</div>
			<SponsorCard />
		</section>
	);
};
export default CampaignSponsor;
