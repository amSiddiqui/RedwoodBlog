import { Box, Container } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {/* MUI container */}
      <Container maxWidth="md">
        <Box my={4}>
          <ArticlesCell />
        </Box>
      </Container>
    </>
  )
}

export default HomePage
