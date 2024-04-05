'use client';

import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const Meeting = ({params}:{params:{id:string}}) => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { id } = useParams();
  const { isLoaded, user } = useUser();
    const { call, isCallLoading } = useGetCallById(id);



    return (
      <main className="h-screen w-full">
        <StreamCall call={call}>
          <StreamTheme>
  
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
          </StreamTheme>
        </StreamCall>
      </main>
    );
  };

export default Meeting
