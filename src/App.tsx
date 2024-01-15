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
          <img src={viteLogo} className="logo" alt="Vite" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React" />
        </a>
        <a href="https://stately.ai/docs/xstate" target="_blank">
          <img src={xstateLogo} className="logo xstate" alt="XState" />
        </a>
      </div>
      <h1>7GUIs counter</h1>
      <p>From the <a href="https://eugenkiss.github.io/7guis/tasks#counter">7GUIs Counter task</a>, using Vite + React + XState + TS.</p>
      <div className="card">
      <p aria-live='polite'>Count is <strong>{state.context.count}</strong>.</p>
      <p><button onClick={() => send({ type: 'INCREMENT' })}>Count</button></p>
      </div>
    </>
  )
}

export default App
