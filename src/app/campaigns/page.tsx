'use client'

import CampaignsPage from '@/components/Campaigns'
import SEOHead from '@/global/SEOHead'
import React from 'react'

const page = () => {
  return (
    <>
        <SEOHead
            title={'welcome to campigns page'}
            desc={'welcome to campigns page'}
            // img={house?.logo}
        />
        <section className={`w-full h-full`}>
            <CampaignsPage />
        </section>
    </>
  )
}

export default page