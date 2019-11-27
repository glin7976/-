import React, { useEffect } from "react";
import { Link } from "gatsby";
import lottie from 'lottie-web';
import working from '../static/working-animation.json';

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";

import './index.less';

const IndexPage = () => {
	useEffect(() => {
		lottie.loadAnimation({
			container: document.getElementById("box"),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: working
		})
	}, []);

	return (
		<Layout>
			<SEO title="Home" />
			<div className='banner-wrap'>
				<div  className='left-content'>
					<h1>Coding 日志</h1>
					<p>记录、咀嚼、共享</p>
					<Link to='/articles'>
						<button className='start-read-btn'>开始阅读</button>
					</Link>
				</div>
				<div id="box" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
			</div>
		</Layout>
	);
}

export default IndexPage;
