import { useMachine } from '@xstate/react';
import { skyConfig } from '../../machines/counterMachine.sky';
import './counter.css';

export default function Counter() {
  const [state, send] = useMachine(skyConfig.machine);

  return (
    <>
      <h1>Counter</h1>
      <p className="description">From the <a href="https://eugenkiss.github.io/7guis/tasks#counter">7GUIs Counter task</a>, using Vite + React + XState + TS.</p>
      <div className="example">
        <p aria-live='polite'>Count is <strong className='count'>{state.context.count}</strong>.</p>
        <p><button onClick={() => send({ type: 'INCREMENT' })}>Count</button></p>
      </div>
    </>
  )
}
