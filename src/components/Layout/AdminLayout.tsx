import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AdminLayout = ({ children }: any) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
