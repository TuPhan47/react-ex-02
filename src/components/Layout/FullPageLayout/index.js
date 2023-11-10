import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Header from '../DefaultLayout/Header';

// const anchors = ['MainVisual', 'Skills', 'About', 'Experience', 'Build', 'Contact', 'Footer'];

const FullPageLayout = ({ children }) => (
	<ReactFullpage
		// anchors={anchors}
		navigation
		// navigationTooltips={anchors}
		scrollingSpeed={1000}
		render={({ state, fullpageApi }) => {
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
						<div id="l-main">
							<ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>
						</div>
					</div>
				</div>
			);
		}}
	/>
);
export default FullPageLayout;
