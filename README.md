# react-api-cascade-select

**React Cascading Dropdown** is a flexible component that allows developers to easily create multi-level dependent dropdowns.  
Supports static and async datasets, custom UI rendering, controlled/uncontrolled modes, TypeScript typing, and event callbacks for each selection stage.  
Perfect for integration in **React 18+** and **Next.js** projects.

---

## Features

- Dynamic multi-level cascading dropdowns (e.g., Grade → Course → Module)  
- Async fetching of options at each level  
- Fully typed for TypeScript users  
- Fully customizable styles and select props  
- Handles disabled states and dependencies between levels  

---

<img width="756" height="130" alt="Screenshot 2025-11-26 151540" src="https://github.com/user-attachments/assets/2755f903-12ad-49b0-8217-a84ded78765c" />

![Sequence 01_1 (1)](https://github.com/user-attachments/assets/67143baf-1ea0-4603-9ccf-9ccee366a06a)

## Installation

```bash
npm install react-api-cascade-select
# or
yarn add react-api-cascade-select

---------------------------------------------

## Usage


```javascript

// Example: Module Cascade (Grade → Course → Module)
const moduleCascadeLevels: CascadeLevel[] = [
  {
    name: "grade",
    label: "Grade",
    fetch: async () => await getGradeList(), 
    valueKey: "gradeId",
    labelKey: "gradeName",
  },
  {
    name: "course",
    label: "Course",
    dependsOn: "grade", 
    fetch: async (gradeId?: string) => {
      if (!gradeId) return [];
      return await getCourseByGradeId(gradeId);
    },
    valueKey: "id",
    labelKey: "courseName",
  },
  {
    name: "module",
    label: "Module",
    dependsOn: "course", 
    fetch: async (courseId?: string) => {
      if (!courseId) return [];
      return await getModules(courseId);
    },
    valueKey: "id",
    labelKey: "moduleName",
  },
];

<CascadeDropdown
  levels={moduleCascadeLevels}
  onChange={(values) => console.log(values)} 
  className="w-full"
  selectProps={{ className: "border p-2 rounded" }}
  selectStyle={{ minWidth: 200 }}
/>

);```




