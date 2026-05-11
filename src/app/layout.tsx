import './globals.css';

export const metadata = {
  title: 'Sistemas Acoplados e Multiprocessamento',
  description: 'Apresentação interativa desenvolvida com Next.js e Three.js',
};

// Adicionada a tipagem do 'children'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}