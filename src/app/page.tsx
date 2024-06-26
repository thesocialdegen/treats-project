"use client";
import AppLayout from "@/components/AppLayout";
import { bangers } from "@/utils/fonts";
import SEOHead from "@/global/SEOHead";
export default function Home() {
  return (
    <>
      <SEOHead
				title='Treats | Home'
				desc={`Degen tipping coin for social good`}
			/>
      <AppLayout className={bangers.className}/>    
    </>
  );
}
