import { useDispatch, useSelector } from 'react-redux';
import Counter from './components/Counter';
import Stats from './components/Stats';
import { decrement, increment } from './features/counters/countersSlice';
import Posts from './components/Posts';

export default function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  const totalCount = counters.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Redux ToolKit and Redux Thunk
      </h1>

      <div className="flex flex-row flex-between">
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
        <Posts />
      </div>
    </div>
  );
}
