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
        E02 (useEffect with and without dependencies)
      </Link>
      <Link to="/e03">
        E03 (useEffect mount and cleanup)
      </Link>
      <Link to="/e04">
        E04 (useRef)
      </Link>
      <Link to="/e05">
        E05 (useMemo)
      </Link>
      <Link to="/e06">
        E06 (useCallback)
      </Link>
      <Link to="/e07">
        E07 (useContext)
      </Link>
      <Link to="/e08">
        E08 (custom hook)
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })