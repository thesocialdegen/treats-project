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
}

const CampaignCard: FC<ICampaignCard> = (props) => {
	const { title, treats, progress, description, buttonText, iconSrc, iconAlt } = props;
	return (
		<div className='flex flex-col gap-y-4'>
			<div className='flex items-center justify-center gap-x-4'>
				<ImageIcon
					src={iconSrc}
					alt={iconAlt}
				/>
				<div>
					<h1 className='text-[40px]'>{treats}/400 $Treats</h1>
					<Progress percent={progress} />
				</div>
			</div>
			<h1 className='mt-4 w-[326px] text-6xl tracking-wider'>{title}</h1>
			<p className={`${poppins.className} w-[242px] text-4xl`}>{description}</p>
			<Button
				className={`${bangers.className} flex h-[45px] w-[164px] items-center justify-center rounded-[72px] border-[3px] border-solid border-black bg-yellow_primary text-[28px] hover:text-black`}
			>
				{buttonText}
			</Button>
			<ImageIcon
				src='/assets/icons/thunder-icon.svg'
				alt='thunder-icon'
				imgClassName='relative z-100 left-[290px] -top-[46px]'
			/>
		</div>
	);
};

export default CampaignCard;
