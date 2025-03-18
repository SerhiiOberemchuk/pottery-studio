import TitleBig from '@/components/common/TitleBig';
import GoogleSheets from '@/components/HomePageSections/GoogleSheets';
import React from 'react';

function HomePage() {
  return (
    <>
      <TitleBig titleText="Ghjbfbbff" />

      <div className="h-11 w-full bg-amber-400">
        <GoogleSheets />
      </div>
    </>
  );
}

export default HomePage;
