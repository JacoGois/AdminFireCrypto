import { Dashboard } from "./pages/Dashboard";
import { Financial } from "./pages/Financial";
import { Profile } from "./pages/Profile";

export const routes = [
  { path: '/', pageComponent: Dashboard },
  { path: '/financial', pageComponent: Financial },
  { path: '/profile', pageComponent: Profile },
]
