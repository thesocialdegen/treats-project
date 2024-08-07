// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { modalActions } from '@/redux/modal';
import { EContentType, EFooterType, ETitleType } from '@/redux/modal/@types';
import ImageIcon from '@/ui-components/ImageIcon';
import { bangers, poppins } from '@/utils/fonts';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

const CampaignProjects = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	return (
		<section>
			<div
				className='h-[810px] w-[1428px] rounded-3xl'
				style={{
					backgroundImage: 'url(/assets/GIFs/projects.gif)',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					border: '5px solid #000'
				}}
			></div>
			<div className='relative -top-[665px]'>
				<div className={'flex items-center justify-center gap-x-[60px]'}>
					<h1 className='text-7xl capitalize tracking-wider'>support a project or smth</h1>
				</div>
			</div>
			<article className='relative -top-[520px]'>
				<div className={'flex items-center justify-center gap-x-[150px]'}>
					<div className='flex flex-col gap-y-6'>
						<p className={`${poppins.className} w-[494px] text-3xl`}>
							Join a supportive, collaborative ecosystem with a greater purpose – permissionless, flexible, and dedicated to defining the future of Ethereum.
						</p>
						<Button
							className={`${bangers.className} flex h-[67px] w-[274px] items-center justify-center rounded-[72px] border-[3px] border-solid border-black bg-yellow_primary text-[40px] hover:text-black`}
							onClick={() => {
								router.push('campaigns/sponsor');
							}}
						>
							Tip a project
						</Button>
					</div>
					<div className='flex flex-col gap-y-4'>
						<p className={`${poppins.className} w-[494px] text-3xl`}>
							Join a supportive, collaborative ecosystem with a greater purpose – permissionless, flexible, and dedicated to defining the future of Ethereum.
						</p>
						<Button
							className={`${bangers.className} flex h-[67px] w-[345px] items-center justify-center rounded-[72px] border-[3px] border-solid border-black bg-yellow_primary text-[40px] hover:text-black`}
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
							list your project
						</Button>
					</div>
				</div>
				<div className='flex justify-end'>
					<ImageIcon
						src='/assets/icons/stars-icon.svg'
						alt='stars-icon'
						imgClassName='ml-auto relative -left-[28px] -top-[60px]'
					/>
				</div>
			</article>
		</section>
	);
};

export default CampaignProjects;
