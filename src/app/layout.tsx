// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import './globals.css';
import { bangers } from '../utils/fonts';
import Navbar from '@/components/Navbar';
import { Providers } from '@/redux/provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body className={bangers.className}>
				<Providers>
					<Navbar className={'px-6 py-4'} />
					{children}
				</Providers>
			</body>
		</html>
	);
}
