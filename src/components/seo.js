import React from 'react'
import Head from 'next/head'

const keywords =
	'naisu.vercel.app,naisu,naisu,build website,build landing page,build personal web site,build blog,We are build your front-end with enthusiast and reasonable prices,naisu-team website,naisu team website,naisu website, xây dựng giao diện web, tạo giao diện web, làm thuê, naisuteam, naisu tạo web'

export default function SEO({
	description = 'We are a team of 2 people: 1 web developer & 1 tester. We build your front-end (landing page, personal website, blog...) with enthusiast and reasonable prices.',
	author = 'naisu team',
	meta,
	title = 'naisu team'
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
