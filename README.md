# Sales Dashboard Application

## Project Overview

This project is a **Sales Analytics Dashboard** built using **Next.js 15**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Recharts**.

The application displays yearly sales analytics for **2022, 2023, and 2024** using interactive charts and dashboard statistics. The project demonstrates frontend development concepts such as API integration, reusable components, data visualization, filtering, and responsive design.

---
## Project Live Link
https://sales-dashboard-pig23fho0-astershan01-gmailcoms-projects.vercel.app/dashboard

---

## Technologies Used

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Recharts
- Git & GitHub

---

## Features Implemented

### 1. Sales Dashboard

Created a dashboard page that displays sales analytics for multiple years.

Implemented:

- Sales dashboard page
- Responsive layout
- Dashboard header section

---

### 2. Data Visualization

Implemented multiple chart types using **Recharts**.

Available charts:

- Bar Chart
- Line Chart
- Pie Chart

Users can switch between chart types dynamically.

---

### 3. Sales Statistics Cards

The dashboard calculates and displays summary statistics.

Implemented:

- Total Sales
- Average Sales
- Best Performing Month
- Number of Months Above Threshold

---

### 4. Filter System

Created an interactive filter panel allowing users to:

- Select year (2022, 2023, 2024)
- Set custom sales threshold
- Switch chart type

---

### 5. API Integration

Created an API route using Next.js instead of directly importing data into components.

API Endpoint:

```text
/api/sales
```

Example:

```text
/api/sales?year=2024
```

This simulates backend integration and allows future scalability.

---

### 6. Reusable Component Architecture

The project uses reusable components for maintainability.

Components created:

- DashboardCard
- SalesChart
- FilterPanel
- ChartSwitcher
- ThresholdInput
- YearSelector
- StatsCards

---

### 7. Mock Sales Data

Used realistic mock monthly sales data for:

- 2022
- 2023
- 2024

Stored in:

```text
src/lib/salesData.ts
```

The data simulates retail sales performance.

---
# Sales Dashboard Application

## Project Preview

### Dashboard Overview

<img width="499" height="597" alt="Screenshot 2026-06-27 at 00 00 44" src="https://github.com/user-attachments/assets/953680a7-3b4c-4241-987c-d2c80be8fb65" />


---

### Filters Section

<img width="507" height="182" alt="Screenshot 2026-06-27 at 00 02 02" src="https://github.com/user-attachments/assets/f5e74f23-2b72-4900-97c6-55d1994f763e" />

---

### Bar Chart Visualization
<img width="506" height="344" alt="Screenshot 2026-06-27 at 00 02 31" src="https://github.com/user-attachments/assets/cccd9bae-148d-46d0-a7f1-fd062ec1ec77" />

---
### Line Chart Visualization
<img width="506" height="344" alt="Screenshot 2026-06-27 at 00 03 04" src="https://github.com/user-attachments/assets/c13edaae-ab09-4042-88ff-4f016303dfdf" />

---
### pie Chart Visualization
<img width="506" height="344" alt="Screenshot 2026-06-27 at 00 03 35" src="https://github.com/user-attachments/assets/c84be03d-2008-49ff-967f-8bcbd58f0b4e" />



---

## Project Overview

This project is a Sales Analytics Dashboard built using Next.js 15...
## Enhancements Implemented

The assignment required additional enhancements.

Completed:

### Custom Filter Input

Implemented a custom threshold input where users can define minimum sales value.

Example:

```text
50000
```

The dashboard calculates how many months exceed the threshold.

---

### API Integration

Created API route:

```text
/api/sales
```

This simulates backend communication instead of hardcoded frontend data.

---

### Multiple Chart Types

Implemented:

- Bar Chart
- Line Chart
- Pie Chart

Users can dynamically switch chart types.

---

## Project Structure

```text
src/
 ├── app/
 │    ├── api/
 │    │    └── sales/
 │    │         route.ts
 │    │
 │    ├── dashboard/
 │    │     page.tsx
 │    │
 │    └── page.tsx
 │
 ├── components/
 │    ├── DashboardCard.tsx
 │    ├── SalesChart.tsx
 │    ├── StatsCards.tsx
 │    ├── FilterPanel.tsx
 │    ├── YearSelector.tsx
 │    ├── ThresholdInput.tsx
 │    └── ChartSwitcher.tsx
 │
 └── lib/
      ├── salesData.ts
      └── utils.ts
```

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/SalesDashboard.git
```

### Move into project folder

```bash
cd SalesDashboard
```

### Install dependencies

Using pnpm:

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Application runs on:

```text
http://localhost:3000
```

Dashboard page:

```text
http://localhost:3000/dashboard
```

---

## Installed Packages

```bash
pnpm add recharts
pnpm add clsx
pnpm add tailwind-merge
pnpm add class-variance-authority
pnpm add @radix-ui/react-slot
```

Installed shadcn components:

```bash
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add select
```

---

## What I Did In This Project

In this project I:

- Built a sales analytics dashboard using Next.js 15
- Implemented reusable React components
- Used TypeScript for type safety
- Created API routes using Next.js backend features
- Integrated Recharts for data visualization
- Added chart switching functionality
- Added sales threshold filtering
- Built summary statistic cards
- Used shadcn/ui for clean reusable UI components
- Managed project version control using Git and GitHub

---


## Author

Developed by:

**Thuushan Phyoe**
