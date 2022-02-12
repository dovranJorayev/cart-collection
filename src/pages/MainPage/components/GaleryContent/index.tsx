import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { GalleryActionType, useGalleryDispatcher, useGalleryState } from 'state/GalleryState';
import { Pagination } from '@mui/material';
import { UsePaginationProps } from '@mui/material/usePagination/usePagination';

function GaleryContent(): JSX.Element {
  const { pages, page } = useGalleryState();
  const dispatcher = useGalleryDispatcher();
  const changeHandler: UsePaginationProps['onChange'] = (e, page) => {
    dispatcher({
      type: GalleryActionType.NAVIGATE,
      payload: { page }
    });
  };

  return (
    <Container sx={{ py: 8 }} maxWidth='xl'>
      <Grid container spacing={6}>
        {
          pages[page - 1].map( card => (
            <Grid item key={card.id} xs={4} sm={3} md={2}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
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
                  >
                    View
                  </Button>
                  <Button
                    size='small'
                    color={'error'}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
      <Pagination count={pages.length} page={page} onChange={changeHandler} />
    </Container>
  );
}

export default GaleryContent;
