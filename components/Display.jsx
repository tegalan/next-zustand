import { useInput } from "../store/input"

export default function Display() {
  const value = useInput(state => state.value)
  return (
    <div className="display: block">Output: {value}</div>
  )
}