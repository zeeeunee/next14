import clsx from 'clsx';
import styles from './header.module.scss';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import dynamic from 'next/dynamic';

//기존 client 방식의 컴포넌트를 import시 ssr:false 를 통해 서버쪽에서 pre-build 되지 않도록 설정
const NoSsrNavbar = dynamic(() => import('@/components/navbar/Navbar'), { ssr: false });

export default function Header() {
	console.log('header');
	return (
		<header className={clsx(styles.header)}>
			<h1>
				<Link href='/'>DCODELAB</Link>
			</h1>

			{/* <Navbar textArr={['about', 'youtube', 'post']} /> */}
			<NoSsrNavbar textArr={['about', 'youtube', 'post']} />
		</header>
	);
}
