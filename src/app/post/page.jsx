import clsx from 'clsx';
import styles from './post.module.scss';
import { getPostsPage } from '@/lib/actions';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '@/components/pagination/Pagination';

export default async function Post({ searchParams }) {
	const session = await auth();

	//현재 페이지에 전달된 query이 있으면 page의 값을 가져옴, 없으면 1로 초기화
	const page = searchParams?.page || 1;
	//현재 페이지 번호를 인수로 전달해서 페이지번호에 따른 전체포스트갯수, 출력할 포스트배열, 페이지당 출력할 갯수 반환
	const { total, posts, nums } = await getPostsPage(page);

	return (
		<section className={clsx(styles.post)}>
			<h1>Post</h1>
			{/* Pagination컴포넌트를 호출하고 전체 포스트갯수와 페이지당 포스트갯수 전달 */}
			<Pagination total={total} nums={nums} />
			<nav>
				<Link href='/post/write'>Write Post</Link>
			</nav>
			{posts.map(post => (
				<article key={post._id}>
					<div className={clsx(styles.pic)}>{post.img && <Image src={post.img} alt={post.title} priority fill />}</div>
					<h2>
						<Link href={`/post/${post._id}`}>{post.title}</Link>
					</h2>
					<p>{post.desc}</p>
				</article>
			))}
		</section>
	);
}

/*
	포스트저장시 글작성자 정보 같이 저장하는 로직 흐름
	1. app/post/write -> auth객체에서 로그인된 사용자정보인 session을 가져와서 email값을 input에 hidden숨겨서 addPost 서버액션함수로 전달
	2. lib/actions.js (addPost) -> 파라미터로 email값을 받아서 email값 추가해서 모델 인스턴스 생성후 DB에 저장
	3. app/post/[id] -> 상세페이지 접속시 getPosts 서버액션 함수로 상세포스트 정보 가져옴
	4. <UserInfo /> -> 상세페이지 안쪽의 해당 컴포넌트의 email값을 props로 전달 (동기화를 위해 Suspense활용)
	5. components > userInfo (getUser) -> getUser서버 액션함수가 email값을 전달받아서 해당 유저정보객체 반환
	6. 반환된 유저정보를 userInfo컴포넌트에 원하는 형태로 출력
*/
