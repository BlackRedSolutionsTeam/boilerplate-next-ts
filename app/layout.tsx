'use client'
import GlobalStyle from './styles/global'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <GlobalStyle />
      <body>{children}</body>
    </html>
  )
}
