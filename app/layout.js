import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Inter } from 'next/font/google';
import ClientThemeProvider from '../components/ClientThemeProvider';
import { I18nProvider } from '../contexts/I18nContext';
import { getAssetPath } from '../utils/paths';
import '../styles/global.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Erik Stor - Senior Backend Developer',
  description: 'Portfolio profesional de Erik Stor, desarrollador web backend con experiencia en tecnologías modernas.',
  keywords: 'desarrollador, backend, web, JavaScript, TypeScript, GoLang, Python, SQL, NoSQL, Docker, Kubernetes, AWS, Azure, DevOps',
  authors: [{ name: 'Erik Stor' }],
  icons: {
    icon: [
      { url: getAssetPath('/favicon.ico'), sizes: 'any' },
      { url: getAssetPath('/favicon.ico'), type: 'image/x-icon' }
    ],
    shortcut: getAssetPath('/favicon.ico'),
    apple: getAssetPath('/favicon.ico'),
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href={getAssetPath('/favicon.ico')} />
        <link rel="shortcut icon" href={getAssetPath('/favicon.ico')} />
        <link rel="apple-touch-icon" href={getAssetPath('/favicon.ico')} />
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <I18nProvider>
            <ClientThemeProvider>
              <CssBaseline />
              {children}
            </ClientThemeProvider>
          </I18nProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
} 