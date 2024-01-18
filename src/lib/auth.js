/*
  Next에서의 로그인 인증흐름
  -Session: 서버컴포넌트에 생성되는 정보값
  -Session은 토큰값을 클라이언트에서 활용해서 그 값으로 인증처리
  -클라이언트에 전달받은 세션이 있으면 로그인됨, 없으면 비로그인상태
  -NextAuth를 활용해서 특정 조건 부합시 Next프로젝트 전역에 session값을 활용할 수 있도록 리턴
  -email, password 입력방식
  --DB에 직접 사용자 입력정보를 받아서 저장한뒤 로그인을 통해 해당 정보값을 매칭해서 session생성
  --password같이 민감한 정보값을 암호화처리해서 DB에저장
  --session처리시에도 암호화된 값으로 비교해서 인증처리
  --외부 sns로 로그인처리시에는 해당 정보값들이 해당 서비스사의 서버에 저장되므로 
  --해당 값을 역으로 가지고와서 서버에 저장 (이때 비밀번호를 받기 불가)
  --유저정보 스키마 생성비 password는 optional처리
*/
