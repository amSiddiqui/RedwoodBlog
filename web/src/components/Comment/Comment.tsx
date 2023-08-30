import moment from 'moment'

interface Props {
  comment: {
    name: string
    createdAt: string
    body: string
  }
}

const Comment = ({ comment }: Props) => {
  const formattedDate = moment(comment.createdAt).format('D MMMM YYYY')
  return (
    <div>
      <h2>{comment.name}</h2>
      <time dateTime={comment.createdAt}>{formattedDate}</time>
      <p>{comment.body}</p>
    </div>
  )
}

export default Comment
