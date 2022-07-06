import React, { useRef } from 'react'
import { Box, Container, Grid, Heading, Text, Input, Button } from 'theme-ui'
import emailjs from '@emailjs/browser'

import toast, { Toaster } from 'react-hot-toast'

import Image from 'components/image'

import bannerImg from 'assets/banner-image-1-1.png'

const notify = () =>
	toast.success('Đăng ký thành công!\n Hãy kiểm tra email của bạn nhé.')

const Banner = () => {
	const formRef = useRef()

	const handleSubmit = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_iektkj4',
				'template_7t0xpe6',
				formRef.current,
				'user_ePY8mJF51VXT3OrkOwMlx'
			)
			.then(
				(result) => {
					notify()
					formRef.current.reset()
				},
				(error) => {}
			)
	}

	return (
		<>
			<Toaster />
			<Box sx={styles.banner} id='banner'>
				<Container sx={styles.container}>
					<Grid sx={styles.grid}>
						<Box sx={styles.content}>
							<Heading as='h3'>
								Chúng tôi xây dựng giao diện cho website của bạn
							</Heading>
							<Text as='p'>
								Chúng tôi là một nhóm gồm các Front-end Developer và Tester.
								Chúng tôi giúp xây dựng những giao diện web chất lượng và sống
								động.
							</Text>
						</Box>
						<Box sx={styles.image}>
							<Image src={bannerImg} alt='A cartoon man sit on a chair' />
						</Box>

						<Box
							as='form'
							sx={styles.form}
							onSubmit={handleSubmit}
							ref={formRef}>
							<Box as='label' htmlFor='to_email' variant='styles.srOnly'>
								liên hệ ngay
							</Box>
							<Input
								type='email'
								name='to_email'
								id='to_email'
								placeholder='Gửi email ngay cho chúng tôi'
								sx={styles.form.input}
								required
							/>
							<Button type='submit' sx={styles.form.button}>
								Liên hệ ngay
							</Button>
						</Box>
					</Grid>
				</Container>
			</Box>
		</>
	)
}

export default Banner

const styles = {
	banner: {
		pt: ['110px', null, null, null, '150px', '200px'],
		pb: ['50px', null, null, null, '60px', null, '0'],
		backgroundColor: '#F6F8FB',
		overflow: 'hidden'
	},
	container: {
		width: [null, null, null, null, null, null, '1390px']
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
		gridGap: '0'
	},
	content: {
		h3: {
			color: 'black',
			fontWeight: 'bold',
			lineHeight: [1.39],
			letterSpacing: ['-.7px', '-1.5px'],
			mb: ['15px', null, null, null, '20px'],
			width: ['100%'],
			maxWidth: ['100%', null, null, '90%', '100%', '540px'],
			fontSize: [6, null, null, '36px', null, '55px', 9]
		},
		p: {
			fontSize: [1, null, null, 2, null, 3],
			lineHeight: ['26px', null, null, null, 2.33],
			color: 'text_secondary',
			mb: ['20px', null, null, null, null, '30px'],
			width: ['100%'],
			maxWidth: ['100%', null, null, null, null, '410px'],
			br: {
				display: ['none', null, null, null, 'inherit']
			}
		}
	},
	form: {
		mb: ['30px', null, null, null, null, '60px'],
		display: ['flex'],
		input: {
			borderRadius: ['4px'],
			backgroundColor: '#fff',
			width: ['240px', null, null, null, '315px', null, '375px'],
			height: ['45px', null, null, '55px', null, null, '65px'],
			padding: ['0 15px', null, null, '0 25px'],
			fontSize: [1, null, null, 2],
			border: 'none',
			outline: 'none',
			boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)'
		},
		button: {
			fontSize: [1, null, null, null, 2, '20px'],
			borderRadius: ['4px'],
			padding: ['0 15px'],
			ml: ['10px'],
			width: ['auto', null, null, null, '180px']
		}
	},
	image: {
		img: {
			display: 'flex',
			mixBlendMode: 'darken',
			position: 'relative',
			top: ['0', null, null, null, null, '-40px'],
			maxWidth: ['100%', null, null, null, null, null, 'none']
		}
	}
}
