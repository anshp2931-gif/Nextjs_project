# Campus Student Directory

A Next.js App Router project to practice routing, dynamic routes, nested routes, and layouts.

## Routes

- `/` : Student listing page with search and department filtering
- `/students/[id]` : Dynamic student profile page
- `/departments` : Departments listing page
- `/departments/[dept]/[specialization]` : Nested department specialization page
- `not-found.tsx` : 404 page for missing students or departments

## How to Run

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)
