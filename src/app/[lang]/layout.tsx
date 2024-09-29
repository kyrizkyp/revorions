import "../globals.css";
import DictionaryProvider from "../components/DictionaryProvider";
import { getDictionary } from "./dictionaries";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        <link rel="icon" href="/rv.ico" sizes="32x32" />
      </head>
      <body>
        <DictionaryProvider dictionary={dictionary}>
          {children}
        </DictionaryProvider>
      </body>
    </html>
  );
}
