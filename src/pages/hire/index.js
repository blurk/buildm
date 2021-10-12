import React from 'react'
import { ThemeProvider, Button } from 'theme-ui'
import theme from 'theme'
import SEO from 'components/seo'
import Pricing from 'components/pricing'
import Link from 'next/link'

import Payment from 'components/payment'

function IndexPage() {
	return (
		<ThemeProvider theme={theme}>
			<SEO description='We are a team of 2 people: 1 web developer & 1 tester. We build your front-end (landing page, personal website, blog...) with enthusiast and reasonable prices.' />
			<Link href='/'>
				<Button sx={styles.btn} variant='buttons.primary'>
					Trở lại trang chủ
				</Button>
			</Link>
			<Pricing />
			<Payment />
		</ThemeProvider>
	)
}

export default IndexPage

const styles = {
	btn: {
		backgroundColor: 'rgba(0,0,0,0)',
		fontSize: '16px',
		fontWeight: 'bold',
		letterSpacing: '-0.16px',
		borderRadius: '5px',
		border: '2px solid',
		borderColor: 'primary',
		color: 'primary',
		padding: '8px 24px',
		display: ['none', null, null, null, 'inline-block'],
		'&:hover': {
			color: '#fff'
		},
		mt: '5vh',
		ml: '7vw'
	}
}
