import './globals.css';
export const metadata = {
  title: 'Multisession Shape Game',
  description: 'Real-time collaborative shape/color puzzle game'
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
