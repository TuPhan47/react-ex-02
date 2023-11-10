import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
	return (
		<footer id={cx('l-footer')} className={cx('l-footer section')}>
			<div className={cx('wrp-container')}>
				<div className={cx('l-footer__wrapper')}>
					<div className={cx('l-footer-col')}>
						<a href="/" className={cx('l-footer__logo')}>
							phantu<span>.dev</span>
						</a>
					</div>
					<div className={cx('l-footer-col')}>
						<p className={cx('l-footer__title')}>SAY HELLO</p>
						<ul className={cx('l-footer-nav')}>
							<li className={cx('l-footer-nav__item')}>
								<a href="mail:phantu3041@gmail.com">phantu3041@gmail.com</a>
							</li>
							<li className={cx('l-footer-nav__item')}>
								<a href="tel:0858 090 767">0858.090.767</a>
							</li>
						</ul>
					</div>
					<div className={cx('l-footer-col')}>
						<p className={cx('l-footer__title')}>SITE MAP</p>
						<ul className={cx('l-footer-nav')}>
							<li className={cx('l-footer-nav__item')}>
								<a href="./">Home</a>
							</li>
							<li className={cx('l-footer-nav__item')}>
								<a href="./project/">Project</a>
							</li>
							<li className={cx('l-footer-nav__item')}>
								<a href="./blog/">Blog</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={cx('l-footer__down')}>
					<p className={cx('txt-copyright')}>
						<small>Copyright&copy;Tu Phan 2023.</small>
					</p>
					<ul className={cx('l-footer-nav-social')}>
						<li className={cx('l-footer-nav-social__item')}>
							<a href="/">FB</a>
						</li>
						<li className={cx('l-footer-nav-social__item')}>
							<a href="/">LN</a>
						</li>
						<li className={cx('l-footer-nav-social__item')}>
							<a href="/">YT</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
