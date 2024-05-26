import { useState } from 'react';
import Counter from './components/Counter';
import Stats from './components/Stats';

export default function App() {
  const [counters, setCounters] = useState(initialCounters);
  const handleIncrement = (counterId) => {
    const newCounter = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });

    setCounters(newCounter);
  };

  const handleDecrement = (counterId) => {
    const newCounter = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });

    setCounters(newCounter);
  };

  const totalCount = counters.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.value;
  }, 0);

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((counter) => (
          <Counter
            count={counter.value}
            key={counter.id}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
        <Stats totalCount={totalCount} />
      </div>
    </div>
  );
}
