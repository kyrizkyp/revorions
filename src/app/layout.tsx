import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rv.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
