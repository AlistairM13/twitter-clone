import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'

import Layout from '@/components/Layout'
import LoginModal from "@/components/modals/LoginModal"
import RegisterModal from "@/components/modals/RegisterModal"

import '@/styles/globals.css'
import EditModal from "@/components/modals/EditModal"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head key="title">
        <title>Twitter</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <Toaster position="bottom-right" />
        <RegisterModal />
        <LoginModal />
        <EditModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  )
}
