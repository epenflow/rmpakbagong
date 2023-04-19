import useLazy from '../hooks/useLazy';

const MainLayouts = useLazy(
	import('../../views/pages/layouts/MainLayouts'),
	'MainLayouts'
);
export { MainLayouts };
