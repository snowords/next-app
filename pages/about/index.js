import Link from 'next/link'
import Head from 'next/head'

export default function about() {
  return(
    <>
      <Head>
        <title>Next.js 12 重大更新</title>
      </Head>
      <h3>
        <Link href="/">
          返回首页
        </Link>
      </h3>
    </>
  )
}