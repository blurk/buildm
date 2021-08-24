import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { StickyProvider } from 'contexts/app/app.provider'
import theme from 'theme'
import SEO from 'components/seo'
import Layout from 'components/layout'

import Banner from 'sections/banner'
import Services from 'sections/services'
import Testimonials from 'sections/testimonials'
import CustomerSupport from 'sections/customer-support'
import Feature from 'sections/feature'
import CallToAction from 'sections/call-to-action'
import BoostAgencies from 'sections/boost-agencies'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO description='We are a team of 2 people: 1 web developer & 1 tester. We build your front-end (landing page, personal website, blog...) with enthusiast and reasonable prices.' />
          <Banner />
          <Services />
          <BoostAgencies />
          <Testimonials />
          <CustomerSupport />
          <Feature />
          <CallToAction />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  )
}
