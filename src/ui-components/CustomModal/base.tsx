// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Modal } from 'antd';
import React, { FC, useState } from 'react';
import ImageIcon from '../ImageIcon';

interface ICustomModalBaseCompProps {
	open: boolean;
	onCancel: () => void;
	title: React.ReactNode;
	footer: React.ReactNode;
	content: React.ReactNode;
}

const CustomModalBaseComp: FC<ICustomModalBaseCompProps> = (props) => {
	const { open, onCancel, title, footer, content } = props;
	const [currentSrc, setCurrentSrc] = useState('/assets/icons/cancel-square.svg');

	const handleMouseEnter = () => {
		setCurrentSrc('/assets/icons/cancel-square-white.svg');
	};

	const handleMouseLeave = () => {
		setCurrentSrc('/assets/icons/cancel-square.svg');
	};

	return (
		<Modal
			open={open}
			onCancel={onCancel}
			title={
				<div className='bg-app_dark_background border-dark_grey_primary flex items-center justify-between gap-x-2 rounded-t-xl border-0 border-b border-solid p-6'>
					<h3 className='m-0 text-xl font-semibold leading-6 tracking-[0.03px] text-white'>{title}</h3>
					<button
						onClick={onCancel}
						className='flex h-[10px] w-[10px] cursor-pointer items-center justify-center border-none bg-transparent text-[#66A5FF] outline-none'
						onMouseLeave={handleMouseLeave}
						onMouseEnter={handleMouseEnter}
					>
						<ImageIcon
							src={currentSrc}
							alt={'cancel-icon'}
							imgClassName='hover:cancel-svg-hover w-[24px] h-[24px]'
						/>
					</button>
				</div>
			}
			className='inset-0 mx-auto my-[100px] w-[80vw] min-w-fit rounded-[30px] p-0 md:w-[520px]'
			closable={false}
			footer={footer}
		>
			{open ? content : null}
		</Modal>
	);
};

export default CustomModalBaseComp;
