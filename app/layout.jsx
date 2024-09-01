import "@styles/globals.css";

import { Nav } from "@components/Nav.jsx";
import { Provider } from "@components/Provider.jsx";

const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
