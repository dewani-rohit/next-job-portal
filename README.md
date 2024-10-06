# Job Portal

**Job Portal** is a comprehensive platform where users can either apply for posted jobs or post new job openings. Job postings must be verified by an admin before being visible to applicants, ensuring a quality experience for both recruiters and job seekers.

## Table of Contents

- [Live Demo](#live-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Featured](#features)
- [Technologies Used](#technologies-used)
- [License](#license)

## Live Demo

Check out the live application here: [Rad Jobs](https://rad-jobs.vercel.app/)

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/dewani-rohit/next-job-portal.git
cd next-job-portal
```

2. **Install dependencies**:

```bash
npm install
```

3. **Set up environment variables**: Create `.env` file in the root directory and add the following variables:

```bash
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
BLOB_READ_WRITE_TOKEN=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

4. **Run the development server**:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Usage

- Start the development server with `npm run dev`
- Build for production with `npm run build`
- Run ESLint checks with `npm run list`

## Features

The Job Portal offers a wide range of features for both job seekers and recruiters:

- **Next.js 14 Server Actions**: Harnesses the power of Next.js server-side actions for enhanced performance, delivering a responsive and scalable job application and management experience.

- **Job Browsing**: Users can browse through a list of job postings with detailed information such as job title, description, and requirements. This allows job seekers to explore various opportunities that fit their skills and interests.

- **Job Application Submission**: Job seekers can easily submit their applications for any posted job. The application process is streamlined, and applicants receive confirmation of their submission.

- **Job Posting for Recruiters**: Recruiters can post new job openings by providing essential information about the position. Once a job is submitted, it requires admin verification before it goes live on the platform.

- **Searching and Filtering with Pagination**: The platform includes an advanced search and filtering system, allowing users to filter job listings by various criteria such as location, job type, or industry. Pagination is implemented to ensure smooth navigation through large datasets.

## Technologies Used

- **Next.js** — React framework for server-side rendering and static site generation

- **TypeScript** — Strongly-typed JavaScript

- **TailwindCSS** — Utility-first CSS framework

- **Shadcn UI** — UI components and library

- **Vercel Postgres & Vercel Blob Storage** — Database and file storage services

- **Prisma** — ORM for interacting with the database

- **React Hook Form & Zod** — Form handling and schema validation

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
