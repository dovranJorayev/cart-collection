import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {GalleryActionType} from 'state/GalleryState';
import {FormControl, SelectProps} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {useGalleryDispatcher} from 'hooks/useGalleryDispatcher';
import {useGalleryState} from 'hooks/useGalleryState';

function GalleryHero(): JSX.Element {
  const { filterOptions, filterValue, size } = useGalleryState();
  const dispatch = useGalleryDispatcher();

  const filterChangeHandler: SelectProps<number>['onChange'] = (e) => {
    const value = e.target.value;
    if(value === 0) {
      dispatch({
        type: GalleryActionType.SET_FILTER,
        payload: {
          filterValue: null
        }
      });
    } else {
      dispatch({
        type: GalleryActionType.SET_FILTER,
        payload: {
          filterValue: Number(value)
        }
      });
    }
  };

  const sizeOptions = React.useMemo(() => {
    return [10, 20, 30, 40, 50].map(i => ({ value: i, label: `${i} items`}));
  }, []);

  const sizeChangeHandler: SelectProps<number>['onChange'] = (e) => {
    const value = e.target.value;
    dispatch({
      type: GalleryActionType.RESIZE,
      payload: {
        size: Number(value)
      }
    });
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='text.primary'
          gutterBottom
        >
          The Galery
        </Typography>
        <Typography variant='h5' align='left' color='text.secondary' paragraph>
          Card collection galery. You could define items size to display of filter card by id. Each item could be deleted or viewed in modal.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction='row'
          spacing={2}
          justifyContent='center'
        >
          <FormControl
            sx={{
              '& .MuiInputLabel-root': {
                top: '-10px'
              },
              '& .MuiSelect-select': {
                border: theme => `1px solid ${theme.palette.primary.light}`
              }
            }}
          >
            <InputLabel id='filter-select-label'>Filter by albumId</InputLabel>
            <Select
              labelId='filter-select-label'
              id='filter-select'
              value={filterValue ? filterValue : 0}
              label='album id'
              onChange={filterChangeHandler}
            >
              {
                filterOptions.map(option => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                  >
                    { option.label }
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>

          <FormControl
            sx={{
              '& .MuiInputLabel-root': {
                top: '-10px'
              },
              '& .MuiSelect-select': {
                border: theme => `1px solid ${theme.palette.primary.light}`
              },
              minWidth: '25px'
            }}
          >
            <InputLabel id='filter-select-label'>Size to display</InputLabel>
            <Select
              labelId='filter-select-label'
              id='filter-select'
              value={size}
              label='Size'
              onChange={sizeChangeHandler}
            >
              {
                sizeOptions.map(option => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                  >
                    { option.label }
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Stack>
      </Container>
    </Box>

  );
}

export default GalleryHero;
