import { useEffect, useState } from 'react'
import ListLink from './ListLink'
import ListItemLoading from './ListItemLoading'

export default function Sidebar({ idPost }: { idPost: string }) {
  const [data, setData] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const getData = async () => {
    const posts = await fetch(
      `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=10&orderBy="$key"`
    )
    const data = await posts.json()
    setData(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <aside>
        <ul className="grid grid-row-[10] h-[calc(100vh-60px)]">
          {isLoading ? (
            <>
              {[...Array(10)].map((_, i) => (
                <section
                  key={i}
                  className={`p-4 ${i < 9 && 'border-b-gray-400 border-b'}`}
                >
                  <ListItemLoading />
                </section>
              ))}
            </>
          ) : (
            <>
              {data.map((id, index) => (
                <ListLink key={id} id={id} idPost={idPost} index={index} />
              ))}
            </>
          )}
        </ul>
      </aside>
    </div>
  )
}
