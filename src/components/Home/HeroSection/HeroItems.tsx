// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { poppins } from '@/utils/fonts';
import ImageIcon from '@/ui-components/ImageIcon';
import React from 'react';

const HeroItems = () => {
	return (
		<section>
			<article className='mx-auto -mt-[32px] flex w-full scale-x-[98%] items-center justify-center'>
				<div className='relative -top-[16px]'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='695'
						viewBox='0 0 657 695'
						fill='none'
					>
						<defs>
							<clipPath id='clip-path3'>
								<path
									d='M2.5 91.1128C2.5 76.9989 13.1847 65.1764 27.2268 63.7531L623.591 3.30466C641.227 1.51704 655.922 16.6366 653.634 34.2147L592.031 507.398C590.631 518.15 583.045 527.075 572.659 530.189L37.898 690.527C20.2545 695.817 2.5 682.605 2.5 664.186V91.1128Z'
									stroke='black'
									strokeWidth='5'
								/>
							</clipPath>
						</defs>
						<image
							href='/assets/icons/frame2-bg.svg'
							x='0'
							y='0'
							height='695'
							clipPath='url(#clip-path3)'
							preserveAspectRatio='none'
						/>
						<path
							d='M2.5 91.1128C2.5 76.9989 13.1847 65.1764 27.2268 63.7531L623.591 3.30466C641.227 1.51704 655.922 16.6366 653.634 34.2147L592.031 507.398C590.631 518.15 583.045 527.075 572.659 530.189L37.898 690.527C20.2545 695.817 2.5 682.605 2.5 664.186V91.1128Z'
							stroke='black'
							strokeWidth='5'
						/>
					</svg>
					<div className='z-100 absolute'>
						<ImageIcon
							imgClassName='relative -top-[984px] -left-[192px] by-using'
							src='/assets/GIFs/gif2.gif'
							alt=''
						/>
						<h1 className={'z-100 by-using relative -top-[1672px] left-[230px] m-0 w-[200px] p-0 text-9xl'}>By Using</h1>
					</div>
				</div>
				<div className='relative -top-[76px] -ml-[32px]'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='735'
						viewBox='0 0 826 735'
						fill='none'
					>
						<defs>
							<clipPath id='clip-path2'>
								<path
									d='M53.9684 102.451C55.3139 89.5243 65.5254 79.3045 78.451 77.9483L793.13 2.96248C809.364 1.25918 823.5 13.9893 823.5 30.3123V704.214C823.5 721.011 808.574 733.884 791.959 731.416L26.7709 617.747C12.2106 615.584 1.93549 602.339 3.45945 587.698L53.9684 102.451Z'
									stroke='black'
									strokeWidth='5'
								/>
							</clipPath>
						</defs>
						<image
							href='/assets/GIFs/gif3.gif'
							x='0'
							y='0'
							width='826'
							height='735'
							clipPath='url(#clip-path2)'
							preserveAspectRatio='none'
						/>
						<path
							d='M53.9684 102.451C55.3139 89.5243 65.5254 79.3045 78.451 77.9483L793.13 2.96248C809.364 1.25918 823.5 13.9893 823.5 30.3123V704.214C823.5 721.011 808.574 733.884 791.959 731.416L26.7709 617.747C12.2106 615.584 1.93549 602.339 3.45945 587.698L53.9684 102.451Z'
							stroke='black'
							strokeWidth='5'
						/>
					</svg>
				</div>
			</article>
			<article className='relative -mt-[178px] flex w-full justify-center'>
				<ImageIcon
					src='/assets/icons/subheader.png'
					imgClassName='w-[1422px]'
					alt='subheader-img'
				/>
				<div className='absolute left-1/2 top-[144px] -ml-9 -translate-x-1/2 -translate-y-1/2 transform'>
					<ImageIcon
						src='/assets/GIFs/gif4.gif'
						imgClassName='scale-[60%]'
						alt='subheader-gif'
					/>
				</div>
				<p className={`${poppins.className} absolute left-1/2 top-[430px] -ml-9 w-[800px] -translate-x-1/2 -translate-y-1/2 transform text-center text-2xl text-black`}>
					TREATS is your go-to social tipping coin, designed to reward and encourage engagement across your favorite social platforms like Farcaster, Lens, and Twitter. Whether
					you’re appreciating a creative post, supporting a meaningful cause, or simply spreading some joy, TREATS makes tipping easy and fun.
				</p>
			</article>
		</section>
	);
};

export default HeroItems;
