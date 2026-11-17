import './styles/tokens.css';
import './styles/base/globals.css';
import { Header, Footer } from './components';

export const metadata = {
  title: 'Brewtopia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?display=swap&family=Epilogue:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="design-root">
          <div className="layout-container">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
