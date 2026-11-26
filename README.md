# NextRole

A web application for managing and tracking job applications in one place.

**NextRole** is designed to help job seekers organize their job search, keep track of application progress, manage important job information, and get a clear overview of their applications.

The project is being developed incrementally, starting with a simple dashboard and application tracking system before introducing a database, authentication, analytics, and browser extension functionality.

![CI](https://github.com/Luka2Lkay/NextRole/actions/workflows/ci.yml/badge.svg)

## Project Status

**Version 1 — In Development**

The current version focuses on building the core dashboard and applicationmanagement experience.

## Core Features

### Dashboard

Provides an overview of the user's job search, including:

- Total applications
- Recent applications
- Applications submitted
- Application status breakdown

### Application Tracking

Users will be able to:

- Save job opportunities
- Add new applications
- Track application status
- Store company and position details
- Add notes
- Store job URLs
- View individual application details

### Application Status

Applications can move through different stages:

**_Saved -> Applied -> Interview -> Offer/Rejected_**

### Tech Stack

- Next.js
- Tailwind
- TypeScript
- React
- Clerk
- Prisma
- PostgreSQL
- Neon

### Project Structure

```
├──app/
|   ├──(auth)/
|   |   ├──sign-in/
|   |   |   └──[[...sign-in]]/
|   |   |      └──page.tsx
|   |   └──sign-up/
|   |      └──[[...sign-up]]/
|   |         └──page.tsx
|   ├──actions/
|   |   └──applications.ts
|   ├──api/
|   |   └──applications/
|   |      └──route.ts
|   ├──dashboard/
|   |   ├──analytics/
|   |   |   └──page.tsx
|   |   ├──applications/
|   |   |   ├──[id]/
|   |   |   |   └──page.tsx
|   |   |   ├──new/
|   |   |   |   └──page.tsx
|   |   |   └──page.tsx
|   |   ├──layout.tsx
|   |   └──page.tsx
|   ├──favicon.ico
|   ├──globals.css
|   ├──layout.tsx
|   └──page.tsx
├──components/
|   ├──dashboard/
|   |   ├──Footer.tsx
|   |   ├──Navbar.tsx
|   |   ├──RecentApplications.tsx
|   |   ├──StatsCard.tsx
|   |   └──StatusChart.tsx
|   └──home/
|      ├──Features.tsx
|      ├──Footer.tsx
|      ├──Hero.tsx
|      └──Navbar.tsx
├──lib/
|   ├──data/
|   |   ├──applications.ts
|   |   └──features.ts
|   └──validations/
|      └──application.ts
├──prisma/
|   ├──contract.d.ts
|   ├──contract.json
|   ├──contract.prisma
|   └──db.ts
└──scripts/
   ├──data/
   |   └──technologies.json
   └──generate_readme.js

```

### Getting Started

Clone the repository and install the dependencies:

```
git clone git@github.com:Luka2Lkay/NextRole.git

cd NextRole

npm install
```

Start the development server:

```
npm run dev
```

Open:

**_http://localhost:3000_**

## License

This is currently a personal development project.
