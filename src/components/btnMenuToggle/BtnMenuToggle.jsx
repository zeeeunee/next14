'use client';

import clsx from 'clsx';
import styles from './btnMenuToggle.module.scss';
import { TiThMenu } from 'react-icons/ti';
import { useGlobalData } from '@/hooks/useGlobalData';

export default function BtnMenuToggle() {
	const { MenuOpen, setMenuOpen } = useGlobalData();
	return <TiThMenu className={styles.btnMenu} size={20} color={'#333'} onClick={() => setMenuOpen(!MenuOpen)} />;
}
