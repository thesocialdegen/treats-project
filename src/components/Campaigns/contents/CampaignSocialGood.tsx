// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React from 'react';
import { bangers } from '@/utils/fonts';
import { Button } from 'antd';
import CampaignCard from './CampaignCard';
import { modalActions } from '@/redux/modal';
import { EContentType, EFooterType, ETitleType } from '@/redux/modal/@types';
import { useDispatch } from 'react-redux';
import { useCampaignsSelector } from '@/redux/selectors';
import { useRouter } from 'next/navigation';

const CampaignSocialGood = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { campaigns } = useCampaignsSelector();

	return (
		<section>
			<div
				className='h-[810px] w-[1428px] rounded-3xl'
				style={{
					backgroundImage: 'url(/assets/GIFs/social-good.gif)',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					border: '5px solid #000'
				}}
			></div>
			<div className='relative -top-[750px] left-[250px]'>
				<div className='flex w-[1136px] items-center justify-between'>
					<h1 className='text-7xl tracking-wider'>SOCIAL GOOD</h1>
					<div className='flex justify-center gap-x-2'>
						<Button
							className={`${bangers.className} flex h-[56px] w-[290px] items-center justify-center rounded-[72px] border-4 border-black bg-sky_blue_secondary px-10 py-3 text-3xl text-black hover:shadow-lg`}
							onClick={() => {
								dispatch(
									modalActions.setModal({
										contentType: EContentType.CAMPAIGN_DETAILS,
										footerType: EFooterType.NONE,
										open: true,
										titleType: ETitleType.NONE
									})
								);
							}}
						>
							Start an initiative
						</Button>
						<Button
							className={`${bangers.className} flex h-[56px] w-[169px] items-center justify-center rounded-[72px] border-4 border-black bg-green_primary px-10 py-3 text-3xl text-black hover:shadow-lg`}
							onClick={() => {
								router.push('campaigns/sponsor');
							}}
						>
							View All
						</Button>
					</div>
				</div>
			</div>
			<article className='relative -top-[650px]'>
				<div className='flex justify-center gap-x-[90px]'>
					<CampaignCard
						title={campaigns?.data?.events?.[0]?.name}
						treats={100}
						progress={30}
						description={campaigns?.data?.events?.[0]?.description}
						buttonText='contribute'
						iconSrc='/assets/icons/treats-mini-icon.svg'
						iconAlt='treats-icon'
					/>
					<CampaignCard
						title={campaigns?.data?.events?.[1]?.name}
						treats={100}
						progress={30}
						description={campaigns?.data?.events?.[1]?.description}
						buttonText='contribute'
						iconSrc='/assets/icons/treats-mini-icon.svg'
						iconAlt='treats-icon'
					/>
					<CampaignCard
						title={campaigns?.data?.events?.[2]?.name}
						treats={100}
						progress={30}
						description={campaigns?.data?.events?.[2]?.description}
						buttonText='contribute'
						iconSrc='/assets/icons/treats-mini-icon.svg'
						iconAlt='treats-icon'
					/>
				</div>
			</article>
		</section>
	);
};

export default CampaignSocialGood;
