import classNames from 'classnames/bind';
import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function MainNav() {
	return (
		<div>
			<a href="/" className={cx('nav-global-menu')}>
				<span className={cx('b1')}></span>
				<span className={cx('b2')}></span>
			</a>
			<nav className={cx('nav-global-wrap')}>
				<ul className={cx('nav-global')}>
					<li>
						<a href="./" className={cx('nav-item')}>
							Home
						</a>
					</li>
					<li>
						<a href="./project/" className={cx('nav-item')}>
							Project
						</a>
					</li>
					<li>
						<a href="./blog/" className={cx('nav-item')}>
							Blog
						</a>
					</li>
				</ul>
				<p className={cx('nav-global__title')}>Say Hello</p>
				<ul className={cx('nav-global')}>
					<li>
						<a href="mail:phantu3041@gmail.com" className={cx('nav-item')}>
							phantu3041@gmail.com
						</a>
					</li>
					<li>
						<a href="tel:0858090767" className={cx('nav-item')}>
							0858.090.767
						</a>
					</li>
				</ul>
				<ul className={cx('nav-global nav-global--v2')}>
					<li>
						<a href="★★★" className={cx('nav-item')}>
							FB
						</a>
					</li>
					<li>
						<a href="★★★" className={cx('nav-item')}>
							LN
						</a>
					</li>
					<li>
						<a href="★★★" className={cx('nav-item')}>
							YT
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default MainNav;
