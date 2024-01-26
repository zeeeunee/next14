import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import Header from '@/components/header/Header';
import { GlobalProvider } from '@/hooks/useGlobalData';
import MobileMenu from '@/components/mobileMenu/MobileMenu';
import '@uploadthing/react/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
};
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<GlobalProvider>
					<main className='container'>
						<Header />
						<div className='wrap'>{children}</div>
					</main>
					<MobileMenu />
				</GlobalProvider>
			</body>
		</html>
	);
}
