import styles from './about.module.scss';

export default function About() {
	throw new Error('Error in About page..');
	return (
		<section className={clsx(styles.about)}>
			<h1>About</h1>
		</section>
	);
}
