// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React from 'react';

const HeroHeader = () => {
	return (
		<article className='flex w-[1420px] justify-center'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				height='795'
				viewBox='0 0 1440 795'
				fill='none'
				className='h-auto w-full'
			>
				<defs>
					<clipPath id='clip-path'>
						<path d='M2.5 30C2.5 14.8122 14.8122 2.5 30 2.5H1410C1425.19 2.5 1437.5 14.8122 1437.5 30V632.738C1437.5 646.909 1426.73 658.76 1412.62 660.112L32.6234 792.362C16.4731 793.91 2.5 781.212 2.5 764.988V30Z' />
					</clipPath>
				</defs>
				<image
					href='/assets/GIFs/gif1.gif'
					x='0'
					y='0'
					width='1440'
					height='795'
					clipPath='url(#clip-path)'
					preserveAspectRatio='none'
				/>
				<path
					d='M2.5 30C2.5 14.8122 14.8122 2.5 30 2.5H1410C1425.19 2.5 1437.5 14.8122 1437.5 30V632.738C1437.5 646.909 1426.73 658.76 1412.62 660.112L32.6234 792.362C16.4731 793.91 2.5 781.212 2.5 764.988V30Z'
					stroke='black'
					strokeWidth='5'
				/>
			</svg>
		</article>
	);
};

export default HeroHeader;
