import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
	return (
		<div id="l-document">
			<Header />

			<div id="l-container">
				<noscript>
					<div class="box-noscript">
						<p>このページでは JavaScriptを使用しています。</p>
						<p>お使いのWEBブラウザで JavaScriptを有効にしてからご覧ください。</p>
					</div>
				</noscript>
				<div id="l-main">{children}</div>
			</div>

			<Footer />
		</div>
	);
}

export default DefaultLayout;
