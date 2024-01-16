import clsx from 'clsx';
import styles from './postdetail.module.scss';

export default function Postdetail({ params }) {
	const { id } = params;
	return (
		<section className={clsx(styles.postdetail)}>
			<h1>Postdetail</h1>
		</section>
	);
}
