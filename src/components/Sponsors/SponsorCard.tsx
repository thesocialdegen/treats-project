// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
'use client';

import { modalActions } from '@/redux/modal';
import { EContentType, EFooterType, ETitleType } from '@/redux/modal/@types';
import ImageIcon from '@/ui-components/ImageIcon';
import { bangers, poppins } from '@/utils/fonts';
import { avatarArray } from '@/utils/profileImages';
import { Button, Progress } from 'antd';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

interface ISponsorCard {
	campaign: ICampaignsFields;
}

const SponsorCard: FC<ISponsorCard> = (props) => {
	const { campaign } = props;
	const dispatch = useDispatch();

	return (
		<article className='flex justify-center gap-x-4'>
			<div
				className='flex h-[488px] w-[330px] flex-col items-center gap-y-2 bg-white px-3 py-5'
				style={{
					border: '5px solid #000',
					borderRadius: '30px'
				}}
			>
				<div className='flex items-center justify-center'>
					<ImageIcon
						src={avatarArray[2]?.url || 'https://i.ibb.co/1R4P6rj/profile-icon-1.png'}
						alt='profile-image'
						imgClassName='h-[103px] w-[103px]'
					/>
				</div>
				<p className='m-0 flex items-center justify-center rounded-[72px] bg-pink_primary p-0 px-3 py-1 text-base'>{campaign?.category}</p>
				<h1 className='text-[40px] tracking-wider text-black'>{campaign?.name && campaign?.name?.length < 14 ? campaign?.name : `${campaign?.name?.substring(0, 14)}...`}</h1>
				<p className={`${poppins.className} text-center text-xl`}>
					{campaign?.description && campaign?.description?.length < 100 ? campaign?.description : `${campaign?.description?.substring(0, 80)}...`}
					<span
						className='ml-2 cursor-pointer text-sm text-sky-500'
						onClick={() => {
							dispatch(
								modalActions.setModal({
									additionalInfo: campaign,
									contentType: EContentType.SPONSOR_DETAILS,
									footerType: EFooterType.SPONSOR_DETAILS,
									open: true,
									titleType: ETitleType.NONE
								})
							);
						}}
					>
						see more
					</span>
				</p>
				<div className='mt-auto'>
					<div className='flex items-center justify-center gap-x-4'>
						<ImageIcon
							src='/assets/icons/treats-icon-mini.svg'
							alt='treats-icon'
							imgClassName='mt-3'
						/>
						<div className='flex flex-col'>
							<h1 className='flex items-center gap-x-2 text-[30px]'>
								100/400
								<ImageIcon
									src='/assets/icons/dollar-icon.svg'
									alt='dollar-icon'
									imgClassName='mt-1.5'
								/>{' '}
								<span className='-ml-4'>Treats</span>
							</h1>
							<Progress
								percent={75}
								className='-mt-2'
							/>
						</div>
					</div>
					<Button
						className={`${bangers.className} flex h-[37px] w-full items-center justify-center rounded-[72px] border-[2px] border-solid border-black bg-yellow_primary text-xl hover:text-black`}
					>
						Tip
					</Button>
				</div>
			</div>
		</article>
	);
};

export default SponsorCard;
