# coh3-data-types-library

This library includes types and util functions that are reused in multiple coh3 related projects. 

## Get started

- Install dependencies: `yarn`

## Publishing
- make sure files are build using `yarn build`
- Commit changes
- To use the new components in other projects, create a tag on the newest commit
- Add the package to the dependencies list in the project in the package.json file 
```
"dependencies": {
    "coh3-data-types-library": "github:cohstats/coh3-data-types-library#<ENTER TAG HERE>"
}
```
e.g.
```
"dependencies": {
    "coh3-data-types-library": "github:cohstats/coh3-data-types-library#0.0.1"
}
```
- Install the package with ``yarn``

## Testing scripts

- `npm run typecheck` – checks validity of types
- `npm run lint` – lints package code
- `npm run jest` – package unit tests
- `npm run prettier:test` – checks package code formatting
