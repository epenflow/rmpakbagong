import { Fragment, Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { MainLayouts } from './lazy';
import { Global } from '@emotion/react';
import Fallback from '../../views/components/Fallback';
import injectGlobal from '../../constants/style/global-style';
const router = createHashRouter([
	{
		path: '/',
		element: <MainLayouts />,
	},
]);

const Navigaton = () => {
	return (
		<Fragment>
			<Global styles={injectGlobal} />
			<Suspense fallback={<Fallback text='please wait' />}>
				<RouterProvider router={router} />
			</Suspense>
		</Fragment>
	);
};
export default Navigaton;
