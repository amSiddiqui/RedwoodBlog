import {
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
  Grid,
  Typography,
} from '@mui/material'
import type { ArticlesQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ArticlesQuery {
    articles: postSummaries {
      id
      title
      summary
    }
  }
`

export const Loading = () => (
  <Grid container spacing={2}>
    {Array.from(new Array(3)).map((_, index) => (
      <Grid key={index} item xs={12} sm={6} md={4}>
        <Skeleton variant="rectangular" height={200} />
      </Grid>
    ))}
  </Grid>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <Grid container spacing={2}>
      {articles.map((article) => (
        <Grid item xs={12} sm={6} md={4} key={article.id}>
          <Link
            to={routes.article({ id: article.id })}
            style={{ textDecoration: 'none' }}
          >
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {article.summary} ...
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
