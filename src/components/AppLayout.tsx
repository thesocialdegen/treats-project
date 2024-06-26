import React, { FC } from 'react'
import Navbar from './Navbar'
import HomePage from './Home';

interface IAppLayout {
    className: string;
}

const AppLayout: FC<IAppLayout> = (props) => {
    const { className } = props;
    return (
        <>
            <section className="flex flex-col gap-y-4 overflow-y-hidden">
                <HomePage />
            </section>
        </>
    )
}

export default AppLayout