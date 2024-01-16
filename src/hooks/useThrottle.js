import { useRef } from 'react';

//해당 Throttle적용함수가 핸들러나 useEffect안쪽에서 호출될수 있으므로
//throttle적용하는 함수자체를 리턴하도록 코드 변경
export const useThrottle = () => {
	const eventBlocker = useRef(null);
	return (func, gap = 500) => {
		return () => {
			if (eventBlocker.current) return;
			eventBlocker.current = setTimeout(() => {
				func();
				eventBlocker.current = null;
			}, gap);
		};
	};
};
