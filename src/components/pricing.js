import React from 'react'
import { Box, Container } from 'theme-ui'
import BlockTitle from 'components/block-title'

const Pricing = () => {
	return (
		<Box sx={styles.pricing} id='pricing'>
			<Container>
				<BlockTitle
					slogan='Hãy cùng làm việc với nhau nhé'
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
