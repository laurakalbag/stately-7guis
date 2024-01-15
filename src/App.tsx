import reactLogo from './assets/react.svg'
import xstateLogo from './assets/xstate.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMachine } from '@xstate/react';
import { counterMachine } from './counterMachine';

function App() {
  const [state, send] = useMachine(counterMachine);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://stately.ai/docs/xstate" target="_blank">
          <img src={xstateLogo} className="logo xstate" alt="XState logo" />
        </a>
      </div>
      <h1>Vite + React + XState + TS</h1>
      <div className="card">
      <button onClick={() => send({ type: 'INCREMENT' })}>count is {state.context.count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test hot module reloading.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React, and XState logos to learn more.
      </p>
    </>
  )
}

export default App
