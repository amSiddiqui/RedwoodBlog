import { Box } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Box>
        <ArticlesCell />
      </Box>
    </>
  )
}

export default HomePage
