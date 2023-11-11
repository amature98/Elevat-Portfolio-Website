import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@mui/material';
import {
	ThemeProvider,
	createTheme,
	StyledEngineProvider
} from '@mui/material/styles';
import palette from './Palette.theme';
import typography from './Typography.theme';

function Themeconfig({ children }) {
	const themeOptions = useMemo(
		() => ({
			palette,
			typography
		}),
		[]
	);
	const theme = createTheme(themeOptions);
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

Themeconfig.propTypes = {
	children: PropTypes.node
};

export default Themeconfig;
