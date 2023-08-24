import { AppBar, Button, Toolbar, Typography } from '@mui/material'

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
                fontFamily: 'Dancing Script, cursive',
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
          </Toolbar>
        </AppBar>
      </header>

      <main>{children}</main>
    </>
  )
}

export default BlogLayout
