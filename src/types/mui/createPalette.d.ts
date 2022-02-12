import * as createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
	interface TypeBackground {
		paper: string;
		default: string;
		level1: string;
		level2: string;
		footer: string;
	}

	interface PaletteOptions {
		cardShadow?: string;
		alternate: {
			main: string;
			dark: string;
		};
	}

	interface Palette {
		cardShadow?: string;
		alternate: {
			main: string;
			dark: string;
		};
	}
}
  