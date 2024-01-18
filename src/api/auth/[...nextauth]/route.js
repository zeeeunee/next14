//서버에서 모델 데이터 생성을 api라우터에서 처리시에는 해당 api route 에서 get, post 요청에 대한 session응답 처리 해주는게 맞지만
//현재 프로젝트 구조에서는 모든 서버 데이터를 api라우터가 아닌 lib폴더 안쪽에 server action.js에서 처리하고 있기 때문에
//프로젝트의 효율적인 관리를 위해 lib폴더 안쪽에 auth.js 에서 get, post요청에 대한 서버 응답 함수를 만들어서 export 한 내용을 /api 라우터에서 import 하자마자 바로 export 처리
export { GET, POST } from '@/lib/auth';
