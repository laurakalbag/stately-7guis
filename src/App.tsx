import { useEffect, useState } from 'react';
import Counter from './examples/counter/Counter';
import TemperatureConverter from './examples/temperatureConverter/TemperatureConverter';
import Home from './home';
import './tech.css';

const pages = ['home', 'counter', 'temperature'] as const;
type Page = (typeof pages)[number];

function getComponent(page: Page) {
  switch (page) {
    case 'home':
      return <Home />;
    case 'counter':
      return <Counter />;
      case 'temperature':
        return <TemperatureConverter />;
  }
}

function getPage() {
  if (typeof window !== 'undefined') {
    const queryParams = new URLSearchParams(window.location.search);
    const pageQueryParam = queryParams.get('page');
    if (pageQueryParam && pages.includes(pageQueryParam as Page)) {
      return pageQueryParam as Page;
    }
  }
  return 'home';
}

function setPageQueryParam(page: Page) {
  if (typeof window !== 'undefined') {
    window.history.replaceState(
      null,
      '',
      `?page=${page}` + window.location.hash,
    );
  }
}

export default function App() {
  const [page, setPage] = useState<Page>(getPage());
  useEffect(() => setPageQueryParam(page), [page]);

  return (
    <div className="app">
      <header>
        <h2>XState + React 7GUIs Examples</h2>
        <div className="tech">
          <a href="https://vitejs.dev" target="_blank">
            Vite
          </a>
          <a href="https://react.dev" target="_blank">
            React
          </a>
          <a href="https://stately.ai/docs/xstate" target="_blank">
            XState
          </a>
        </div>
        <nav>
          {pages.map((p) => (
            <button
              key={p}
              className={p === page ? 'app-active-page' : 'app-page'}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}
        </nav>
      </header>
      <main>
        {getComponent(page)}
      </main>
    </div>
  );
}
