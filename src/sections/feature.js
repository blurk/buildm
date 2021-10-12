import React, { useRef } from 'react'
import { Box, Container } from 'theme-ui'
import BlockTitle from 'components/block-title'
import Swiper from 'react-id-swiper'

import FeatureCard from 'components/feature-card'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import featureImage1 from 'assets/page-1.png'
import featureImage2 from 'assets/page-2.png'
import featureImage3 from 'assets/page-3.png'

const FeatureData = [
	{
		image: featureImage1,
		title: 'Ladi Page',
		description:
			'VVECO design landing page được tạo bởi NextJS & Framer-motion',
		path: 'https://ladi-one.vercel.app/'
	},
	{
		image: featureImage2,
		title: 'Eastgate Software website',
		description:
			"Eastgate Software's homepage được xây dựng bằng NextJS & Strapi as Back-end",
		path: 'https://eastgate-software.com/'
	},
	{
		image: featureImage3,
		title: 'Melriver home page',
		description: 'Trang chủ của Melriver Agency',
		path: 'https://melriver-home-page.vercel.app/'
	}
]

const Feature = () => {
	const ref = useRef(null)
	const goNext = () => {
		if (ref.current !== null && ref.current.swiper !== null) {
			ref.current.swiper.slideNext()
		}
	}

	const goPrev = () => {
		if (ref.current !== null && ref.current.swiper !== null) {
			ref.current.swiper.slidePrev()
		}
	}
	const params = {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 30,
		breakpoints: {
			0: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 0
			},
			376: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 0
			},
			576: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 0
			},
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 30
			},
			992: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 30
			},
			1200: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 30
			}
		}
	}
	return (
		<Box sx={styles.features} id='projects'>
			<Container>
				<BlockTitle
					slogan='Các dự án'
					title='Những dự án mà chúng tôi tự hào nhất'
					styles={styles.blockTitle}
				/>

				<Swiper {...params} ref={ref}>
					{FeatureData.map((feature, index) => (
						<div className='swiper-slider' key={`feature-card-key${index}`}>
							<FeatureCard
								image={feature.image}
								title={feature.title}
								description={feature.description}
								path={feature.path}
							/>
						</div>
					))}
				</Swiper>
				<Box sx={styles.carouselBtns}>
					<button aria-label='left btn' onClick={goPrev}>
						<FaLongArrowAltLeft />
					</button>
					<button onClick={goNext} aria-label='right btn'>
						<FaLongArrowAltRight />
					</button>
				</Box>
			</Container>
		</Box>
	)
}

export default Feature

const styles = {
	blockTitle: {
		textAlign: 'center'
	},
	features: {
		pt: ['80px', null, null, null, null, null, '120px'],
		pb: ['80px', null, null, null, '170px'],
		backgroundColor: '#F8FAFC',
		'.swiper-slider': {
			overflowY: 'visible',
			overflowX: 'hidden'
		}
	},
	carouselBtns: {
		display: ['flex', null, null, null, null, 'none'],
		justifyContent: 'center',
		alignItems: 'center',
		button: {
			border: 'none',
			outline: 'none',
			backgroundColor: 'transparent',
			fontSize: [2, null, 4, null, 5],
			color: '#BBC7D7',
			width: 'auto',
			padding: [0],
			margin: '0 5px',
			mt: '15px',
			transition: '500ms',
			'&:hover, &:active, &:focus': {
				color: 'primary'
			}
		}
	}
}
