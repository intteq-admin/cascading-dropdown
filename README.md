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
    dependsOn: "grade", // depends on grade selection
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
    dependsOn: "course", // depends on course selection
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
  onChange={(values) => console.log(values)} // values: { grade?: string, course?: string, module?: string }
  className="w-full"
  selectProps={{ className: "border p-2 rounded" }}
  selectStyle={{ minWidth: 200 }}
/>

);```



![alt text](<Screenshot 2025-11-26 131802.png>)