import clsx from 'clsx';
import styles from './header.module.scss';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import BtnLogin from '../btnLogin/BtnLogin';
import { TiThMenu } from 'react-icons/ti';

export default function Header() {
	console.log('header');
	return (
		<header className={clsx(styles.header)}>
			<h1>
				<Link href='/'>DCODELAB</Link>
			</h1>

			<Navbar textArr={['about', 'youtube', 'post']} />
			<BtnLogin session={false} />
			<TiThMenu className={styles.btnMenu} size={20} color={'#333'} />
		</header>
	);
}
