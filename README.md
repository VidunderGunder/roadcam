# Teleplan Globe Assignment <!-- omit in toc -->


## Table of Contents <!-- omit in toc -->

- [Task](#task)
  - [Mandatory](#mandatory)
  - [Bonus](#bonus)
  - [Resources](#resources)
- [Stack](#stack)
  - [Project Architecture](#project-architecture)
- [TODO](#todo)

## Task

Create a small web application showing road camera information.

### Mandatory

- [x] Create an Express + Node JS app serving a simple single page web application
- [x] Get a MapBox development access token and add MapBox to your project
- [x] Download the data file (see resources below) and add it to your project
- [x] Download the icon file (see resources below) and add it to your project
- [ ] Add a marker for every road camera in the map view by loading them using a fetch GET
request from an express HTTP endpoint
- [ ] Clicking a camera in the map should display information in a popup

### Bonus

- [ ] Store and fetch the camera locations from a Mongo DB database
- [ ] Add a search field that displays a filtered list of cameras based on name
- [ ] Make the list sorted by distance to the user’s current location

### Resources

- [Road cameras geoJSON](https://www.dropbox.com/sh/5cibj2j7idvuynw/AACxDaarpU0EI1GR-bG8xXoga?dl=0)
- [Road camera icon](https://www.dropbox.com/s/kvvpk3rq57jdskd/camera%402x.png?dl=0)

## Stack

All proposals will be using [TypeScript](https://www.typescriptlang.org/) where possible (some configuration files may be omitted).

---


🚫 **~~Vanilla [React](https://reactjs.org/) + [Node](https://docs.expo.io/workflow/web/) with [Express](https://expressjs.com/)~~**

~~Using [`create-react-app` with TypeScript template](https://create-react-app.dev/docs/adding-typescript/).~~

- ~~Instant deployment and hosting using [Vercel](https://vercel.com/)~~
- ~~[Supports Unity3D with API](https://www.npmjs.com/package/react-unity-webgl)~~

---

✅ **[NEXT](https://nextjs.org/) with [Express Middleware](https://nextjs.org/docs/api-routes/api-middlewares)**

- Instant deployment and hosting using [Vercel](https://vercel.com/)
- Server Side Rendering (SSR) out-of-the-box
- Static Site Generation (SSG) out-of-the-box
- Simple routing 
- [Supports Unity3D with API](https://www.npmjs.com/package/react-unity-webgl)  
([SSR workaround available](https://github.com/jeffreylanters/react-unity-webgl/issues/139#issuecomment-790525055) and [SSR is in the pipeline](https://github.com/jeffreylanters/react-unity-webgl/issues/139#issuecomment-790476259))

_NEXT is a product of Vercel, so implementation may be more stable and developer friendly than other alternatives_

---

🚫 **~~[Expo](https://expo.io/) + [Node](https://docs.expo.io/workflow/web/) with [Express](https://expressjs.com/)~~**

~~Using [React Native for Web](https://docs.expo.io/workflow/web/).~~

- ~~Instant deployment and hosting using [Vercel](https://vercel.com/)~~
- ~~[Supports Unity3D view only](https://www.npmjs.com/package/react-unity-webgl)~~
~~_API between Unity3D and the different platforms can be done, but requires native implementations for all platforms._~~
- ~~Native Apps for iOS and Android using the same codebase~~

---

I went with NEXT, as it cuts resources spent on development, scalability and deployment to a minimum. It has lots of nice-to-have features, like server-side rendering and static site generation out-of-the-box.

It might seem like overkill for a single page application, but given it's as easy to setup as a vanilla React app (if not easier) combined with Vercel's support for SSG and simple (and free) deployment, it makes sense.

React is more familiar to most devs compared to Expo/React Native, so we'll save some time getting them up and running.

PWAs are possible with this alternative, which allows for local app installation and offline support for all major operating systems and devices:

- Windows
- Linux
- Mac
- iOS (and iPadOS)\*
- Android

\*The only downside is PWAs are not yet allowed on the App Store (iOS), even though they are permitted elsewhere (e.g., Google Play and Windows Store). Users can still save the app to their iOS home screens, but full API access to the OS is missing.

This is likely to change when PWAs become more widespread, though, assuming antitrust laws are following suit.

Having all React-libraries at disposal is a huge plus (as opposed to React Native/Expo); especially the possibility to plugin Unity builds, in case we want to move map navigation or other features to Unity down the line.

### Project Architecture

The project will be a monorepo using [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), for scalability and reusability (or mostly because I've wanted to try it out for some time).

To enforce testable, reusable and documented components, all UI-elements must be created with [Storybook](https://storybook.js.org/).

As mentioned, TypeScript is enforced, and all shareable types should be shared (following the DRY-principle).
