import { ReactNode } from 'react'
import Navbar from './_components/navbar'

const Layout = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout