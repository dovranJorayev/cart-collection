import GalleryHero from 'components/GalleryHero';
import GaleryContent from 'components/Galery';
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
