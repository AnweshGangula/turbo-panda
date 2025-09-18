import { log } from '@repo/logger';
import Home from '../pages/home';

export const metadata = {
	title: 'Store | Kitchen Sink',
};

export default function Store(): JSX.Element {
	log('Hey! This is the Store page.');

	return <Home />;
}
