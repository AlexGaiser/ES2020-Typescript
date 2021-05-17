# ES2020-Typescript

## Description

Set up for a project using Typescript and ES2020 features that compiles to ES5. Set up to run in a node environment. Includes an example tsonfig.json and build output compiled to ES5. Build folder contains examples of each feature when compiled to ES5 for reference on how features are compiled to be backwards compatible. This provides interesting insight into how each feature is implemented behind the scenes. Using the ES5 as the target for the TypeScript compiler allows all features except BigInto to be backwards compatible with all versions of Node. Some features cannot be compiled to ES5 and this is noted next to the example. 

Includes unit tests to demonstrate how each feature works. 

## Includes the following examples

- `BigInt` | available after Node 10.4.0
- `Nullish Coalescing`
- `Option Chaining` 
- `Promise.allSettled()` | available after Node 12.9.0


