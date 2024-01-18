'use client';

import { useGlobalData } from '@/hooks/useGlobalData';
import Flickr from '../flickr/Flickr';
import { useEffect } from 'react';

export default function InputImage({ data }) {
	const { ImgUrl, setImgUrl, setImgPanelOpen } = useGlobalData();

	useEffect(() => {
		setImgUrl('');
	}, [setImgUrl]);

	return (
		<>
			<input
				type='text'
				placeholder='image URL'
				//ImgUrl(Flickr Panel에서 전달받는 값: 처음 포스트 작성시: Post> Write)
				//data.img (이미작성된 상세페이지 데이터로 부터 전달 받는값: Post> Edit)
				//ImgUrl값이 없으면 수정모드일때이므로 data.img를 활용
				//ImgUrl값이 있으면 처음글작성모드일때이므로 ImgUrl을 활용
				//삼항연산자의 조건을 data가 아닌 ImgUrl을 쓰는 이유
				//ImgUrl은 있을 수도 있고 없을 수도 있는 값이지만 (글쓰기모드, 수정모드)
				//data같은 경우는 수정모드 일 때 무조건 있는 값이기 때문에 ImgUrl을 쓸 수 조차 없음
				value={ImgUrl ? ImgUrl : data?.img || ''}
				name='img'
				onChange={e => setImgUrl(e.target.value)}
			/>
			<span onClick={() => setImgPanelOpen(true)}>추천 이미지</span>
			<Flickr />
		</>
	);
}
