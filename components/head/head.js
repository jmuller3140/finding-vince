import Head from 'next/head'
import { Fragment } from 'react'

const HeadComponent = ({ title }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </Fragment>
  )
}

export default HeadComponent