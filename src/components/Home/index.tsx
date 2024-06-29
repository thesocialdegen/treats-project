import ImageIcon from '@/ui-components/ImageIcon';
import React from 'react';
import HeroHeader from './HeroSection/HeroHeader';
import HeroItems from './HeroSection/HeroItems';
import StepsMenu from './HeroSection/StepsMenu';
import HeroFooterFrame from './HeroSection/HeroFooterFrame';
import { poppins } from '@/utils/fonts';


const HomePage = () => {
  return (
    <section className="flex flex-col justify-center items-center px-2 mx-auto w-full overflow-x-hidden">
      <HeroHeader />
      <HeroItems />
      <StepsMenu />
      <article className='-mt-[130px] ml-[60px] relative w-full h-auto flex justify-center'>
        <div>
            <ImageIcon src='/assets/Frames/frame6.svg' alt='' imgClassName='relative  w-[1484px]'/>
            <div className='-mt-[670px] relative'>
                <ImageIcon src='/assets/GIFs/popup.gif' alt='' imgClassName='absolute scale-[40%] -top-[230px] left-[200px]'/>
                <h1 className='absolute w-[259px] text-center text-6xl scale-[40%] top-[250px] left-[600px] z-1000 popup-container'>Why TREATS?</h1>
                <div className='absolute top-[116px] left-[72px]'>
                    <h1 className='text-4xl text-black tracking-wider'>Inclusive and Fun</h1>
                    <p className={`${poppins.className} w-[507px] mt-4 text-2xl text-black`}>From quirky pop art merchandise to unique campaigns like the “Pass it Forward” project, TREATS brings a playful and inclusive approach to tipping.</p>
                    </div>
                    <div className='absolute top-[390px] left-[72px]'>
                    <h1 className='text-4xl text-black tracking-wider'>Community-Centric </h1>
                    <p className={`${poppins.className} w-[528px] mt-4 text-2xl text-black`}>60% of TREATS are dedicated to the community through airdrops, giveaways, and engagement rewards.</p>
                    </div>
                    <div className='absolute top-[190px] left-[972px]'>
                    <h1 className='text-4xl text-black tracking-wider'>Social Good: </h1>
                    <p className={`${poppins.className} w-[361px] mt-4 text-2xl text-black`}>Our future initiatives include social good games and networking campaigns like “Buy a Dev a Coffee” to support the hardworking creators and developers in our community.</p>
                </div>
            </div>
        </div>
      </article>
      <HeroFooterFrame />
    </section>
  );
};

export default HomePage;
