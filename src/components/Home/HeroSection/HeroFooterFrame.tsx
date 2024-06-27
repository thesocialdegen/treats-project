import ImageIcon from '@/ui-components/ImageIcon'
import { Button } from 'antd'
import React from 'react'

const HeroFooterFrame = () => {
  return (
    <article className='mt-[535px] flex justify-center w-full'>
      <div className='relative'>
          <svg xmlns="http://www.w3.org/2000/svg" height="671" viewBox="0 0 1439 671" fill="none" className="w-full h-auto">
              <defs>
                  <clipPath id="clip-path-clouds">
                  <path d="M2.5 187.9C2.5 175.073 11.3665 163.951 23.8698 161.091L705.467 5.2309C716.141 2.78996 727.17 2.30649 738.017 3.80401L1413.76 97.0948C1427.37 98.9732 1437.5 110.602 1437.5 124.336V641C1437.5 656.188 1425.19 668.5 1410 668.5H30C14.8121 668.5 2.5 656.188 2.5 641V187.9Z" stroke="black" stroke-width="5"/>
                  </clipPath>
              </defs>
              <image href="/assets/GIFs/clouds.gif" x="0" y="0" width="1440" height="795" clipPath="url(#clip-path-clouds)" preserveAspectRatio="none" />
              <path d="M2.5 187.9C2.5 175.073 11.3665 163.951 23.8698 161.091L705.467 5.2309C716.141 2.78996 727.17 2.30649 738.017 3.80401L1413.76 97.0948C1427.37 98.9732 1437.5 110.602 1437.5 124.336V641C1437.5 656.188 1425.19 668.5 1410 668.5H30C14.8121 668.5 2.5 656.188 2.5 641V187.9Z" stroke="black" stroke-width="5"/>
          </svg>
          <ImageIcon src='/assets/Frames/msg-frame.svg' alt='msg-frame' imgClassName='top-[135px] ml-[256px] absolute'/>
          {/* <div className='relative -top-[200px]'>
              <div className='flex'>
                  <Button className='h-[36px] w-[36px] p-0 m-0 rounded-sm bg-sky_blue_primary flex justify-center items-center'>
                      <ImageIcon src='/assets/icons/twitter-icon.svg' alt='twitter-icon' />
                  </Button>
              </div>
          </div> */}
      </div>
      </article>
  )
}

export default HeroFooterFrame