import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import NavBar from '@/components/common/NavBar';
import LandingHome from '@/components/landing/LandingHome';
import Head from 'next/head';

export default function Page() {
	return (
		<div>
			<Head>
				<title>My page title</title>
				<meta property="og:title" content="My page title" key="title" />
			</Head>
			<Header where="main" />
			<NavBar />
			<LandingHome />
			<Footer />
		</div>
	);
}
