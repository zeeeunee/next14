'use client';

import { createContext, useContext, useState } from 'react';
//react는 클라이언트 기반이기 때문에 createContext, useContext, useState를 쓰려면 'use client' 써야 함

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
	const [MenuOpen, setMenuOpen] = useState(false);
	const [ModalOpen, setModalOpen] = useState(false);
	const [Mode, setMode] = useState(false);

	return <GlobalContext.Provider value={{ MenuOpen, setMenuOpen, ModalOpen, setModalOpen, Mode, setMode }}>{children}</GlobalContext.Provider>;
}

export function useGlobalData() {
	const globalData = useContext(GlobalContext);
	return globalData;
}
