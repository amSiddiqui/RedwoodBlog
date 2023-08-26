import { AppBar, Button, Toolbar, Typography, Container } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              to={routes.home()}
              sx={{
                mr: 2,
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 'bold',
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              Redwood Blog
            </Typography>
            <Button component={Link} to={routes.home()} color="inherit">
              Home
            </Button>
            <Button component={Link} to={routes.about()} color="inherit">
              About
            </Button>
            <Button component={Link} to={routes.contact()} color="inherit">
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </header>

      <main>
        <Container sx={{ my: 4 }} maxWidth="md">
          {children}
        </Container>
      </main>
    </>
  )
}

export default BlogLayout
