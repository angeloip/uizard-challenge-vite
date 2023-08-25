import { Link } from 'react-router-dom'
import ListItem from './ListItem'
import { useState } from 'react'

export default function ListLink({
  id,
  idPost,
  index
}: {
  id: number
  idPost: string
  index: number
}) {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <li
      className={`p-4 ${index < 9 && 'border-b-gray-400 border-b'} ${
        idPost === id.toString() && !isLoading && 'bg-yellow-500 text-black'
      }`}
    >
      <Link to={`/${id}`}>
        <ListItem id={id} isLoading={isLoading} setIsLoading={setIsLoading} />
      </Link>
    </li>
  )
}
