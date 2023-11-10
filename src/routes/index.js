import FullPageLayout from '~/components/Layout/FullPageLayout';

import Home from '~/pages/Home';
import Project from '~/pages/Project';
import Blog from '~/pages/Blog';

// Public Route
export const publicRoutes = [
	{
		path: '/',
		component: Home,
		layout: FullPageLayout,
	},
	{
		path: '/project',
		component: Project,
	},
	{
		path: '/blog',
		component: Blog,
		layout: null,
	},
];

// Private Route
export const privateRoutes = [];
