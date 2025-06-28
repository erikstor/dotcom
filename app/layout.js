import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Inter } from 'next/font/google';
import ClientThemeProvider from '../components/ClientThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Erik Stor - Senior Backend Developer',
  description: 'Portfolio profesional de Erik Stor, desarrollador web backend con experiencia en tecnologías modernas.',
  keywords: 'desarrollador, backend, web, JavaScript, TypeScript, GoLang, Python, SQL, NoSQL, Docker, Kubernetes, AWS, Azure, DevOps',
  authors: [{ name: 'Erik Stor' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ClientThemeProvider>
            <CssBaseline />
            {children}
          </ClientThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
} 