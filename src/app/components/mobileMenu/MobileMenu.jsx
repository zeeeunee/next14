'use client';

import clsx from 'clsx';
import styles from './mobileMenu.module.scss';
import { useGlobalData } from '@/hooks/useGlobalData';
import { useEffect } from 'react';
import { useThrottle } from '@/hooks/useThrottle';

export default function MobileMenu() {
	//useThrottle hook으로부터 throttling적용함수 반환
	const setThrottle = useThrottle();
	const { MenuOpen, setMenuOpen } = useGlobalData();

	useEffect(() => {
		const closePanel = () => {
			const wid = window.innerWidth;
			if (wid >= 1000) setMenuOpen(false);
		};

		//closePanel함수를 throttling 적용
		const throttledClosePanel = setThrottle(closePanel);

		window.addEventListener('resize', throttledClosePanel);
		return () => window.removeEventListener('resize', throttledClosePanel);
	}, [setMenuOpen, setThrottle]);

	return (
		<>
			{MenuOpen && (
				<aside className={clsx(styles.mobileMenu)}>
					<h1>MobileMenu</h1>
				</aside>
			)}
		</>
	);
}
