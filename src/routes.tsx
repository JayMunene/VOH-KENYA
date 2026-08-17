import { createHashRouter } from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Leadership from './pages/Leadership'
import Missions from './pages/Missions'
import Programs from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import Fellowships from './pages/Fellowships'
import Partners from './pages/Partners'
import Membership from './pages/Membership'
import Altar from './pages/Altar'
import Give from './pages/Give'
import Blog from './pages/Blog'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

export const router = createHashRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'leadership', Component: Leadership },
      { path: 'missions', Component: Missions },
      { path: 'programs', Component: Programs },
      { path: 'programs/:id', Component: ProgramDetail },
      { path: 'fellowships', Component: Fellowships },
      { path: 'partners', Component: Partners },
      { path: 'membership', Component: Membership },
      { path: 'altar', Component: Altar },
      { path: 'give', Component: Give },
      { path: 'blog', Component: Blog },
      { path: 'admin', Component: Admin },
      { path: '*', Component: NotFound },
    ],
  },
])
