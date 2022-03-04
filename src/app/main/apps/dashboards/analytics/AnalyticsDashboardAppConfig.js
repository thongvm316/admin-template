import { lazy } from "react"

const AnalyticsDashboardApp = lazy(() => import("./AnalyticsDashboardApp"))

const AnalyticsDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "apps/dashboards/analytics",
      element: <AnalyticsDashboardApp />,
    },
  ],
}

export default AnalyticsDashboardAppConfig