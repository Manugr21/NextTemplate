/* eslint-disable @next/next/no-head-element */
import Navigation from "./components/Navigation"
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Whitelist</title>
      </head>
      <body>
        <div className="h-screen flex flex-row justify-start">
          <Navigation />
          <div className="bg-primary flex-1 p-4 text-white">{children}</div>
        </div>
      </body>
    </html>
  )
}
