// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

interface IImageIconProps {
	src: string;
	imgClassName?: string;
	alt: string;
	imgWrapperClassName?: string;
	imgStyle?: React.CSSProperties;
}

const ImageIcon: FC<IImageIconProps> = (props) => {
	const { src, imgClassName, alt, imgWrapperClassName, imgStyle } = props;
	return (
		<div className={imgWrapperClassName}>
			<img
				style={imgStyle}
				src={src}
				className={imgClassName}
				alt={alt}
			/>
		</div>
	);
};

export default ImageIcon;
