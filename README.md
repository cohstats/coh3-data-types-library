# coh3-data-types-library

This library includes all Mantine React components that are reused in multiple cohstats projects. 

Please only include stateless components which are used for Rendering UI elements!

## Get started

- Install dependencies: `yarn`

## Publishing

- Commit changes
- During commit new dist files will be build
- Commit the dist files too
- To use the new components in other projects, create a tag on the newest commit
- Add the package to the dependencies list in the project in the package.json file 
```
"dependencies": {
    "coh-stats-components": "github:cohstats/coh-stats-components#<ENTER TAG HERE>"
}
```
e.g.
```
"dependencies": {
    "coh-stats-components": "github:cohstats/coh-stats-components#0.0.1"
}
```
- Install the package with ``yarn``

## Testing scripts

- `npm run typecheck` – checks validity of types
- `npm run lint` – lints package code
- `npm run jest` – package unit tests
- `npm run prettier:test` – checks package code formatting
