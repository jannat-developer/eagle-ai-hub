'use client'; // ✅ must be FIRST

import React, { useState } from 'react';
import InvestorForm from '@/components/InvestorForm';
import AiToolsPage from '@/components/AiTool';

export default function EaglePopUp() {

  return (
    <div>
        <InvestorForm></InvestorForm>
        <AiToolsPage></AiToolsPage>
    </div>
  );
}
