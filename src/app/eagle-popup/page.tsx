'use client'; // ✅ must be FIRST

import React, { useState } from 'react';
import InvestorForm from '@/components/InvestorForm';
import AiToolsPage from '@/components/AiTool';
import AllPopupButtons from '@/components/AllPopupButtons';
// import AboutDemo from '@/components/AboutDemo';
import AboutGpt from '@/components/AboutGpt';
import AboutPage from '@/components/AboutPage';

export default function EaglePopUp() {

  return (
    <div>
        <InvestorForm></InvestorForm>
        <AiToolsPage></AiToolsPage>
        <AllPopupButtons></AllPopupButtons>
        <AboutPage></AboutPage>
        {/* <AboutGpt></AboutGpt> */}
        {/* <AboutDemo></AboutDemo> */}
    </div>
  );
}
