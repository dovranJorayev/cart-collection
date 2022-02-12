import GalleryHero from 'pages/MainPage/components/GalleryHero';
import GaleryContent from 'pages/MainPage/components/GaleryContent';
import GalleryStateProvider from 'providers/GalleryStateProvider';

function MainPage(): JSX.Element {
  return (
    <GalleryStateProvider>
      <GalleryHero/>
      <GaleryContent/>
    </GalleryStateProvider>
  );
}

export default MainPage;
