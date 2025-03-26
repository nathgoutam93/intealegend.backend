/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SellersImport } from './routes/sellers'
import { Route as RegistrationsImport } from './routes/registrations'
import { Route as LoginImport } from './routes/login'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as BuyersImport } from './routes/buyers'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SellersRoute = SellersImport.update({
  id: '/sellers',
  path: '/sellers',
  getParentRoute: () => rootRoute,
} as any)

const RegistrationsRoute = RegistrationsImport.update({
  id: '/registrations',
  path: '/registrations',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const BuyersRoute = BuyersImport.update({
  id: '/buyers',
  path: '/buyers',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/buyers': {
      id: '/buyers'
      path: '/buyers'
      fullPath: '/buyers'
      preLoaderRoute: typeof BuyersImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/registrations': {
      id: '/registrations'
      path: '/registrations'
      fullPath: '/registrations'
      preLoaderRoute: typeof RegistrationsImport
      parentRoute: typeof rootRoute
    }
    '/sellers': {
      id: '/sellers'
      path: '/sellers'
      fullPath: '/sellers'
      preLoaderRoute: typeof SellersImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/buyers': typeof BuyersRoute
  '/dashboard': typeof DashboardRoute
  '/login': typeof LoginRoute
  '/registrations': typeof RegistrationsRoute
  '/sellers': typeof SellersRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/buyers': typeof BuyersRoute
  '/dashboard': typeof DashboardRoute
  '/login': typeof LoginRoute
  '/registrations': typeof RegistrationsRoute
  '/sellers': typeof SellersRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/buyers': typeof BuyersRoute
  '/dashboard': typeof DashboardRoute
  '/login': typeof LoginRoute
  '/registrations': typeof RegistrationsRoute
  '/sellers': typeof SellersRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/buyers'
    | '/dashboard'
    | '/login'
    | '/registrations'
    | '/sellers'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/buyers' | '/dashboard' | '/login' | '/registrations' | '/sellers'
  id:
    | '__root__'
    | '/'
    | '/buyers'
    | '/dashboard'
    | '/login'
    | '/registrations'
    | '/sellers'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BuyersRoute: typeof BuyersRoute
  DashboardRoute: typeof DashboardRoute
  LoginRoute: typeof LoginRoute
  RegistrationsRoute: typeof RegistrationsRoute
  SellersRoute: typeof SellersRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BuyersRoute: BuyersRoute,
  DashboardRoute: DashboardRoute,
  LoginRoute: LoginRoute,
  RegistrationsRoute: RegistrationsRoute,
  SellersRoute: SellersRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/buyers",
        "/dashboard",
        "/login",
        "/registrations",
        "/sellers"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/buyers": {
      "filePath": "buyers.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/registrations": {
      "filePath": "registrations.tsx"
    },
    "/sellers": {
      "filePath": "sellers.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
