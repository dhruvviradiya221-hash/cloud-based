# DriveFlow Cloud Storage MVP

A Google Drive-inspired storage dashboard built with React as the frontend foundation for the Java + React cloud storage project specification.

## Project Goal

Build a resume-ready MVP for a cloud-based file storage system with:
- secure user authentication
- folder organization
- file upload and download
- sharing with viewer/editor roles
- public share links
- trash and restore
- search and filtering

## Tech Stack

Frontend:
- React
- Custom CSS
- Create React App

Backend (to be added):
- Java 17+
- Spring Boot 3
- Spring Security + JWT
- PostgreSQL
- AWS S3 or Supabase Storage

## Current UI Included

- Sidebar navigation
- Search panel
- Workspace summary cards
- File listing with access badges
- Responsive layout

## Suggested Backend Structure

```text
backend/
  src/main/java/com/cloudstorage/
    controller/
    service/
    repository/
    model/
    dto/
    security/
    config/
  src/main/resources/
    application.yml
  pom.xml
```

## Suggested API Modules

- Auth: register, login, me
- Files: init upload, complete upload, metadata, delete
- Folders: create and fetch hierarchy
- Sharing: share files and public links
- Search: search by filename, type, and tags

## Run Locally

```bash
npm install
npm start
```

Then open http://localhost:3000.

## Deployment Plan

- Frontend: Vercel or Netlify
- Backend: Render, Railway, or AWS EC2
- Database: Supabase or AWS RDS
- Storage: AWS S3

## Next Milestones

1. Add login and signup pages
2. Connect frontend to Spring Boot REST API
3. Add drag-and-drop upload flow
4. Implement share modal and permissions UI
5. Add trash/restore flows and search filters
