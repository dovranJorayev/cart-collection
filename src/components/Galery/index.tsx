import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Galery(): JSX.Element {
  return (
    <Container sx={{ py: 8 }} maxWidth='xl'>
      {/* End hero unit */}
      <Grid container spacing={6}>
        {cards.map((card) => (
          <Grid item key={card} xs={4} sm={3} md={2}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component='img'
                sx={{
                }}
                image='https://source.unsplash.com/random'
                alt='thumbnail'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant='body2' component='h2'>
                  Heading
                </Typography>
                <Typography variant='caption'>
                  This is a media card. You can use this section to describe the
                  content.
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
                  color={'error'}>
                    Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Galery;
