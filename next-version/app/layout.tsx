import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'SEC topics',
  description: 'A dashboard to analyze the evolution of topics present in the SEC 10K filings filed during the period 2019-2023.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`inter.className antialised`}>{children}</body>
    </html>
  )
}
