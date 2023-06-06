import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'





const config: DocsThemeConfig = {


 

  head:() => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://xaio-dao.vercel.app/' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Nextra'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'The next site builder'}
        />
      </>
    )
  },  
  primaryHue: 180,
  logo: <span>XAIO DAO</span>,
  project: {
    link: 'https://github.com/XIAOAssembly/xaio-dao',
  },
  chat: {
    link: 'https://discord.gg/HgMH9xJM',
  },
  docsRepositoryBase: 'https://github.com/XIAOAssembly/xaio-dao/tree/main/',
  footer: {
    text: 'XAIO DAO',
  },
}

export default config
