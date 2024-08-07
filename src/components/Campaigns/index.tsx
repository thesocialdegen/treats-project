// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { bangers } from '@/utils/fonts';
import { Button } from 'antd';
import React, { useEffect } from 'react';
import CampaignSocialGood from './contents/CampaignSocialGood';
import CampaignProjects from './contents/CampaignProjects';
import { useDispatch } from 'react-redux';
import { getCampaigns } from '@/redux/campaigns/actions';
// import { campaignsActions } from '@/redux/campaigns';
// import { useCampaignsSelector } from '@/redux/selectors';

const CampaignsPage = () => {
	// const { error } = useCampaignsSelector();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCampaigns({}, true));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const scrollToSocialGood = () => {
		// dispatch(campaignsActions.setError('true'));
		const element = document.getElementById('social-good');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
	const scrollToProjects = () => {
		const element = document.getElementById('projects');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const scrollToUpcoming = () => {
		const element = document.getElementById('projects');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className='mx-auto mb-2 flex h-full w-full flex-col items-center justify-center gap-y-6 overflow-x-hidden px-2'>
			<article className='h-[810px]'>
				<div
					className='h-[810px] w-[1428px] rounded-3xl'
					style={{
						backgroundImage: 'url(/assets/GIFs/campaign.gif)',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						border: '5px solid #000'
					}}
				></div>
				<div className='relative -top-[120px]'>
					<div className={'flex items-center justify-center gap-x-[60px]'}>
						<Button
							className={`${bangers.className} flex h-[77px] w-[315px] items-center justify-center rounded-[72px] border-yellow_primary bg-yellow_primary px-10 py-3 text-5xl text-black hover:border-4  hover:border-black hover:drop-shadow-xl`}
							onClick={scrollToSocialGood}
						>
							Social good
						</Button>
						<Button
							className={`${bangers.className} flex h-[77px] w-[468px] items-center justify-center rounded-[72px] border-sky_blue_secondary bg-sky_blue_secondary px-10 py-3 text-5xl text-black hover:border-4 hover:border-black hover:drop-shadow-xl`}
							onClick={scrollToProjects}
						>
							Dev project/grants
						</Button>
						<Button
							className={`${bangers.className} flex h-[77px] w-[265px] items-center justify-center rounded-[72px] border-green_primary bg-green_primary px-10 py-3 text-5xl text-black hover:border-4 hover:border-black hover:drop-shadow-xl`}
							onClick={scrollToUpcoming}
						>
							upcoming
						</Button>
					</div>
				</div>
			</article>
			<article
				id='social-good'
				className='h-[810px]'
			>
				<CampaignSocialGood />
			</article>
			<article
				id='projects'
				className='h-[810px]'
			>
				<CampaignProjects />
			</article>
			<article
				id='upcoming'
				className='h-[810px]'
			>
				<div
					className='h-[810px] w-[1428px] rounded-3xl'
					style={{
						backgroundImage: 'url(/assets/GIFs/more-campaigns.gif)',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						border: '5px solid #000'
					}}
				></div>
			</article>
		</section>
	);
};

export default CampaignsPage;
