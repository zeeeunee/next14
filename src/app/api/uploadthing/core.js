import { createUploadthing } from 'uploadthing/next';

const f = createUploadthing();

const auth = req => ({ id: 'zeeeunee' }); // 인증 함수

// file 업로드 관련 route 함수
export const ourFileRouter = {
	// 이미지는 파일당 최대 4MB까지 등록가능
	imageUploader: f({ image: { maxFileSize: '4MB' } })
		.middleware(async ({ req }) => {
			const user = await auth(req);

			// 인증실패시 에러 객체 전달
			if (!user) throw new Error('Unauthorized');

			// 인증 성공시 id값 리턴
			return { userId: user.id };
		})
		//파일업로드가 성공적으로 완료 되었을 때 실행될 complete 함수
		.onUploadComplete(async ({ metadata, file }) => {
			console.log('Upload complete for userId:', metadata.userId);

			console.log('file url', file.url);

			return { uploadedBy: metadata.userId };
		})
};
