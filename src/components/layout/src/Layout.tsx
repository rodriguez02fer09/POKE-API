import {ReactNode} from 'react'
import '../../layout/style/desktop.css'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return props.children
}

export default Layout
