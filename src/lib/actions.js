import { connectDB } from './connectDB';
import { Post } from './models';

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
};
