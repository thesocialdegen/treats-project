// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { campaignDetails, campaignDetailsFieldValueChanged } from '@/redux/campaigns/actions';
import { useCampaignsSelector } from '@/redux/selectors';
import { useAppDispatch } from '@/redux/store';
// import PosterImgUpload from '@/ui-components/PosterImgUpload';
// import ImageIcon from '@/ui-components/ImageIcon';
// import PosterImgUpload from '@/ui-components/PosterImgUpload';
import { bangers } from '@/utils/fonts';
import { Button, Form, Input } from 'antd';
import React from 'react';

const CampaignCreationModalContent = () => {
	const dispatch = useAppDispatch();
	const { campaign_details } = useCampaignsSelector();
	const onSubmit = async (values: any) => {
		dispatch(campaignDetails({ values }));
	};

	return (
		<Form onFinish={onSubmit}>
			<section className={`${bangers.className} -mt-[60px] flex h-[715px] w-[613px] flex-col gap-y-4`}>
				<h1 className='text-[40px] tracking-wider'>Enter Details </h1>
				<article className='flex flex-col gap-y-1'>
					<p className='text-xl'>campaign name</p>
					<Form.Item
						name='name'
						className='m-0'
						rules={[
							{
								max: 32,
								message: 'Campaign Name can be at-max 32 characters long.'
							}
						]}
					>
						<Input
							type='text'
							className='h-10 rounded-[25px] border border-solid border-black bg-transparent text-sm font-normal leading-[21px] tracking-[0.035px] text-black placeholder:text-black'
							placeholder='Enter here'
							value={campaign_details?.name}
							onChange={(e) => {
								dispatch(
									campaignDetailsFieldValueChanged({
										values: {
											name: e.target.value
										}
									})
								);
							}}
						/>
					</Form.Item>
				</article>
				<article className='flex flex-col gap-y-1'>
					<p className='text-xl'>Category</p>
					<Form.Item
						name='category'
						className='m-0'
						rules={[
							{
								max: 32,
								message: 'Category can be at-max 32 characters long.'
							}
						]}
					>
						<Input
							type='text'
							className='h-10 rounded-[25px] border border-solid border-black bg-transparent text-sm font-normal leading-[21px] tracking-[0.035px] text-black placeholder:text-black'
							placeholder='Enter here'
							value={campaign_details?.category}
							onChange={(e) => {
								dispatch(
									campaignDetailsFieldValueChanged({
										values: {
											category: e.target.value
										}
									})
								);
							}}
						/>
					</Form.Item>
				</article>
				<article className='flex flex-col gap-y-1'>
					<p className='text-xl'>Ask Amount</p>
					<Form.Item
						name='askAmount'
						className='m-0'
						// rules={[
						// {
						// max: 32,
						// message: 'Campaign Name can be at-max 32 characters long.'
						// }
						// ]}
					>
						<Input
							type='text'
							className='h-10 rounded-[25px] border border-solid border-black bg-transparent text-sm font-normal leading-[21px] tracking-[0.035px] text-black placeholder:text-black'
							placeholder='Enter here'
							value={campaign_details?.askAmount}
							onChange={(e) => {
								dispatch(
									campaignDetailsFieldValueChanged({
										values: {
											askAmount: e.target.value
										}
									})
								);
							}}
						/>
					</Form.Item>
				</article>
				<article className='flex flex-col gap-y-1'>
					<p className='text-xl'>Description</p>
					<Form.Item
						name='description'
						className='m-0'
						rules={[
							{
								max: 500,
								message: 'Description Name can be at-max 500 characters long.'
							}
						]}
					>
						<Input
							type='text'
							className='h-10 rounded-[25px] border border-solid border-black bg-transparent text-sm font-normal leading-[21px] tracking-[0.035px] text-black placeholder:text-black'
							placeholder='Enter here'
							value={campaign_details?.description}
							onChange={(e) => {
								dispatch(
									campaignDetailsFieldValueChanged({
										values: {
											description: e.target.value
										}
									})
								);
							}}
						/>
					</Form.Item>
				</article>
				<article className='flex flex-col gap-y-1'>
					<p className='text-xl'>X account of creator should be connected </p>
					<Form.Item
						name='xAccount'
						className='m-0'
					>
						<Input
							type='text'
							className='h-10 rounded-[25px] border border-solid border-black bg-transparent text-sm font-normal leading-[21px] tracking-[0.035px] text-black placeholder:text-black'
							placeholder='Enter here'
							value={campaign_details?.xAccount}
							onChange={(e) => {
								dispatch(
									campaignDetailsFieldValueChanged({
										values: {
											xAccount: e.target.value
										}
									})
								);
							}}
						/>
					</Form.Item>
				</article>
				{/* <article className='flex flex-col gap-y-4'>
					<p className='text-xl'>campaign poster (Optional)</p>
					<div className='cover-img flex items-center gap-x-5'>
						<PosterImgUpload
							name='coverImg'
							rules={[
								{
									message: 'Cover image is required.',
									required: true
								}
							]}
							formItemClassName='m-0'
							imageUrl={campaign_details?.poster || ''}
							setImageUrl={(v: string) => {
								dispatch(
									campaignDetailsFieldValueChanged({
										values: {
											poster: v
										}
									})
								);
							}}
							imgClassName='w-[135px] h-[50px]'
							imgWrapperClassName='w-[135px] h-[55px] flex items-center justify-center overflow-hidden'
						/>
					</div>
				</article> */}
				<article>
					<Button
						className={`${bangers.className} flex h-[37px] w-full items-center justify-center rounded-[72px] border-[2px] border-solid border-black bg-yellow_primary text-xl hover:text-black`}
						htmlType='submit'
					>
						Create
					</Button>
				</article>
			</section>
		</Form>
	);
};

export default CampaignCreationModalContent;
