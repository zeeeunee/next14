import { revalidatePath } from 'next/cache';
import { connectDB } from './connectDB';
import { Post } from './models';
import { redirect } from 'next/navigation';

export const getPosts = async id => {
	try {
		console.log('클라이언트 요청에 의해 DB접속 시작');
		connectDB();
		let posts = null;
		if (id) posts = await Post.findById(id); //id값이 있으면 id값이 있는 데이터 가져오기
		else posts = await Post.find();

		return posts;
	} catch (err) {
		console.log(err);
		throw new Error('Fail to fetch All posts data!!');
	}
};

export const addPost = async formData => {
	'use server';

	const { title, img, desc } = Object.fromEntries(formData);
	try {
		connectDB();
		const newPost = new Post({ title, img, desc });
		await newPost.save(); //save로 호출해야 DB에 저장됨
	} catch (err) {
		console.log(err);
		throw new Error('Fail to save Post!');
	}

	revalidatePath('/post'); //post로 새로고침
	redirect('/post'); //브라우저에게 다른 URL로 요청하도록 지시하는 것
};
