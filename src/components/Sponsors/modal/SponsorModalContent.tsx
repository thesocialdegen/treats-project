// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import ImageIcon from '@/ui-components/ImageIcon';
import { bangers, poppins } from '@/utils/fonts';
import { avatarArray } from '@/utils/profileImages';
import { Progress } from 'antd';
import React from 'react';

const SponsorModalContent = () => {
	return (
		<article className={`${bangers.className} -mt-[54px] h-[400px] w-[553px]`}>
			<div className='flex items-center justify-between'>
				<ImageIcon
					src={avatarArray[0]?.url || 'https://i.ibb.co/1R4P6rj/profile-icon-1.png'}
					alt='profile-image'
					imgClassName='h-[103px] w-[103px]'
				/>
				<div className='flex flex-col gap-y-4'>
					<p className='flex items-center justify-center rounded-[72px] bg-[#FFD7F9] px-3 py-1 text-base'>ASK: 500 $Treats</p>
					<Progress
						type='circle'
						percent={75}
						size={63}
						className='ml-auto'
						showInfo={true}
						strokeColor='var(--pink_secondary)'
						strokeWidth={12}
					/>
				</div>
			</div>
			<h1 className='text-[40px] tracking-wider text-black'>Project Name</h1>
			<p className={`${poppins.className} text-xl`}>
				Join a supportive, collaborative ecosystem with a greater purpose – permissionless, flexible, and Join a supportive, collaborative ecosystem with a greater purpose –
				permissionless, flexible!
			</p>
		</article>
	);
};

export default SponsorModalContent;
