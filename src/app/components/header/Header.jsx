import clsx from 'clsx';
import styles from './header.module.scss';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';

export default function Header() {
	console.log('header');
	return (
		<header className={clsx(styles.header)}>
			<h1>
				<Link href='/'>DCODELAB</Link>
			</h1>

			<Navbar textArr={['about', 'youtube', 'post']} />
		</header>
	);
}