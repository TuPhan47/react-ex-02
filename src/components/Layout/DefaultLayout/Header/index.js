import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import MainNav from '../MainNav';

const cx = classNames.bind(styles);

function Header() {
	return (
		<header id={cx('l-header')} className={cx('l-header')}>
			<div className={cx('l-header__wrapper')}>
				<h1 id="sitelogo">
					<a href="./">
						<img
							src={require('~/assets/images/logo-site.svg').default}
							alt="phantu.dev"
							className={cx('fluid-image')}
						/>
					</a>
				</h1>
				<MainNav />
			</div>
		</header>
	);
}

export default Header;
