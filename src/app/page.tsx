// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
'use client';
import AppLayout from '@/components/AppLayout';
import { bangers } from '@/utils/fonts';
import SEOHead from '@/global/SEOHead';
export default function Home() {
	return (
		<>
			<SEOHead
				title='Treats | Home'
				desc={'Degen tipping coin for social good'}
			/>
			<AppLayout className={bangers.className} />
		</>
	);
}
