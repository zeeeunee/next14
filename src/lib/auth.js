import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { connectDB } from './connectDB';
import { User } from './models';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';

//로그인 인증함수
const login = async credentials => {
	try {
		connectDB();

		const user = await User.findOne({ username: credentials.username });
		if (!user) throw new Error('Wrong credentials!');
		const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

		if (!isPasswordCorrect) throw new Error('Wrong credentials!');
		return user;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to login!');
	}
};

//NextAuth의 리턴값을 바로 비구조화할당해서 export로 내보냄
export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut
} = NextAuth({
	...authConfig,
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				try {
					const user = await login(credentials);
					return user;
				} catch (err) {
					return null;
				}
			}
		})
	],
	//인증이 성공완료된 자동 실행될 callback함수(외부 autoConfig에서 가져옴)
	callbacks: {
		async signIn({ user, account, profile }) {
			if (account.provider === 'github') {
				conncetDB();
				try {
					const user = await User.findOne({ email: profile.email });

					if (!user) {
						const newUser = new User({
							username: profile.login,
							email: profile.email,
							image: profile.avatar_url
						});

						await newUser.save();
					}
				} catch (err) {
					console.log(err);
					return false;
				}
			}
			return true;
		},
		...authConfig.callbacks
	}
});
