// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import ImageIcon from '@/ui-components/ImageIcon';
import { bangers, poppins } from '@/utils/fonts';
import { Button, Progress } from 'antd';
import React, { FC } from 'react';

interface ICampaignCard {
	title: string;
	treats: number;
	progress: number;
	description: string;
	buttonText: string;
	iconSrc: string;
	iconAlt: string;
	style?: any;
}

const CampaignCard: FC<ICampaignCard> = (props) => {
	const { title, treats, progress, description, buttonText, iconSrc, iconAlt } = props;
	return (
		<div className='-mt-10 flex h-[490px] flex-col gap-y-5'>
			<div className='flex items-center justify-center gap-x-4'>
				<ImageIcon
					src={iconSrc}
					alt={iconAlt}
				/>
				<div>
					<h1 className='flex items-center gap-x-2 text-[40px]'>
						{treats}/400{' '}
						<ImageIcon
							src='/assets/icons/dollar-icon.svg'
							alt='dollar-icon'
							imgClassName='mt-1.5'
						/>{' '}
						<span className='-ml-4'>Treats</span>
					</h1>
					<Progress percent={progress} />
				</div>
			</div>
			<h1 className='mt-4 w-[366px] text-6xl tracking-wider'>{title?.substring(0, 14)}...</h1>
			<p className={`${poppins.className} w-[366px] text-4xl`}>{description?.substring(0, 50)}...</p>
			<Button
				className={`${bangers.className} mt-auto flex h-[45px] w-[164px] items-center justify-center rounded-[72px] border-[3px] border-solid border-black bg-yellow_primary text-[28px] hover:text-black`}
			>
				{buttonText}
			</Button>
			{/* <ImageIcon
				src='/assets/icons/thunder-icon.svg'
				alt='thunder-icon'
				imgClassName='relative z-100 left-[290px] -top-[46px]'
			/> */}
		</div>
	);
};

export default CampaignCard;
