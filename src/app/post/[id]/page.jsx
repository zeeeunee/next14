import clsx from 'clsx';
import styles from './postdetail.module.scss';

export default async function PostDetail({ params }) {
	const { id } = params;
	const post = await getPosts(id);
	console.log(post);
	return (
		<section className={clsx(styles.postdetail)}>
			<h1>Postdetail</h1>
		</section>
	);
}
