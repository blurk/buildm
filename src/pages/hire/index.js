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
      <SEO />
      <Link href='/'>
        <Button sx={styles.btn} variant='buttons.primary'>
          Back to Main Page
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
      color: '#fff',
    },
    mt: '5vh',
    ml: '7vw',
  },
}
