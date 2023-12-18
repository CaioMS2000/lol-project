import Image from 'next/image'

export default async function Home() {
  const res = await fetch(process.env.URL + "/api")
  const data = await res.json()
  console.log(data)

  return (
    <div className="">{data}</div>
  )
}