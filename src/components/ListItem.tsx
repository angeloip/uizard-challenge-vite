import { useEffect, useState } from 'react'
import ListItemLoading from './ListItemLoading'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default function ListItem({
  id,
  isLoading,
  setIsLoading
}: {
  id: number
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}) {
  const [data, setData] = useState<{
    title: string
    url: string
    by: string
  } | null>(null)

  useEffect(() => {
    const getData = async () => {
      await sleep(Math.random() * 3000)
      const posts = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      )
      const data = await posts.json()
      setData(data)
      setIsLoading(false)
    }
    getData()
  }, [id, setIsLoading])

  if (isLoading) {
    return <ListItemLoading />
  }

  return (
    <div className="grid h-[50px]">
      <p className="truncate">{data?.title}</p>
      <div className="flex items-center justify-between opacity-50">
        <p>{data?.by}</p>
        <p>Visit website {'>>'}</p>
      </div>
    </div>
  )
}
