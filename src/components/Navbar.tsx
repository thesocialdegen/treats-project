"use client"
import { bangers } from '@/utils/fonts';
import ImageIcon from '@/ui-components/ImageIcon';
import { Menu, Button } from 'antd';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ENavbarOption } from '@/types/enums';

interface INavbar {
  className?: string;
}

const Navbar: FC<INavbar> = (props) => {
  const { className } = props;
  const router  = useRouter();
  console.log('router --> ', router, window.location.pathname, ENavbarOption.CAMPAIGNS);
  const [current, setCurrent] = useState('');

  // useEffect(() => {
  //   if (window.location.pathname === `/${ENavbarOption.AIRDROP}`) {
  //       setCurrent(ENavbarOption.AIRDROP);
  //    } else if (window.location.pathname === `/${ENavbarOption.CAMPAIGNS}`) {
  //       console.log('hello');
  //       setCurrent(ENavbarOption.CAMPAIGNS);
  //    } else if (window.location.pathname === `/${ENavbarOption.TOKENOMICS}`) {
  //       setCurrent(ENavbarOption.TOKENOMICS);
  //    } else {
  //       setCurrent('');
  //    }
  // }, [window.location.pathname]);

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <div className={`${bangers.className}`}>
      <div className={`${className} flex items-center`}>
        <div className='mr-auto flex items-center gap-x-2 cursor-pointer' onClick={() => {router.push('/')}}>
          <ImageIcon src='/assets/logos/treats-logo.svg' alt='treats-logg' />
          <span className='text-2xl text-orange_primary font-bold'>TREATS</span>
        </div>
        <Menu className='w-[600px] bg-transparent flex justify-center' onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{ borderBottom: 'none' }}>
          <Menu.Item key="airdrop" className={`${bangers.className} ${current === ENavbarOption.AIRDROP ? 'text-light_orange_primary' : 'text-orange_secondary'} text-3xl font-normal`}>
            <Link href="/airdrop">AIRDROP</Link>
          </Menu.Item>
          <Menu.Item key="campaigns" className={`${bangers.className} ${current === ENavbarOption.CAMPAIGNS ? 'text-light_orange_primary' : 'text-orange_secondary'} text-3xl font-normal`}>
            <Link href="/campaigns">CAMPAIGNS</Link>
          </Menu.Item>
          <Menu.Item key="tokenomics" className={`${bangers.className} ${current === ENavbarOption.TOKENOMICS ? 'text-light_orange_primary' : 'text-orange_secondary'} text-3xl font-normal`}>
            <Link href="/tokenomics">TOKENOMICS</Link>
          </Menu.Item>
        </Menu>
        <div className='ml-auto flex items-center gap-x-3'>
          <Button className={`${bangers.className} h-9 w-[141px] flex justify-center items-center bg-orange_primary rounded-3xl text-2xl text-white hover:bg-white hover:border-solid hover:border-orange_primary hover:text-orange_primary`}>BUY $TREATS</Button>
          <Button className={`${bangers.className} h-9 w-[79px] flex justify-center items-center bg-orange_primary rounded-3xl text-2xl text-white hover:bg-white hover:border-solid hover:border-orange_primary hover:text-orange_primary`}>SWAP</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
