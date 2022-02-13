import React from 'react';
import GalleryHero from 'pages/MainPage/components/GalleryHero';
import GalleryContent from 'pages/MainPage/components/GalleryContent';
import GalleryStateProvider from 'providers/GalleryStateProvider';

function MainPage(): JSX.Element {
  return (
    <GalleryStateProvider>
      <GalleryHero/>
      <GalleryContent/>
    </GalleryStateProvider>
  );
}

export default MainPage;
