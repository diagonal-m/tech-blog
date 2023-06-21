import Container from './container'
import cn from 'classnames'
import { BLOG_NAME } from '../lib/constants'


type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {BLOG_NAME}
        </div>
      </Container>
    </div>
  )
}

export default Alert
