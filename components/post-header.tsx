import DateFormatter from './date-formatter'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-4xl mx-auto">
        <div className="max-w-4xl mx-auto mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
