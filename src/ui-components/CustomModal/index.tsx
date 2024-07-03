// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Modal } from 'antd';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalContent from './Content';
import ModalTitle from './Title';
import ModalFooter from './Footer';
import ImageIcon from '../ImageIcon';
import { getTitleWrapperClassName } from './utils';
import { modalActions } from '@/redux/modal';
import { useModalSelector } from '@/redux/selectors';

interface ICustomModalProps {}

const CustomModal: FC<ICustomModalProps> = () => {
	const dispatch = useDispatch();
	const { open, titleType, footerType, contentType } = useModalSelector();
	const onCancel = () => dispatch(modalActions.setOpen(false));
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
				<div className={getTitleWrapperClassName(titleType, footerType, contentType)}>
					<h3 className='m-0 text-xl font-semibold leading-6 tracking-[0.03px] text-white'>
						<ModalTitle type={titleType} />
					</h3>
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
			className='inset-0 mx-auto my-[100px] w-[80vw] min-w-fit rounded-[30px] border-4 border-solid border-black p-0 md:w-[520px]'
			closable={false}
			footer={<ModalFooter type={footerType} />}
		>
			<ModalContent type={contentType} />
		</Modal>
	);
};

export default CustomModal;
