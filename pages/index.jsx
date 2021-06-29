import Display from '../components/Display'
import Input from '../components/Input'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <Input />
      <Display />
      <Link href="/display">Display page</Link>
    </div>
  )
}
