import MenuIcon from '@mui/icons-material/Menu'
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
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Stack,
} from '@mui/material'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const drawerWidth = 240
const navItems = ['Home', 'About', 'Contact']

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, logOut, currentUser } = useAuth()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Redwood Blog
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              to={routes[item.toLowerCase()]()}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const continer = window !== undefined ? () => window.document.body : undefined

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <header>
        <AppBar component="nav" position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              noWrap
              variant="h5"
              component={Link}
              to={routes.home()}
              sx={{
                fontFamily: "'Roboto', sans-serif",
                color: 'inherit',
                mr: 2,
                textDecoration: 'none',
                flexGrow: 1,
              }}
            >
              Redwood Blog
            </Typography>
            <Stack
              spacing={2}
              direction={'row'}
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  component={Link}
                  to={routes[item.toLowerCase()]()}
                  color="inherit"
                >
                  {item}
                </Button>
              ))}
            </Stack>
            {isAuthenticated && (
              <Box
                sx={{
                  mx: 3,
                }}
              >
                <Tooltip title="Open Settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar>
                      {currentUser.email.substring(0, 1).toUpperCase()}
                    </Avatar>
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
              </Box>
            )}
            {!isAuthenticated && (
              <Button
                sx={{
                  mx: 3,
                }}
                component={Link}
                to={routes.login()}
                color="inherit"
                variant="outlined"
              >
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={continer}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
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
