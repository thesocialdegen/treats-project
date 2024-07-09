// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { useModalSelector } from '@/redux/selectors';
import { ESocials } from '@/types/enums';
import ImageIcon from '@/ui-components/ImageIcon';
import { bangers, poppins } from '@/utils/fonts';
import { avatarArray } from '@/utils/profileImages';
import { Button, Progress } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

const SponsorModalContent = () => {
	const router = useRouter();
	const { additionalInfo } = useModalSelector();
	console.log('from modal --> ', additionalInfo);

	return (
		<article className={`${bangers.className} -mt-[54px] h-[400px] w-[553px]`}>
			<div className='flex items-center justify-between'>
				<ImageIcon
					src={avatarArray[0]?.url || 'https://i.ibb.co/1R4P6rj/profile-icon-1.png'}
					alt='profile-image'
					imgClassName='h-[103px] w-[103px]'
				/>
				<div className='flex items-center justify-center gap-x-4'>
					<ImageIcon
						src='/assets/icons/treats-mini-icon.svg'
						alt={'treats-icon'}
					/>
					<div className='-mt-4 flex flex-col'>
						<h1 className='flex items-center gap-x-2 text-[40px]'>
							100/400
							<ImageIcon
								src='/assets/icons/dollar-icon.svg'
								alt='dollar-icon'
								imgClassName='mt-[15px]'
							/>{' '}
							<span className='-ml-4'>Treats</span>
						</h1>
						<Progress
							percent={75}
							className='-mt-4'
						/>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-between'>
				<h1 className='text-[40px] tracking-wider text-black'>{additionalInfo?.name}</h1>
				<div className='flex justify-center'>
					<div className='flex gap-x-4'>
						<Button
							className='m-0 flex h-[36px] w-[36px] items-center justify-center rounded-[9px] border-none bg-sky_blue_primary p-0'
							onClick={() => {
								router.push(ESocials.TWITTER);
							}}
						>
							<ImageIcon
								src='/assets/icons/twitter-icon.svg'
								alt='twitter-icon'
								imgClassName='mt-1.5'
							/>
						</Button>
						<Button
							className='m-0 flex h-[36px] w-[36px] items-center justify-center rounded-[9px] border-none bg-sky_blue_primary p-0'
							onClick={() => {
								router.push(`https://x.com/${additionalInfo?.xAccount?.substring(1)}`);
							}}
						>
							<ImageIcon
								src='/assets/icons/telegram-icon.svg'
								alt='twitter-icon'
								imgClassName='-ml-1 mt-1.5'
							/>
						</Button>
					</div>
				</div>
			</div>
			<p className={`${poppins.className} text-xl`}>
				{additionalInfo?.description && additionalInfo?.description?.length < 100 ? additionalInfo?.description : `${additionalInfo?.description?.substring(0, 80)}...`}
			</p>
			{additionalInfo?.poster && (
				<div className='max-h-[103px]'>
					<ImageIcon
						src={additionalInfo?.poster}
						alt='poster-img'
					/>
				</div>
			)}
		</article>
	);
};

export default SponsorModalContent;
