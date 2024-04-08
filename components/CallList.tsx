'use client';

import { Call, CallRecording } from '@stream-io/video-react-sdk';

import Loader from './Loader';
import { useGetCalls } from '@/hooks/useGetCalls';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
const CallList = ({type}:{type:'ended'|'upcoming' | 'recordings'}) => {

    const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  return (
    <div>CallList</div>
  )
}

export default CallList