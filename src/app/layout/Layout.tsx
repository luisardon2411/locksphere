
interface LayoutProps {
    children: React.ReactNode | JSX.Element[]
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="h-screen w-full font-Lato bg-gradient-to-r from-sky-200 to-sky-50">
        { children }
    </main>
  )
}

export default Layout