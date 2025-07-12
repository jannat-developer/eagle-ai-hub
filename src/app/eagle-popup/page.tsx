'use client'; // ✅ must be FIRST

import React, { useState } from 'react';
import InvestorForm from '@/components/InvestorForm';
import AiToolsPage from '@/components/AiTool';
import AllPopupButtons from '@/components/AllPopupButtons';
import AboutPage from '@/components/AboutPage';
import InfluencerProfile from '@/components/InfluencerProfile';
import AffiliantLink from '@/components/AffiliantLink';
import TopGiveaways from '@/components/TopGiveaways';
import Demo from '@/components/Demo';

export default function EaglePopUp() {

  return (
    <div>
        <InvestorForm></InvestorForm>
        <AiToolsPage></AiToolsPage>
        <AllPopupButtons></AllPopupButtons>
        <AboutPage></AboutPage>
        <InfluencerProfile></InfluencerProfile>
        <AffiliantLink></AffiliantLink>
        <TopGiveaways></TopGiveaways>
        {/* <Demo></Demo> */}
    </div>
  );
}
