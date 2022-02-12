import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import useTheme from '@mui/material/styles/useTheme';

function Header(): JSX.Element {
  const theme = useTheme();
  return (
    <>
      <CssBaseline />
      <AppBar position='fixed'>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'end'
          }}
        >
          <Typography variant='h6' color='inherit' noWrap>
            Cart Collection
          </Typography>
          <PhotoSizeSelectActualIcon
            sx={{
              marginLeft: theme.spacing(1)
            }}
          />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
