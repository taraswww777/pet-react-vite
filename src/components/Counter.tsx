import {counterSlice} from '../rtk/counter/counterSlice.ts';
import {useAppDispatch, useAppSelector} from '../rtk/hooks.ts';

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
