// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import ImageIcon from '@/ui-components/ImageIcon';
import React from 'react';
import HeroHeader from './HeroSection/HeroHeader';
import HeroItems from './HeroSection/HeroItems';
import StepsMenu from './HeroSection/StepsMenu';
import HeroFooterFrame from './HeroSection/HeroFooterFrame';
import { poppins } from '@/utils/fonts';

const HomePage = () => {
	return (
		<section className='mx-auto flex w-full flex-col items-center justify-center overflow-x-hidden px-2'>
			<HeroHeader />
			<HeroItems />
			<StepsMenu />
			<article className='relative -mt-[130px] ml-[60px] flex h-auto w-full justify-center'>
				<div>
					<ImageIcon
						src='/assets/Frames/frame6.svg'
						alt=''
						imgClassName='relative  w-[1484px]'
					/>
					<div className='relative -mt-[670px]'>
						<ImageIcon
							src='/assets/GIFs/popup.gif'
							alt=''
							imgClassName='absolute scale-[40%] -top-[230px] left-[200px]'
						/>
						<h1 className='z-1000 popup-container absolute left-[600px] top-[250px] w-[259px] scale-[40%] text-center text-6xl'>Why TREATS?</h1>
						<div className='absolute left-[72px] top-[116px]'>
							<h1 className='text-4xl tracking-wider text-black'>Inclusive and Fun</h1>
							<p className={`${poppins.className} mt-4 w-[507px] text-2xl text-black`}>
								From quirky pop art merchandise to unique campaigns like the “Pass it Forward” project, TREATS brings a playful and inclusive approach to tipping.
							</p>
						</div>
						<div className='absolute left-[72px] top-[390px]'>
							<h1 className='text-4xl tracking-wider text-black'>Community-Centric </h1>
							<p className={`${poppins.className} mt-4 w-[528px] text-2xl text-black`}>
								60% of TREATS are dedicated to the community through airdrops, giveaways, and engagement rewards.
							</p>
						</div>
						<div className='absolute left-[972px] top-[190px]'>
							<h1 className='text-4xl tracking-wider text-black'>Social Good: </h1>
							<p className={`${poppins.className} mt-4 w-[361px] text-2xl text-black`}>
								Our future initiatives include social good games and networking campaigns like “Buy a Dev a Coffee” to support the hardworking creators and developers in our
								community.
							</p>
						</div>
					</div>
				</div>
			</article>
			<HeroFooterFrame />
		</section>
	);
};

export default HomePage;
