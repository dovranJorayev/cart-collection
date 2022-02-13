import React from 'react';
import Modal, {ModalProps} from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import {Skeleton} from "@mui/material";
import {useGalleryState} from 'hooks/useGalleryState';

interface CardModalProps {
  id: number;
  open: boolean;
  onClose: ModalProps['onClose'];
}
function CardModal({ open, onClose, id }: CardModalProps): JSX.Element {
  const [loaded, setLoaded] = React.useState(false);
  const { list } = useGalleryState();

  const imageSrc = React.useMemo(() => {
    const found = list.find(i => i.id === Number(id));
    if(found !== undefined) {
      return found.url
    }
    return undefined;
  }, [list, id]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Fade in={open}>
        <Box sx={{
          boxShadow: '0 0 5px gray',
          width: '500px',
          height: '500px',
          position: 'relative'
        }}>
          <CardMedia
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            component='img'
            image={imageSrc}
            alt='thumbnail'
            onLoad={() => {
              setLoaded(true);
            }}
          />
          <Skeleton
            sx={{
              width: '500px',
              height: '500px',
              display: loaded ? 'none' : undefined
            }}
            animation={'wave'}
          />
        </Box>
      </Fade>
    </Modal>
  )
}

export default CardModal;
