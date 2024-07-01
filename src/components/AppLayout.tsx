// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React, { FC } from 'react';
import HomePage from './Home';

interface IAppLayout {
	className: string;
}

const AppLayout: FC<IAppLayout> = () => {
	return (
		<>
			<section className='flex flex-col gap-y-4 overflow-y-hidden'>
				<HomePage />
			</section>
		</>
	);
};

export default AppLayout;
