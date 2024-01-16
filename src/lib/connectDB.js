/*
  Database : 데이터 저장 공간
  Model: 데이터에 저장되는 정보객체
  Schema: Model 객체에 저장될 데이터 자료형, 프로퍼티구조를 강제하는 시스템적인 틀
  mongoose: MongoDB에 구조맞게 모델 객체 스키마생성및 모델 데이터 객체 제어 라이브러리
*/

const mongoose = require('mongoose');
let isConnected = false;

export const connectDB = async () => {
	try {
		if (isConnected) {
			console.log('already connected!');
			return;
		}
		await mongoose.connect(process.env.MONGO_URL);
		isConnected = db.connection[0].readyState;
	} catch (err) {
		console.log(err);
		throw new Error('Fail to connect DB!');
	}
};
