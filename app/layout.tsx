import type { Metadata, Viewport } from 'next'
import { Sarabun } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import GlobalWaveBackground from '@/components/global-wave-background'
import './globals.css'

const sarabun = Sarabun({
  subsets: ['thai', 'latin'],
  variable: '--font-sarabun',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'โครงการคัดเลือกสถานศึกษา | โรงเรียนดนตรีไทย ๑๐๐ เปอร์เซ็นต์',
  description: 'โครงการคัดเลือกกิจกรรมโรงเรียนดนตรีไทย 100 เปอร์เซ็นต์ ประจำปีงบประมาณ พ.ศ. 2569 เพื่อสืบสาน รักษา ต่อยอดวิชาดนตรีไทยให้คงอยู่คู่สังคมไทย',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0A3625',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className={sarabun.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="font-sans antialiased bg-[#0A3625] text-[#e8e0d0]">
        <GlobalWaveBackground />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
