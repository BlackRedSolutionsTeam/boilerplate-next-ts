'use client'
import GlobalStyle from './styles/global'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="./manifest.json" />
        <title>Boilerplate App</title>
        <meta name="description" content="Put your description here." />
        <GlobalStyle />
      </head>
      <body>{children}</body>
    </html>
  )
}
