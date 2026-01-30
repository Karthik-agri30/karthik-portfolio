# Projects Section Implementation

## Overview
The ProjectsSection component fetches project data from an API, displays it responsively, and handles loading/error states gracefully with fallback to default projects.

## Components

### 1. **ProjectsSection.tsx** (Main Container)
The main section component that manages data fetching and state.

**Features:**
- Fetches projects from `https://api.karthikportfolio.in/api/projects`
- Uses `useEffect` + `useState` for data management
- Handles three states: **loading**, **error**, **success**
- Falls back to default projects on error
- 8-second timeout for API requests
- Responsive grid layout (1 col mobile → 3 cols desktop)

**Key Functions:**

#### `fetchProjects(): Promise<Project[]>`
```typescript
- Fetches data with AbortController for timeout handling
- Validates API response structure
- Handles network errors and timeouts gracefully
```

#### State Structure:
```typescript
interface ProjectsSectionState {
  projects: Project[];      // Array of project data
  loading: boolean;         // Loading state indicator
  error: string | null;     // Error message if any
}
```

### 2. **ProjectCard.tsx** (Individual Card Component)
Reusable card component for displaying individual projects.

**Features:**
- 3D perspective transform on mouse movement
- Image zoom effect on hover
- Action buttons (Live Demo, GitHub)
- Tag badges with smooth animations
- Depth indicators for visual feedback
- Responsive design
- Accessibility-friendly (aria-labels)

## Architecture

### Component Hierarchy
```
ProjectsSection
├── Header (Title + Description)
├── Loading State (Skeleton placeholders)
├── Error State (Alert message)
└── Projects Grid
    └── ProjectCard (×6 items)
        ├── Image with fallback
        ├── Action buttons
        └── Metadata (tags, description)
```

### Responsive Breakpoints
- **Mobile**: `grid-cols-1` (single column)
- **Tablet**: `md:grid-cols-2` (2 columns)
- **Desktop**: `lg:grid-cols-3` (3 columns)

## Error Handling

The implementation includes comprehensive error handling:

1. **Network Errors**: Catches fetch failures and timeouts
2. **API Errors**: Validates HTTP status codes and response structure
3. **Timeout**: 8-second timeout with AbortController
4. **Fallback**: Displays default projects when API fails
5. **User Feedback**: Error banner shows the actual error message

### Error States:
- ❌ Connection failures
- ❌ Invalid response format
- ❌ HTTP error codes (4xx, 5xx)
- ❌ Request timeout

## Data Structure

```typescript
interface Project {
  title: string;        // Project name
  description: string;  // Short description
  image: string;       // Image URL or Figma query
  tags: string[];      // Technology tags
  liveUrl: string;     // Demo/live link
  githubUrl: string;   // GitHub repository link
}
```

## Features

### Loading State
- 6 animated skeleton placeholders
- Pulse animation while loading
- Improves perceived performance

### Error State
- Red alert banner with icon
- Displays actual error message
- Shows fallback notice
- Users can see default projects

### Animations
- Staggered entrance animation (cards animate in sequence)
- Smooth 3D transforms on hover
- Image zoom effects
- Tag animations
- Fade transitions

## Best Practices Implemented

✅ **React Hooks**: Proper use of `useState`, `useEffect`  
✅ **TypeScript**: Full type safety with interfaces  
✅ **Memory Leaks**: Cleanup function to prevent state updates after unmount  
✅ **Error Handling**: Comprehensive try-catch with fallback  
✅ **Performance**: Optimized re-renders with proper dependencies  
✅ **Accessibility**: ARIA labels on interactive elements  
✅ **Responsive Design**: Mobile-first with Tailwind breakpoints  
✅ **Code Organization**: Separated concerns (fetch logic, UI, styling)  
✅ **Component Reusability**: ProjectCard as independent component  
✅ **User Experience**: Loading states, error messages, animations  

## Configuration

### API Endpoint
```typescript
const API_URL = 'https://api.karthikportfolio.in/api/projects';
const FETCH_TIMEOUT = 8000; // milliseconds
```

To change the API endpoint, modify `API_URL` in `ProjectsSection.tsx`.

## Styling

Uses **Tailwind CSS** with:
- Glassmorphism effects (backdrop-blur, opacity)
- Gradient backgrounds
- Responsive spacing and typography
- Dark theme colors (white/purple/cyan accents)
- Smooth transitions

## Dependencies

```json
{
  "motion/react": "^11.x",       // Framer Motion animations
  "lucide-react": "^latest",     // Icon library
  "react": "^18.x",              // React framework
  "typescript": "^5.x"           // Type checking
}
```

## Usage

The component is already integrated into your portfolio. It renders automatically when the page loads and handles all API communication transparently.

### Integration Example:
```tsx
import { ProjectsSection } from '@/app/components/ProjectsSection';

export function App() {
  return (
    <main>
      <ProjectsSection />
    </main>
  );
}
```

## Testing Checklist

- [ ] API fetches successfully and displays projects
- [ ] Loading state shows 6 skeleton placeholders
- [ ] Error state displays when API fails
- [ ] Fallback projects show if API is unreachable
- [ ] Cards animate on entrance
- [ ] 3D transform works on hover (desktop)
- [ ] Image zoom effect on hover
- [ ] Buttons are clickable and link correctly
- [ ] Tags display properly
- [ ] Responsive layout works (1 → 2 → 3 columns)
- [ ] Timeout works (8-second limit)
- [ ] No memory leaks on component unmount
