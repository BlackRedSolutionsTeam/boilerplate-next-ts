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
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="cyan"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        />
        <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
        <GlobalStyle />
      </head>
      <body>{children}</body>
    </html>
  )
}
