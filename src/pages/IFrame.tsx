import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostLoading from '../components/PostLoading'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default function IFrame() {
  const { idPost } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<{
    title: string
    url: string
    by: string
  } | null>(null)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      await sleep(Math.random() * 3000)
      const posts = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${idPost}.json?print=pretty`
      )
      const data = await posts.json()
      setData(data)
      setIsLoading(false)
    }
    getData()
  }, [idPost])

  if (isLoading) {
    return <PostLoading />
  }

  return (
    <iframe
      className="h-full w-full"
      src={data?.url}
      title={data?.title}
    ></iframe>
  )
}
