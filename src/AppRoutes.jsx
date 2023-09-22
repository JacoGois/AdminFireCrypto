import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { Layout } from './pages/Layout'
import { NotFoundPage } from './pages/NotFoundPage'

export const AppRoutes = () => (
  <Routes>
    {routes.map(route => {
      const { path, pageComponent, enabled = true, layoutComponent = Layout } = route
      const AppLayout = layoutComponent
      const PageComponent = pageComponent

      return (
        enabled && (
          <Route
            key={path}
            path={path}
            element={
              <AppLayout>
                <PageComponent />
              </AppLayout>
            }
          />
        )
      )
    })}
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
)
