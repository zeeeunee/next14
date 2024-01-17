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
		else posts = await Post.find().sort({ _id: -1 }); //최신등록된 데이터가 맨 앞으로 가게 하기 (역순배열)

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

	revalidatePath('/post'); //새로고침 하지 않아도 post에서 데이터 업데이트 확인 가능
	redirect('/post'); //브라우저에게 post로 가라고 지시하는 것
};

export const deletePost = async formData => {
	'use server';

	try {
		connectDB();
		const data = Object.fromEntries(formData);
		//const id = { _id: Object.keys(data)[0] };
		const id = Object.keys(data)[0];

		//findByAndDelete(id); id:삭제할 document의 _id의 value값 전달 (객체전달 아님)
		await Post.findByIdAndDelete(id);
	} catch (err) {
		console.log(err);
		throw new Error('Fail to delete Post');
	}

	revalidatePath('/post');
	redirect('/post');
};
