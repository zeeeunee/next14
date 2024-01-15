'use client';

import clsx from 'clsx';
import styles from './navbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCustomText } from '@/hooks/useText';

export default function Navbar({ textArr }) {
	const pathName = usePathname();
	const setCapitalize = useCustomText('capitalize');

	return (
		// <nav className={clsx(styles.navbar)}>
		// 	<Link href='/about' className={clsx(pathName === '/about' ? styles.on : '')}>
		// 		About
		// 	</Link>
		// 	<Link href='/youtube' className={clsx(pathName === '/youtube' ? styles.on : '')}>
		// 		Youtube
		// 	</Link>
		// 	<Link href='/post' className={clsx(pathName === '/post' ? styles.on : '')}>
		// 		Post
		// 	</Link>
		// </nav>
		<nav className={clsx(styles.navbar)}>
			{/* client가 true일때에만 동작 */}

			{textArr.map(txt => (
				<Link key={txt} href={`/${txt}`} className={clsx(pathName === '/' + txt ? styles.on : '')}>
					{setCapitalize(txt)}
				</Link>
			))}
		</nav>
	);
}
