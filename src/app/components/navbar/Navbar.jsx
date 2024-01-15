'use client';
//client 방식으로 컴포넌트를 설정해도 초기 한번은 서버쪽에서 렌더링 된 다음에 넘어옴
//hydration: 정적인 데이터로 일단은 기능없이 미리 서버쪽에서 pre-render해서 출력한 다음 클라이언트가 동작할 준비가 되면 그때 클라이언트기능을 활용할 수 있는 동적인 컴포넌트로 변경처리
//주의점: 서버쪽에서 렌더링된 결과값과 초기 클라이언트에서 동작되는 결과값이 동일해야 됨
//해결방법1: useEffect를 이용해서 컴포넌트가 마운트 될 때에만 특정state값을 활성화시키고 해당값이 활성화될 때에만 클라이언트에서 활용할 값을 호출하는 방법
//해결방법2: Dynamic import방식을 활용해서 client 방식으로 동작하는 컴포넌트를 애초에 서버쪽에서 prebuild 되지 않도록 처리
import clsx from 'clsx';
import styles from './navbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar({ textArr }) {
	const time = new Date().getTime();
	const pathName = usePathname();

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
			<h2>{time}</h2>
			{/* client가 true일때에만 동작 */}

			{textArr.map(txt => (
				<Link key={txt} href={`/${txt}`} className={clsx(pathName === '/' + txt ? styles.on : '')}>
					{txt.charAt(0).toUpperCase() + txt.slice(1)}
				</Link>
			))}
		</nav>
	);
}
