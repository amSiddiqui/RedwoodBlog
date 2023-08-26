import { Grid, Typography } from '@mui/material'
import moment from 'moment'
import type { Post } from 'types/graphql'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  const formattedDate = moment(article.createdAt).format('MMM D, YYYY')
  return (
    <Grid container justifyContent="center" mt={4}>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" component="h1" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="caption" component="div" gutterBottom>
          {formattedDate}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          {article.body}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Article
