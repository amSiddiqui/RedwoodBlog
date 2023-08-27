import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Container,
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, logOut } = useAuth()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <header>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                noWrap
                variant="h6"
                component={Link}
                gutterBottom={false}
                to={routes.home()}
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  background:
                    'linear-gradient(45deg, #FFA07A 30%, #FF6347 90%)', // Light to dark gray
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 'bold',
                  mr: 2,
                  textDecoration: 'none',
                }}
              >
                Redwood Blog
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Button component={Link} to={routes.home()} color="inherit">
                  Home
                </Button>
                <Button component={Link} to={routes.about()} color="inherit">
                  About
                </Button>
                <Button component={Link} to={routes.contact()} color="inherit">
                  Contact
                </Button>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                {isAuthenticated && (
                  <>
                    <Tooltip title="Open Settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem>
                        <Link to={routes.posts()}>
                          <Typography
                            sx={{ textDecoration: 'none', color: 'inherit' }}
                            textAlign={'center'}
                          >
                            Admin
                          </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={logOut}>
                        <Typography textAlign={'center'}>Logout</Typography>
                      </MenuItem>
                    </Menu>
                  </>
                )}
                {!isAuthenticated && (
                  <Button component={Link} to={routes.login()} color="inherit">
                    Login
                  </Button>
                )}
              </Box>
            </Toolbar>
          </Container>
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
