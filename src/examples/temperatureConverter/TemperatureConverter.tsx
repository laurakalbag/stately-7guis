import { useMachine } from '@xstate/react';
import { temperatureConverterMachine } from './temperatureConverterMachine';
import './temperatureConverter.css';

export default function TemperatureConverter() {
  const [state, send] = useMachine(temperatureConverterMachine);

  const { tempC, tempF } = state.context;

  return (
    <>
      <h1>7GUIs temperature converter</h1>
      <p className="description">From the <a href="https://eugenkiss.github.io/7guis/tasks#temp">7GUIs Temperature converter task</a>, using Vite + React + XState + TS.</p>
      <div className="example">
        <form id="tempConverter">
            <div className="celsius" aria-live="polite" aria-atomic="true">
            <label htmlFor="celsius">
            Celsius
            </label>
                <input
                type="number"
                id="celsius"
                value={tempC ?? ''}
                onChange={(e) => {
                    send({ type: 'CELSIUS', value: e.target.value });
                }}
                placeholder="0"
                />
            </div>
            <div aria-label="is equal to">=</div>
            <div className="fahrenheit" aria-live="polite" aria-atomic="true">
            <label htmlFor="fahrenheit">
                Fahrenheit
                </label>
                <input
                    type="number"
                    id="fahrenheit"
                    value={tempF ?? ''}
                    onChange={(e) => {
                    send({ type: 'FAHRENHEIT', value: e.target.value });
                    }}
                    placeholder="32"
                />
            </div>
        </form>
      </div>
    </>
  )
}