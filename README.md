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

