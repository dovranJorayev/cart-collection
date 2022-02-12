import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material';
import { palette } from 'theme/palette';
import { shadows } from 'theme/shadows';

export const theme = responsiveFontSizes(
	createTheme({
		palette,
			shadows,
			typography: {
				fontFamily: '"Roboto", sans-serif',
				button: {
					textTransform: 'none',
					fontWeight: 'medium',
				}
			},
			zIndex: {
				appBar: 1200,
				drawer: 1300,
			},
			components: {
				MuiButton: {
					styleOverrides: {
						root: {
							fontWeight: 400,
							borderRadius: 5,
							paddingTop: 10,
							paddingBottom: 10,
						}
					}
				},
				MuiInputBase: {
					styleOverrides: {
						root: {
							borderRadius: 5,
						},
					},
				},
				MuiOutlinedInput: {
					styleOverrides: {
						root: {
							borderRadius: 5,
						},
						input: {
							borderRadius: 5,
						},
					},
				},
				MuiCard: {
					styleOverrides: {
						root: {
							borderRadius: 8,
						},
					},
				},
			}
		}
	)
);