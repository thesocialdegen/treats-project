// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// import ImageIcon from '@/ui-components/ImageIcon';
import React from 'react';
import SponsorCard from './SponsorCard';

const sponsors = Array.from({ length: 8 }, (_, index) => index);

const CampaignSponsor = () => {
	return (
		<section>
			<article
				className='flex max-h-[3000px] w-full flex-col px-4 py-6'
				style={{
					backgroundImage: 'url(/assets/Frames/social-good-bg.svg)',
					backgroundPosition: 'center',
					border: '5px solid #000',
					borderRadius: '30px'
				}}
			>
				<div className='grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{sponsors.map((_, index) => (
						<SponsorCard key={index} />
					))}
				</div>
			</article>
		</section>
	);
};

export default CampaignSponsor;
