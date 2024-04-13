import { lazy } from 'react';

import Home from './components/home';
const Users = lazy(() => import('./components/users'));
const Login = lazy(() => import('./components/login'));
const AboutUs = lazy(() => import('./components/about'));
const NotFoundPage = lazy(() => import('./components/notFoundPage'));
const UserProfile = lazy(() => import('./components/userProfile'));
const SearchUser = lazy(() => import('./components/searchUser'));
const AuthProfile = lazy(() => import('./components/authProfile'));
const RepoDetail = lazy(() => import('./components/repoDetail'));

export const appRoutes = [
	{
		path: '/',
		component: Home,
		requiresAuth: false,
	},
	{
		path: '/users',
		component: Users,
		requiresAuth: false,
	},
	{
		path: '/search',
		component: SearchUser,
		requiresAuth: false,
	},
	{
		path: '/authProfile',
		component: AuthProfile,
		requiresAuth: true,
	},
	{
		path: '/users/user/:username',
		component: UserProfile,
		requiresAuth: false,
	},
	{
		path: '/login',
		component: Login,
		requiresAuth: false,
	},
	{
		path: '/about',
		component: AboutUs,
		requiresAuth: false,
	},
	{
		path: '/repo-detail/:name/:username',
		component: RepoDetail,
		requiresAuth: false,
	},
	{
		path: '/about',
		component: AboutUs,
		requiresAuth: false,
	},
	{
		path: '*',
		component: NotFoundPage,
		requiresAuth: false,
	},
];
