import {ReactNode} from 'react'
import '../../layout/style/desktop.css'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return props.children
}

export default Layout
