/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AppLayoutImport } from './routes/_app-layout'
import { Route as IndexImport } from './routes/index'
import { Route as authVerificationImport } from './routes/(auth)/verification'
import { Route as authRegisterImport } from './routes/(auth)/register'
import { Route as authLoginAdminImport } from './routes/(auth)/login-admin'
import { Route as authLoginImport } from './routes/(auth)/login'
import { Route as AppLayoutAppIndexImport } from './routes/_app-layout/app/index'
import { Route as AppLayoutAppSellersImport } from './routes/_app-layout/app/sellers'
import { Route as AppLayoutAppRegistrationsImport } from './routes/_app-layout/app/registrations'
import { Route as AppLayoutAppBuyersImport } from './routes/_app-layout/app/buyers'

// Create/Update Routes

const AppLayoutRoute = AppLayoutImport.update({
  id: '/_app-layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const authVerificationRoute = authVerificationImport.update({
  id: '/(auth)/verification',
  path: '/verification',
  getParentRoute: () => rootRoute,
} as any)

const authRegisterRoute = authRegisterImport.update({
  id: '/(auth)/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const authLoginAdminRoute = authLoginAdminImport.update({
  id: '/(auth)/login-admin',
  path: '/login-admin',
  getParentRoute: () => rootRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  id: '/(auth)/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AppLayoutAppIndexRoute = AppLayoutAppIndexImport.update({
  id: '/app/',
  path: '/app/',
  getParentRoute: () => AppLayoutRoute,
} as any)

const AppLayoutAppSellersRoute = AppLayoutAppSellersImport.update({
  id: '/app/sellers',
  path: '/app/sellers',
  getParentRoute: () => AppLayoutRoute,
} as any)

const AppLayoutAppRegistrationsRoute = AppLayoutAppRegistrationsImport.update({
  id: '/app/registrations',
  path: '/app/registrations',
  getParentRoute: () => AppLayoutRoute,
} as any)

const AppLayoutAppBuyersRoute = AppLayoutAppBuyersImport.update({
  id: '/app/buyers',
  path: '/app/buyers',
  getParentRoute: () => AppLayoutRoute,
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
    '/_app-layout': {
      id: '/_app-layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppLayoutImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login-admin': {
      id: '/(auth)/login-admin'
      path: '/login-admin'
      fullPath: '/login-admin'
      preLoaderRoute: typeof authLoginAdminImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/register': {
      id: '/(auth)/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof authRegisterImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/verification': {
      id: '/(auth)/verification'
      path: '/verification'
      fullPath: '/verification'
      preLoaderRoute: typeof authVerificationImport
      parentRoute: typeof rootRoute
    }
    '/_app-layout/app/buyers': {
      id: '/_app-layout/app/buyers'
      path: '/app/buyers'
      fullPath: '/app/buyers'
      preLoaderRoute: typeof AppLayoutAppBuyersImport
      parentRoute: typeof AppLayoutImport
    }
    '/_app-layout/app/registrations': {
      id: '/_app-layout/app/registrations'
      path: '/app/registrations'
      fullPath: '/app/registrations'
      preLoaderRoute: typeof AppLayoutAppRegistrationsImport
      parentRoute: typeof AppLayoutImport
    }
    '/_app-layout/app/sellers': {
      id: '/_app-layout/app/sellers'
      path: '/app/sellers'
      fullPath: '/app/sellers'
      preLoaderRoute: typeof AppLayoutAppSellersImport
      parentRoute: typeof AppLayoutImport
    }
    '/_app-layout/app/': {
      id: '/_app-layout/app/'
      path: '/app'
      fullPath: '/app'
      preLoaderRoute: typeof AppLayoutAppIndexImport
      parentRoute: typeof AppLayoutImport
    }
  }
}

// Create and export the route tree

interface AppLayoutRouteChildren {
  AppLayoutAppBuyersRoute: typeof AppLayoutAppBuyersRoute
  AppLayoutAppRegistrationsRoute: typeof AppLayoutAppRegistrationsRoute
  AppLayoutAppSellersRoute: typeof AppLayoutAppSellersRoute
  AppLayoutAppIndexRoute: typeof AppLayoutAppIndexRoute
}

const AppLayoutRouteChildren: AppLayoutRouteChildren = {
  AppLayoutAppBuyersRoute: AppLayoutAppBuyersRoute,
  AppLayoutAppRegistrationsRoute: AppLayoutAppRegistrationsRoute,
  AppLayoutAppSellersRoute: AppLayoutAppSellersRoute,
  AppLayoutAppIndexRoute: AppLayoutAppIndexRoute,
}

const AppLayoutRouteWithChildren = AppLayoutRoute._addFileChildren(
  AppLayoutRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AppLayoutRouteWithChildren
  '/login': typeof authLoginRoute
  '/login-admin': typeof authLoginAdminRoute
  '/register': typeof authRegisterRoute
  '/verification': typeof authVerificationRoute
  '/app/buyers': typeof AppLayoutAppBuyersRoute
  '/app/registrations': typeof AppLayoutAppRegistrationsRoute
  '/app/sellers': typeof AppLayoutAppSellersRoute
  '/app': typeof AppLayoutAppIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AppLayoutRouteWithChildren
  '/login': typeof authLoginRoute
  '/login-admin': typeof authLoginAdminRoute
  '/register': typeof authRegisterRoute
  '/verification': typeof authVerificationRoute
  '/app/buyers': typeof AppLayoutAppBuyersRoute
  '/app/registrations': typeof AppLayoutAppRegistrationsRoute
  '/app/sellers': typeof AppLayoutAppSellersRoute
  '/app': typeof AppLayoutAppIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_app-layout': typeof AppLayoutRouteWithChildren
  '/(auth)/login': typeof authLoginRoute
  '/(auth)/login-admin': typeof authLoginAdminRoute
  '/(auth)/register': typeof authRegisterRoute
  '/(auth)/verification': typeof authVerificationRoute
  '/_app-layout/app/buyers': typeof AppLayoutAppBuyersRoute
  '/_app-layout/app/registrations': typeof AppLayoutAppRegistrationsRoute
  '/_app-layout/app/sellers': typeof AppLayoutAppSellersRoute
  '/_app-layout/app/': typeof AppLayoutAppIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/login'
    | '/login-admin'
    | '/register'
    | '/verification'
    | '/app/buyers'
    | '/app/registrations'
    | '/app/sellers'
    | '/app'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/login'
    | '/login-admin'
    | '/register'
    | '/verification'
    | '/app/buyers'
    | '/app/registrations'
    | '/app/sellers'
    | '/app'
  id:
    | '__root__'
    | '/'
    | '/_app-layout'
    | '/(auth)/login'
    | '/(auth)/login-admin'
    | '/(auth)/register'
    | '/(auth)/verification'
    | '/_app-layout/app/buyers'
    | '/_app-layout/app/registrations'
    | '/_app-layout/app/sellers'
    | '/_app-layout/app/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppLayoutRoute: typeof AppLayoutRouteWithChildren
  authLoginRoute: typeof authLoginRoute
  authLoginAdminRoute: typeof authLoginAdminRoute
  authRegisterRoute: typeof authRegisterRoute
  authVerificationRoute: typeof authVerificationRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppLayoutRoute: AppLayoutRouteWithChildren,
  authLoginRoute: authLoginRoute,
  authLoginAdminRoute: authLoginAdminRoute,
  authRegisterRoute: authRegisterRoute,
  authVerificationRoute: authVerificationRoute,
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
        "/_app-layout",
        "/(auth)/login",
        "/(auth)/login-admin",
        "/(auth)/register",
        "/(auth)/verification"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_app-layout": {
      "filePath": "_app-layout.tsx",
      "children": [
        "/_app-layout/app/buyers",
        "/_app-layout/app/registrations",
        "/_app-layout/app/sellers",
        "/_app-layout/app/"
      ]
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.tsx"
    },
    "/(auth)/login-admin": {
      "filePath": "(auth)/login-admin.tsx"
    },
    "/(auth)/register": {
      "filePath": "(auth)/register.tsx"
    },
    "/(auth)/verification": {
      "filePath": "(auth)/verification.tsx"
    },
    "/_app-layout/app/buyers": {
      "filePath": "_app-layout/app/buyers.tsx",
      "parent": "/_app-layout"
    },
    "/_app-layout/app/registrations": {
      "filePath": "_app-layout/app/registrations.tsx",
      "parent": "/_app-layout"
    },
    "/_app-layout/app/sellers": {
      "filePath": "_app-layout/app/sellers.tsx",
      "parent": "/_app-layout"
    },
    "/_app-layout/app/": {
      "filePath": "_app-layout/app/index.tsx",
      "parent": "/_app-layout"
    }
  }
}
ROUTE_MANIFEST_END */
