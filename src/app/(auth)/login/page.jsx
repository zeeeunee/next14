import clsx from 'clsx';
import styles from './login.module.scss';

import { handleGitHubLogin, handleGoogleLogin } from '@/lib/actions';
import LoginForm from '@/components/loginForm/LoginForm';

export default function Login() {
	return (
		<section className={clsx(styles.login)}>
			<form action={handleGitHubLogin}>
				<button>Github Login</button>
			</form>
			<form action={handleGoogleLogin}>
				<button>Google Login</button>
			</form>
			<LoginForm />
		</section>
	);
}
