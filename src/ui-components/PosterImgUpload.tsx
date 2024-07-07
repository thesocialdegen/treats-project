// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Form, message, Progress, Upload } from 'antd';
import React, { FC, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { Rule } from 'antd/es/form';
import classNames from 'classnames';
import ImageIcon from './ImageIcon';
import { IMG_BB_API_KEY } from '@/global/apiKeys';

const beforeUpload = (file: RcFile) => {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
	if (!isJpgOrPng) {
		message.error('You can only upload JPG/PNG file!');
	}
	const isLt2M = file.size / 1024 / 1024 < 4;
	if (isJpgOrPng && !isLt2M) {
		message.error('Image must smaller than 2MB!');
	}
	return isJpgOrPng && isLt2M;
};

interface IPosterImgUpload {
	imageUrl: string;
	setImageUrl: (url: string) => void;
	name?: string;
	rules?: Rule[];
	formItemClassName?: string;
	imgClassName?: string;
	imgWrapperClassName?: string;
	disabled?: boolean;
	logoName?: string;
}

const PosterImgUpload: FC<IPosterImgUpload> = (props) => {
	const { imageUrl, setImageUrl, name, logoName, rules, formItemClassName, imgClassName, imgWrapperClassName, disabled } = props;
	const [progress, setProgress] = useState(0);
	const [loading, setLoading] = useState(false);

	const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
		if (info.file.status === 'uploading') {
			setProgress(0);
			setImageUrl('');
			setLoading(true);
		}
		if (info.file.status === 'done' && info.file.originFileObj) {
			setProgress(0);
			setImageUrl('');
			const xhr = new XMLHttpRequest();
			xhr.withCredentials = false;
			xhr.open('POST', 'https://api.imgbb.com/1/upload?key=' + IMG_BB_API_KEY);

			xhr.upload.onprogress = (e) => {
				if (loading) {
					setLoading(false);
				}
				setProgress(Number(((e.loaded / e.total) * 100).toFixed(1)));
			};

			xhr.onload = () => {
				setLoading(false);
				if (xhr.status === 403) {
					message.error('HTTP Error: ' + xhr.status);
					return;
				}

				if (xhr.status < 200 || xhr.status >= 300) {
					message.error('HTTP Error: ' + xhr.status);
					return;
				}

				const json = JSON.parse(xhr.responseText);

				if (!json || typeof json?.data?.display_url != 'string') {
					message.error('HTTP Error: ' + xhr.responseText);
					return;
				}
				setImageUrl(json?.data?.display_url);
			};
			xhr.onerror = () => {
				message.error('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
				setLoading(false);
			};
			const formData = new FormData();
			formData.append('image', info.file.originFileObj, `${info.file.name}`);
			xhr.send(formData);
		}
	};
	const uploadButton = (
		<article
			className={classNames('w-full', {
				'flex h-10 w-10 items-center justify-center rounded-full border-black bg-transparent md:h-[80px] md:w-[80px]': logoName
			})}
		>
			{progress ? (
				<div className='upload-btn-loader flex flex-col items-center justify-center'>
					<p className='text-white '>
						<span className='hidden md:block'> Loading</span> {progress}%
					</p>
					<Progress
						className='hidden w-[75%]  text-white md:block'
						percent={progress}
						status='active'
						showInfo={false}
					/>
				</div>
			) : loading ? (
				<p className='text-blue_primary flex items-center justify-center text-2xl'>
					<LoadingOutlined />
				</p>
			) : (
				<p className={classNames('flex flex-col items-center justify-center text-2xl capitalize text-white')}>
					{logoName ? (
						logoName?.charAt(0)
					) : (
						<div className='flex items-center justify-center gap-x-2'>
							<ImageIcon
								src='/assets/icons/outlined-plus.svg/'
								alt='upload-icon'
							/>
							<div className='flex flex-col items-start justify-start gap-y-0'>
								<h1 className='m-0 p-0 text-sm text-black'>Click to upload or Drag and Drop media</h1>
								<p className='m-0 mt-1 p-0 text-xs text-black'>Max. Size: 50MB</p>
								<p className='m-0 p-0 text-xs text-black'>Supports: PNG, JPG, JPEG, WEBP</p>
							</div>
						</div>
					)}
				</p>
			)}
		</article>
	);
	// eslint-disable-next-line @next/next/no-img-element
	const img = (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			src={imageUrl}
			className={imgClassName}
			alt='avatar'
			style={{ width: '100%' }}
		/>
	);
	return (
		<Form.Item
			name={name}
			valuePropName='fileList'
			getValueFromEvent={(e) => {
				let images = e;
				if (!Array.isArray(e)) {
					images = e?.fileList;
				}
				const image = images[images.length - 1];
				const isValid = beforeUpload(image);
				if (isValid) {
					return [image];
				}
				setLoading(false);
				setProgress(0);
				setImageUrl('');
				return [];
			}}
			rules={rules}
			className={formItemClassName}
		>
			<div className='w-full rounded-[12px] border-[1px] border-solid border-black'>
				<Upload
					listType='picture-card'
					showUploadList={false}
					beforeUpload={(file: RcFile) => {
						const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
						const isLt4M = file.size / 1024 / 1024 < 4;
						return isJpgOrPng && isLt4M;
					}}
					onChange={handleChange}
					disabled={disabled}
					multiple={false}
					className='flex'
				>
					{imageUrl ? <div className={classNames('p-1', imgWrapperClassName)}>{img}</div> : uploadButton}
				</Upload>
			</div>
		</Form.Item>
	);
};

export default PosterImgUpload;
