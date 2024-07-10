// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
'use client';
import { bangers } from '@/utils/fonts';
import ImageIcon from '@/ui-components/ImageIcon';
import { Menu, Button } from 'antd';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ENavbarOption } from '@/types/enums';

interface INavbar {
	className?: string;
}

const Navbar: FC<INavbar> = (props) => {
	const { className } = props;
	const router = useRouter();
	const pathname = usePathname();
	const [current, setCurrent] = useState('');

	useEffect(() => {
		if (window) {
			if (pathname.includes(ENavbarOption.AIRDROP)) {
				setCurrent(ENavbarOption.AIRDROP);
			} else if (pathname.includes(ENavbarOption.CAMPAIGNS)) {
				setCurrent(ENavbarOption.CAMPAIGNS);
			} else if (pathname.includes(ENavbarOption.TOKENOMICS)) {
				setCurrent(ENavbarOption.TOKENOMICS);
			} else {
				setCurrent('/');
			}
		}
	}, [pathname]);

	const handleClick = (e: any) => {
		setCurrent(e.key);
	};

	return (
		<div className={`${bangers.className}`}>
			<div className={`${className} flex items-center`}>
				<div
					className='mr-auto flex cursor-pointer items-center gap-x-2'
					onClick={() => {
						router.push('/');
					}}
				>
					<ImageIcon
						src='/assets/logos/treats-logo.svg'
						alt='treats-logg'
					/>
					<span className='text-[40px] font-bold text-orange_primary'>TREATS</span>
				</div>
				<Menu
					className='flex w-[600px] justify-center bg-transparent'
					onClick={handleClick}
					selectedKeys={[current]}
					mode='horizontal'
					style={{ borderBottom: 'none' }}
				>
					<Menu.Item
						key='airdrop'
						className={`${bangers.className} ${current === ENavbarOption.AIRDROP ? 'text-light_orange_primary' : 'text-orange_secondary'} text-3xl font-normal`}
					>
						<Link href='/airdrop'>AIRDROP</Link>
					</Menu.Item>
					<Menu.Item
						key='campaigns'
						className={`${bangers.className} ${current === ENavbarOption.CAMPAIGNS ? 'text-light_orange_primary' : 'text-orange_secondary'} text-3xl font-normal`}
					>
						<Link href='/campaigns'>CAMPAIGNS</Link>
					</Menu.Item>
					<Menu.Item
						key='tokenomics'
						className={`${bangers.className} ${current === ENavbarOption.TOKENOMICS ? 'text-light_orange_primary' : 'text-orange_secondary'} text-3xl font-normal`}
					>
						<Link href='/tokenomics'>TOKENOMICS</Link>
					</Menu.Item>
				</Menu>
				<div className='ml-auto flex items-center gap-x-3'>
					<Button
						className={`${bangers.className} flex h-9 w-[141px] items-center justify-center rounded-3xl bg-orange_primary text-2xl text-white hover:border-solid hover:border-orange_primary hover:bg-white hover:text-orange_primary`}
					>
						BUY{' '}
						<ImageIcon
							src='/assets/icons/mini-dollar-icon.svg'
							alt='dollar-icon'
							imgClassName='mt-2.5 -mr-3 -ml-1'
						/>
						TREATS
					</Button>
					<Button
						className={`${bangers.className} flex h-9 w-[79px] items-center justify-center rounded-3xl bg-orange_primary text-2xl text-white hover:border-solid hover:border-orange_primary hover:bg-white hover:text-orange_primary`}
					>
						SWAP
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
