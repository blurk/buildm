import React from 'react'
import Head from 'next/head'

const keywords =
	'bon.vercel.app,bon,bon,build website,build landing page,build personal web site,build blog,We are build your front-end with enthusiast and reasonable prices,bon-team website,bon team website,bon website, xây dựng giao diện web, tạo giao diện web, làm thuê, bonteam, bon tạo web, xây dựng landing page, landing page, hỗ trợ tạo landing page'

export default function SEO({
	description = 'Chúng tôi giúp xây dựng và quản lý một nhóm các nhà phát triển đẳng cấp thế giới để làm cho trang web cá nhân hoặc trang đích của bạn trở nên sống động.',
	author = 'bon team',
	meta,
	title = 'bon team'
}) {
	const metaData = [
		{
			name: `description`,
			content: description
		},
		{
			property: `og:title`,
			content: title
		},
		{
			property: `og:description`,
			content: description
		},
		{
			property: `og:type`,
			content: `website`
		},
		{
			name: `twitter:card`,
			content: `summary`
		},
		{
			name: `twitter:creator`,
			content: author
		},
		{
			name: `twitter:title`,
			content: title
		},
		{
			name: `twitter:description`,
			content: description
		},
		{
			name: `keywords`,
			content: keywords
		},
		{
			name: 'google-site-verification',
			content:
				'google-site-verification=ECSqkkIvkeSl9j8t-u-ju-5HPiiqc61Ty2tA8B77MSI'
		}
	].concat(meta)
	return (
		<Head>
			<title>{title}</title>
			{metaData.map(({ name, content }, i) => (
				<meta key={i} name={name} content={content} />
			))}
		</Head>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``
}
