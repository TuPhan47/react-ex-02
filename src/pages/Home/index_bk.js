import ReactFullpage from '@fullpage/react-fullpage';

function Home() {
	<ReactFullpage
		//fullpage options
		scrollingSpeed={1000} /* Options here */
		render={({ state, fullpageApi }) => {
			return (
				<div id="l-main__wrp">
					<ReactFullpage.Wrapper>
						<section id="mv" className="main-visual section">
							<div className="wrp-container">
								<div className="main-visual__inner">
									<div className="main-slider">
										<div className="main-slider__item">
											<h2 className="main-slider__title">
												Frontend
												<br />
												Developer.
											</h2>
											<p className="main-slider__des">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="main-visual__avatar">
								<figure>
									<img
										src={require('~/assets/images/avatar.jpg').default}
										alt=""
										className="fluid-image"
									/>
								</figure>
							</div>
						</section>

						<section id="skills" className="box-skills sec-base section">
							<div className="wrp-container">
								<div className="grid-row box-skills-wrp">
									<div className="grid-col--6 box-skills__item">
										<h3 className="hdg hdg-lv3">Design</h3>
										<p className="txt-base">
											I like to craft solid and scalable frontend products with great user
											experiences. I like to craft solid and scalable frontend products with great
											user experiences.
										</p>
									</div>
									<div className="grid-col--6 box-skills__item">
										<h3 className="hdg hdg-lv3">Design</h3>
										<p className="txt-base">
											I like to craft solid and scalable frontend products with great user
											experiences. I like to craft solid and scalable frontend products with great
											user experiences.
										</p>
									</div>
								</div>
							</div>
						</section>

						<section id="about" className="box-about sec-base section">
							<div className="box-about__txt-out">DEVELOPER</div>
							<div className="box-about__inner">
								<p className="box-about__hdg">
									phantu<span>.dev</span>
								</p>
								<div className="box-about__content">
									<h3 className="hdg hdg-lv3 box-about__title">Have a nice day</h3>
									<p className="box-about__des txt-base">
										I like to craft solid and scalable frontend products with great user
										experiences. I like to craft solid and scalable frontend products with great
										user experiences. I like to craft solid and scalable frontend products with
										great user experiences. I like to craft solid and scalable frontend products
										with great user experiences.
									</p>
								</div>
							</div>
						</section>

						<section id="experience" className="box-exp sec-base wrp-container-fluid section">
							<h3 className="hdg hdg--green hdg-lv3 center">Experience</h3>
							<div className="box-exp__content">
								<table className="tbl-base">
									<tbody>
										<tr>
											<td>
												08/20 - Now
												<br />
												Web Developer
												<br />
												CAILY Company
											</td>
											<td>
												I like to craft solid and scalable frontend products with great <br />
												user experiences. I like to craft solid and scalable frontend products{' '}
												<br />
												with great user experiences.
											</td>
										</tr>
										<tr>
											<td>
												08/20 - Now
												<br />
												Web Developer
												<br />
												CAILY Company
											</td>
											<td>
												I like to craft solid and scalable frontend products with great <br />
												user experiences. I like to craft solid and scalable frontend products{' '}
												<br />
												with great user experiences.
											</td>
										</tr>
										<tr>
											<td>
												08/20 - Now
												<br />
												Web Developer
												<br />
												CAILY Company
											</td>
											<td>
												I like to craft solid and scalable frontend products with great <br />
												user experiences. I like to craft solid and scalable frontend products{' '}
												<br />
												with great user experiences.
											</td>
										</tr>
										<tr>
											<td>
												08/20 - Now
												<br />
												Web Developer
												<br />
												CAILY Company
											</td>
											<td>
												I like to craft solid and scalable frontend products with great <br />
												user experiences. I like to craft solid and scalable frontend products{' '}
												<br />
												with great user experiences.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</section>

						<section id="build" className="section">
							<div className="wrp-container">
								<div className="grid-row c-link-wrapper">
									<div className="grid-col--6 c-link__item">
										<a href="/" className="c-link">
											<div className="c-link__inner">
												<h3 className="hdg hdg-lv3">
													I build &<br />
													design stuff
												</h3>
												<p className="c-link__text">
													Open source
													<br />
													projects, web apps
													<br />
													and experimentals.
												</p>
												<div className="c-link__button c-link__button__arrow">
													<div className="c-link__button__inner">
														<span className="c-link__button__text">SEE MY PROJECT</span>
														<span className="c-link__button__arrow--right">&nbsp;</span>
													</div>
												</div>
											</div>
										</a>
									</div>
									<div className="grid-col--6 c-link__item">
										<a href="/" className="c-link">
											<div className="c-link__inner">
												<h3 className="hdg hdg-lv3">
													I build &<br />
													design stuff
												</h3>
												<p className="c-link__text">
													Open source
													<br />
													projects, web apps
													<br />
													and experimentals.
												</p>
												<div className="c-link__button c-link__button__arrow">
													<div className="c-link__button__inner">
														<span className="c-link__button__text">SEE MY PROJECT</span>
														<span className="c-link__button__arrow--right">&nbsp;</span>
													</div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</section>

						<section id="contact" className="section">
							<div className="wrp-container">
								<h3 className="hdg hdg-lv3 center">Send me a message!</h3>
								<p className="box-contact__text center">
									Got a question or proposal, or just wantto say hello? Go ahead.
								</p>
								<form action="/" method="post" className="frm-contact">
									<div className="grid-row frm-contact__row">
										<div className="grid-col--6 frm-contact__item">
											<div className="frm-container">
												<input type="text" id="name" required />
												<label htmlFor="name" className="label">
													Your Name
												</label>
												<div className="underline"></div>
											</div>
										</div>
										<div className="grid-col--6 frm-contact__item">
											<div className="frm-container">
												<input type="mail" id="mail" required />
												<label htmlFor="mail" className="label">
													Email Address
												</label>
												<div className="underline"></div>
											</div>
										</div>
									</div>
									<div className="frm-contact__row">
										<div className="frm-container">
											<textarea
												className="txtarea-cus"
												name="message"
												id="message"
												cols="30"
												rows="10"
												required
											></textarea>
											<label htmlFor="message" className="label">
												Your Message
											</label>
											<div className="underline"></div>
										</div>
									</div>
									<div className="center">
										<button className="c-link">
											<div className="c-link__button c-link__button__arrow">
												<div className="c-link__button__inner">
													<span className="c-link__button__text">SEND</span>
													<span className="c-link__button__arrow--right">&nbsp;</span>
												</div>
											</div>
										</button>
									</div>
								</form>
							</div>
						</section>
					</ReactFullpage.Wrapper>
				</div>
			);
		}}
	/>;
}
export default Home;
