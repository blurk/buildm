/** @jsx jsx */
import { jsx, Image } from 'theme-ui'
import { Link } from 'components/link'
import logo from 'assets/large-removebg-preview.svg'

export default function Logo() {
	return (
		<Link
			path='/'
			sx={{
				variant: 'links.logo'
			}}>
			<Image
				src={logo}
				sx={{ display: 'flex', height: 25 }}
				alt='naisu team logo'
			/>
		</Link>
	)
}
