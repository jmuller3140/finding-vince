import Head from 'next/head'
import { Fragment } from 'react'

const HeadComponent = ({ title, description, ogTitle, ogUrl, ogImage, ogType }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content={description} />

        <meta property="og:title" content={ogTitle} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
      </Head>
    </Fragment>
  )
}

export default HeadComponent