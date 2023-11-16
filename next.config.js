/** @type {import('next').NextConfig} */

// const kakaoURL = require('./src/components/login/loginInfo.ts');

const nextConfig = {
	compiler: {styledComponents: true}
	// reactStrictMode: true,
	// async rewrites() {
	// 	return [
	// 		{
	// 			source: '/',
	// 			destination: `${kakaoURL}`,
	// 			// query: {
	// 			// 	client_id: process.env.KAKAO_KEY,
	// 			// 	redirect_uri: 'https://localhost:3000/kakaologin',
	// 			// 	response_type: 'code',
	// 			// },
	// 		},
	// 	];
	// },
};

module.exports = nextConfig;
