import React from 'react'
import { Box, Container } from 'theme-ui'
import BlockTitle from 'components/block-title'

const formatter = new Intl.NumberFormat('it-IT', {
	style: 'currency',
	currency: 'VND'
})

const Pricing = () => {
	return (
		<Box sx={styles.pricing} id='pricing'>
			<Container>
				<BlockTitle
					slogan='Thuê chúng tôi'
					title={`Đặt cọc trước ${formatter.format(500000)}`}
					styles={styles.blockTitle}
				/>
			</Container>
		</Box>
	)
}

export default Pricing

const styles = {
	blockTitle: {
		textAlign: 'center'
	}
}
