import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {GalleryActionType} from 'state/GalleryState';
import {Pagination} from '@mui/material';
import {UsePaginationProps} from '@mui/material/usePagination/usePagination';
import {useFetchGalleryOnMount} from './hooks/useFetchGalleryOnMount';
import CardModal from '../CardModal';
import CircularProgress from "@mui/material/CircularProgress";
import Box from '@mui/material/Box';
import {useGalleryState} from 'hooks/useGalleryState';
import {useGalleryDispatcher} from 'hooks/useGalleryDispatcher';

function GalleryContent(): JSX.Element {
  const { pages, page, loading } = useGalleryState();
  const dispatcher = useGalleryDispatcher();
  const [modalID, setModalID] = React.useState(0);

  const changeHandler: UsePaginationProps['onChange'] = (e, page) => {
    dispatcher({
      type: GalleryActionType.NAVIGATE,
      payload: { page }
    });
  };

  useFetchGalleryOnMount();

  if(loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          minHeight: '750px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
      <CircularProgress />
    </Box>
    );
  }

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth='xl'>
        <Grid container spacing={3}>
          {
            pages[page - 1]?.map( card => (
              <Grid item key={card.id} xs={4} sm={3} md={2}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <CardMedia
                    sx={{
                      width: '155px',
                      height: '155px',
                      margin: '15px'
                    }}
                    component='img'
                    image={card.thumbnailUrl}
                    alt='thumbnail'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant='caption'>
                    { card.title }
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Button
                      size='small'
                      onClick={() => {
                        setModalID(card.id);
                      }}
                    >
                      View
                    </Button>
                    <Button
                      size='small'
                      color={'error'}
                      onClick={e => {
                        dispatcher({
                          type: GalleryActionType.DELETE,
                          payload: {
                            list: [card]
                          }
                        })
                      }}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
        <Pagination
          count={pages.length}
          page={page}
          onChange={changeHandler}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px'
          }}
        />
      </Container>

      <CardModal
        id={modalID}
        open={modalID !== 0}
        onClose={() => {
          setModalID(0);
        }}
      />
    </>
  );
}

export default GalleryContent;
