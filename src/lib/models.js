const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		desc: {
			type: String,
			required: true
		},
		img: {
			type: String
		}
	},
	{ timestamps: true }
);

export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

/*
	DB 종류
	- DBMS (table형식으로 저장하는 구조)-Oracle, MySQL, MSSQL, MariaDB (SQL문으로 DB입출력)
	- NoSQL (JSON 저장하는 구조)-MongDB 
	- Database - collection(배열) - document(모델객체)
*/
