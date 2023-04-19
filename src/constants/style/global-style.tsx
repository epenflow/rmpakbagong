import { css } from '@emotion/react';

const injectGlobal = css`
	* {
		font-family: Arial, Helvetica, sans-serif;
		padding: 0;
		margin: 0;
	}
	button {
		all: unset;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: blu;
		cursor: pointer;
	}
`;

export default injectGlobal;
