// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { poppins } from '@/utils/fonts';
import ImageIcon from '@/ui-components/ImageIcon';
import React from 'react';

const StepsMenu = () => {
	return (
		<article className='relative -ml-[104px] -mt-[248px] flex w-full justify-center'>
			<div>
				<ImageIcon
					src='/assets/icons/steps.png'
					alt='treats-steps'
					imgClassName='w-[1578px]'
				/>
				<div className='absolute -mt-[530px] ml-[100px] flex w-[1570px] scale-[15%]'>
					<ImageIcon
						src='/assets/GIFs/1.gif'
						alt='step-1'
						imgClassName='absolute -left-[1920px]'
					/>
					<ImageIcon
						src='/assets/GIFs/2.gif'
						alt='step-2'
						imgClassName='absolute -top-[192px] left-[425px]'
					/>
					<ImageIcon
						src='/assets/GIFs/3.gif'
						alt='step-3'
						imgClassName='absolute -top-[330px] left-[2650px]'
					/>
				</div>
				<div className='absolute -mt-[400px] ml-[570px] flex'>
					<div className=''>
						<h1 className='text-4xl text-black'>Earn TREATS</h1>
						<p className={`${poppins.className} mt-4 w-[230px] text-2xl text-black`}>Participate in our campaigns, compete for leaderboard , or get tipped by others.</p>
					</div>
					<div className='ml-[110px]'>
						<h1 className='text-4xl text-black'>Tip Others</h1>
						<p className={`${poppins.className} mt-4 w-[230px] text-2xl text-black`}>
							Show your appreciation for great content by sending $TREATS directly to builders and projects.
						</p>
					</div>
					<div className='ml-[110px]'>
						<h1 className='text-4xl text-black'>Redeem TREATS</h1>
						<p className={`${poppins.className} mt-4 w-[230px] text-2xl text-black`}>Trade TREATS or hold them for Rewards</p>
					</div>
				</div>
			</div>
		</article>
	);
};

export default StepsMenu;
