// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
'use client';

import ImageIcon from '@/ui-components/ImageIcon';
import { bangers, poppins } from '@/utils/fonts';
import { avatarArray } from '@/utils/profileImages';
import { Button, Progress } from 'antd';
import React from 'react';

const SponsorCard = () => {
	return (
		<article className='flex justify-center gap-x-4'>
			<div
				className='flex h-[404px] w-[330px] flex-col gap-y-2 bg-white p-4'
				style={{
					border: '5px solid #000',
					borderRadius: '30px'
				}}
			>
				<div className='flex items-center justify-between'>
					<ImageIcon
						src={avatarArray[0]?.url || 'https://i.ibb.co/1R4P6rj/profile-icon-1.png'}
						alt='profile-image'
						imgClassName='h-[103px] w-[103px]'
					/>
					<div className='flex flex-col gap-y-4'>
						<p className='flex items-center justify-center rounded-[72px] bg-[#FFD7F9] px-3 py-1'>500 $Treats</p>
						<Progress
							type='circle'
							percent={75}
							size={70}
							className='ml-auto'
							showInfo={true}
							strokeColor='var(--red_primary)'
							strokeWidth={10}
						/>
					</div>
				</div>
				<h1 className='text-[40px] tracking-wider text-black'>Project Name</h1>
				<p className={`${poppins.className} text-xl`}>Join a supportive, collaborative ecosystem with a greater purpose – permissionless, flexible, and...</p>
				<Button
					className={`${bangers.className} flex h-[37px] w-[107px] items-center justify-center rounded-[72px] border-[2px] border-solid border-black bg-yellow_primary text-xl hover:text-black`}
				>
					Sponsor
				</Button>
			</div>
		</article>
	);
};

export default SponsorCard;
