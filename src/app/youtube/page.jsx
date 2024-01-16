import clsx from 'clsx';
import styles from './youtube.module.scss';
import Link from 'next/link';
import { useCustomText } from '@/hooks/useText';
import Image from 'next/image';

async function fetchYoutube() {
	const api_key = 'AIzaSyBQ0OBVJR5LwVP7O1wFRSbfMbLCLvWRLnE';
	const pid = 'PLM7Wu-2kzIQPISbXB5yK53ANqLA6I1IZs';
	const num = 9;
	const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

	const data = await fetch(baseURL);
	const resultData = await data.json();
	return resultData;
}

export default async function Youtube() {
	const customText = useCustomText('combined');
	const shortenText = useCustomText('shorten');
	const data = await fetchYoutube();
	console.log(data);
	return (
		<section className={clsx(styles.youtube)}>
			<h1>Youtube</h1>
			{data.items.map((data, idx) => {
				const [date, time] = data.snippet.publishedAt.split('T');

				return (
					<article key={data.id}>
						<h2>{shortenText(data.snippet.title, 50)}</h2>

						<div className={styles.txt}>
							<p>{shortenText(data.snippet.description, 250)}</p>
							<div className={styles.infoBox}>
								<span>{customText(date, '.')}</span>
								<em>{time.split('Z')[0]}</em>
							</div>
						</div>

						<div className={styles.pic}>
							<Link href={`/detail/${data.id}`}>
								{/* 외부 이미지 연결시 next.config파일의 이미지 protocol, hostname등록, fill, sizes, priority등록 */}
								{/* fill속성 적용시 무조건 부모요소에 position: relative, absolute, fixed설정되어 있어야함 */}
								<Image
									src={data.snippet.thumbnails.standard.url}
									alt={data.snippet.title}
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									priority
								/>
							</Link>
						</div>
					</article>
				);
			})}
		</section>
	);
}
