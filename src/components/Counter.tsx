import {useDispatch, useSelector } from "react-redux"
import { RootState } from "../rtk/store"
import {counterSlice} from '../rtk/counter/counterSlice.ts';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

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
