import NextHead from "next/head"
import React from "react"

const SEOHead = ({ title, description, url, ogImage }) => {
  const joinedTitle = title ? `${title} | Namee3` : "Namee3"

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{joinedTitle}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="keywords" content="Defi, Protocol Web3" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={joinedTitle} />
      <meta property="og:description" content={description} />
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {/* <meta name="twitter:creator" content="@kopandaria" /> */}
      {/* <meta name="twitter:site" content="@kopandaria" /> */}
      {/* <meta name="twitter:image" content={ogImage} /> */}
      {/* <meta name="twitter:image:alt" content={description} /> */}
      <meta name="twitter:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#F9F4F4" />
      <meta name="theme-color" content="#1969FF" />
    </NextHead>
  )
}

SEOHead.defaultProps = {
  title: "",
  description: "Namee3- Own Your Digital Identity",
  url: "",
  ogImage: "", //update img
}

export default SEOHead
