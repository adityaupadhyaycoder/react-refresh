## Transitive Dependency

A transitive dependency occurs when a module or package depends on another module indirectly through one or more intermediate dependencies. In other words, if package A depends on package B, and package B depends on package C, then package A has a transitive dependency on package C. Managing transitive dependencies is important to ensure compatibility, avoid conflicts, and maintain security in software projects.

## Parcel

- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching algorithm (written in c++)
- Caching (faster build)
- Image optimisation
- Minification
- Bundling
- Compress
- Consistent hashing
- Code splitting
- Differential bundling (support for the older browser)
- Diagnostic
- Error handling
- https
- Tree shaking (remove unused code)
- Different dev and prod bundles

## BrowserList

Browserslist is a configuration in `package.json` that specifies which browsers your project should support. Tools like Babel and Autoprefixer use this list to determine which JavaScript and CSS features need to be transpiled or prefixed for compatibility. By defining a Browserslist, you ensure your app works consistently across the specified browsers and versions.

**Example:**

```json
"browserslist": [
    ">0.2%",
    "not dead",
    "not op_mini all"
]
```

# npm start == npm run start

it is only reserverd for the start, we dont need to use run

# JSX

JSX is not html in JS, it is html or XML like syntax.

# Parcel vs Babel

## 📦 Parcel

**Definition:**  
Parcel is a zero-configuration web application bundler and development server.

**Main Job:**

- Bundles all files in the project (JS, CSS, HTML, images, etc.)
- Automatically handles hot reloading and file watching
- Optimizes the final app for production (minification, tree-shaking, etc.)
- Starts a development server to preview the app in the browser

---

## 🔁 Babel

**Definition:**  
Babel is a JavaScript compiler (transpiler) used to convert modern JavaScript (ES6+) and JSX into browser-compatible JavaScript (ES5).

**Main Job:**

- Converts JSX to `React.createElement()` syntax
- Transforms ES6+ features (like arrow functions, classes, async/await) into ES5
- Ensures compatibility with older browsers
- Works with bundlers like Parcel, Webpack, etc.

---

# Functional Component 
- A JS function which returns JSX or React Element;