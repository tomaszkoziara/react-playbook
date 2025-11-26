import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import './__root.css'

const RootLayout = () => (
  <>
    <div className="link-container">
      <Link to="/e01">
        E01 (useState)
      </Link>
      <Link to="/e02">
        E02 (useEffect)
      </Link>
      <Link to="/e03">
        E03
      </Link>
      <Link to="/e04">
        E04
      </Link>
      <Link to="/e05">
        E05
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })