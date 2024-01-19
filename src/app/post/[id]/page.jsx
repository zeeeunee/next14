import clsx from 'clsx';
import styles from './postDetail.module.scss';
import { deletePost, getPosts } from '@/lib/actions';
import Image from 'next/image';
import Link from 'next/link';
import UserInfo from '@/components/userInfo/UserInfo';
import { Suspense } from 'react';

export default async function PostDetail({ params }) {
	const { id } = params;
	const post = await getPosts(id);
	return (
		<section className={clsx(styles.postDetail)}>
			<h1>PostDetail</h1>
			<article>
				<div className={clsx(styles.pic)}>{post.img && <Image src={post.img} alt={post.title} priority fill />}</div>
				<div className={clsx(styles.txt)}>
					<h2>{post.title}</h2>
					<p>{post.desc}</p>
					{post && (
						<Suspense fallback={<p>Loading...</p>}>
							<UserInfo username={post.username} />
						</Suspense>
					)}
					<UserInfo username={post.username} />
					<nav>
						<Link href={`/post/edit/${id}`}>Edit</Link>
						<form action={deletePost}>
							<nav>
								<input type='hidden' name={id} />
								<button>Delete</button>
							</nav>
						</form>
					</nav>
				</div>
			</article>
		</section>
	);
}
