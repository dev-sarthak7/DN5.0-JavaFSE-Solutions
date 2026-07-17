# WEEK5 — ReactJS Mandatory Hands-On Labs

19 independent Create-React-App style projects, one per lab document.
Every project is a self-contained folder with its own `package.json` —
`cd` into any lab, `npm install`, `npm start`.

| Folder | Lab topic | App name (per doc) | Port |
|---|---|---|---|
| `lab01-myfirstreact` | SPA basics, create-react-app setup | myfirstreact | 3000 |
| `lab02-studentapp` | Class components (Home/About/Contact) | StudentApp | 3000 |
| `lab03-scorecalculatorapp` | Function components, props, CSS | scorecalculatorapp | 3000 |
| `lab04-blogapp` | Lifecycle hooks: componentDidMount/componentDidCatch, fetch | blogapp | 3000 |
| `lab05-cohortdetailsapp` | CSS Modules styling | cohortdashboardapp | 3000 |
| `lab06-trainersapp` | React Router (BrowserRouter, Route, Link, useParams) | TrainersApp | 3000 |
| `lab07-shoppingapp` | Props between class components | shoppingapp | 3000 |
| `lab08-counterapp` | React state, constructor, setState | counterapp | 3000 |
| `lab09-cricketapp` | ES6: map, filter, arrow functions, destructuring, spread merge | cricketapp | 3000 |
| `lab10-officespacerentalapp` | JSX, React.createElement, inline CSS | officespacerentalapp | 3000 |
| `lab11-eventexamplesapp` | Event handling, `this`, synthetic events | eventexamplesapp | 3000 |
| `lab12-ticketbookingapp` | Conditional rendering (Guest vs User) | ticketbookingapp | 3000 |
| `lab13-bloggerapp` | 3 conditional rendering techniques | bloggerapp | 3000 |
| `lab14-employeecontextapp` | React Context API (createContext/useContext) | employeecontextapp | 3000 |
| `lab15-ticketraisingapp` | Controlled forms, handleSubmit | ticketraisingapp | 3000 |
| `lab16-mailregisterapp` | Form validation (name/email/password rules) | mailregisterapp | 3000 |
| `lab17-fetchuserapp` | Consuming REST APIs with fetch | fetchuserapp | 3000 |
| `lab18-cohorttestingapp` | Unit testing with Jest + Enzyme (shallow/mount/snapshot) | — | 3000 |
| `lab19-gitclientapp` | axios + Jest mocking (`jest.mock`) | gitclientapp | 3000 |

## How to run any lab

```bash
cd WEEK5/lab01-myfirstreact
npm install
npm start
```

Opens automatically at http://localhost:3000

## How to run tests (lab18, lab19)

```bash
cd WEEK5/lab18-cohorttestingapp
npm install
npm test
```

```bash
cd WEEK5/lab19-gitclientapp
npm install
npm test
```

## Notes on specific labs

- **lab05 / lab18 (Cohort dashboard)**: the original doc says "download and
  build the attached react application" — since that starter zip wasn't
  provided, I built a reasonable Cohort dashboard app to match the described
  requirements (CSS Module `box` class, `<dt>` tag styling, green/blue `<h3>`
  by status) rather than a real download. Swap in the actual starter app if
  your instructor provides one — the CSS Module and component logic will
  drop straight in.
- **lab06 (TrainersApp)**: uses React Router v6 syntax (`Routes`/`Route`
  `element` prop, `useParams`). If your course specifically teaches v5
  (`Switch`, `component=`), say so and I'll adjust — v6 is current best
  practice.
- **lab18 (Enzyme testing)**: Enzyme has no official adapter for React 18,
  so this project pins `react`/`react-dom` to `^16.14.0` to match
  `enzyme-adapter-react-16` exactly. This is the standard workaround; don't
  bump the React version in this one folder without also changing the
  adapter.
- **lab19 (axios + Jest mock)**: `jest.mock('axios')` auto-mocks the whole
  module; `axios.get.mockResolvedValue(...)` supplies the fake GitHub API
  response so the test never makes a real network call.
- All REST-consuming labs (04, 17, 19) require internet access at runtime
  (jsonplaceholder.typicode.com, api.randomuser.me, api.github.com
  respectively) since they're live public APIs, not mocked in the app code
  itself (only in the lab19 *test*).

## Requirements
- Node.js 18+ and npm
- Internet access to npmjs registry (first `npm install` per lab) and to
  the public APIs used in labs 4, 17, 19
