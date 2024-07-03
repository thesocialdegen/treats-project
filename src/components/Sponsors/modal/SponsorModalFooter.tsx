// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { bangers } from '@/utils/fonts';
import { Button } from 'antd';
import React from 'react';

const SponsorModalFooter = () => {
	console.log('i am footer');
	return (
		<article>
			<Button className={`${bangers.className} flex h-[37px] w-full justify-center rounded-[72px] border-2 border-solid border-black bg-yellow_primary text-xl`}>Tip</Button>
		</article>
	);
};

export default SponsorModalFooter;
