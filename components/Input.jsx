import { useInput } from "../store/input"

export default function Input() {
  const value = useInput(state => state.value)
  const setValue = useInput(state => state.setValue)
  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}