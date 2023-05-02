import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Custom Dashboard</title>
        <meta
          name='description'
          content='Revolutionize your business today with Next JS dashboard!'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='grid grid-cols-2'>
        <p>Next generation metrics</p>
      </div>
    </>
  )
}
