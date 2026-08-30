'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

export default function ClarityAnalytics() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    if (!projectId) {
      console.warn('Microsoft Clarity Project ID is missing');
      return;
    }

    Clarity.init(projectId);
  }, []);

  return null;
}
