import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "APP",
  description: "Developed by Ovs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en">
      <body>
        
        {children}
        
      </body>
    </html>
  );
}