# PalmFit.Frontend.Web
This is the PalmFit Web Project
# Repository Description

This folder serves as the repository for the Palmfit-Admin frontend project

## Setup
Simply clone this repo on your pc, by typing out this command on your terminal.

- `git clone https://github.com/ddynamight/PalmFit.Frontend.Admin.git`
- Then type this command in your terminal `cd palmfit`.
- Then run `npm install` to install all the requisite dependencies.
- To start the servers just type `npm start` and it will start up the necessary server. Type `http://localhost:3000` in the browser to view the page.

## Contributing
1. Before working on any task, you are meant to pull the latest changes from the main branch, then create a separate branch to work on that particular task.
  `git pull upstream main` to pull from main branch, then `git checkout -b <BRANCH_NAME>` to create a new branch you're to work on.
2. When creating PR, link the issue you worked on to your PR and wait for it to be reviewed. Never merge on your own.

## Coding Guide

### Commits
  Git commits should follow the format:

  [file/method/function changed]: (Fixes #num | Refs #num  | Closes #Num) Your descriptive commit message
  Note: #num is a pull or issue number.

  For example:

  [Navbar]: Fixes #20 Add side-navbar

# React Guidelines

## Basic Rules
- Functional components only!
- Functions are declared with ES6 arrow function syntax.
- Only include one React component per file. Multiple stateless components are allowed however.
- Use JSX syntax only.

## Naming
- Extensions: Use .jsx for React components and files containing JSX.
- File names must be all lowercase and may be separated by dot . For example: `sidebar.jsx`
- Reference Naming: Use PascalCase for React components and camelCase for their instances.

## Indentation
  We use two spaces for indentation. If you use a code editor like vscode, you can set a default spaces to 2 instead of 4. We do not use Tab.

## Naming convention

### Class names
  Class, interface, record, and typedef names are written in UpperCamelCase e.g LoadAvatar. Type names are typically nouns or noun phrases. For example, Request.

### Method names
  Method names are written in lowerCamelCase `e.g addNum.` Names for private methods must start with a trailing underscore `e.g _startAddition`.

  Method names are typically verbs or verb phrases. For example, `sendRequest or _startProcess`. Getter and setter methods for properties are never required, but if they are used they should be named `getThing (or optionally isThing or hasThing for booleans)`, or `setThing(value)` for setters.

### Constant Names
  Constant names use `CONSTANT_CASE`: all uppercase letters, with words separated by underscores.

# Styling
- TailwindCSS is used for CSS styling.
  Styles are declared using Tailwind utility classes.
  E.g., `<div className="h-full flex flex-1 bg-blue-50"/>`
- HeadlessUI provides stock UI components.

### Tailwind
If you're new to Tailwind, instead of writing full length CSS styles you use shorthand descriptions of the styles.

For example, in rounding the top corners of an element, regular css would look like
`border-top-left-radius: 0.125rem; border-top-right-radius: 0.125rem;`

In tailwind this is easily written with `rounded-t-sm`
And you get to write the styles directly in your javascript so you don't have to deal with selectors, specificity etc.

Install the VSCode Tailwind extension to get suggestions and corrections on utility class names.

Check the TailwindCSS [Docs](https://tailwindcss.com/docs) for the full utility class list.

### Headless UI
Headless UI provides ready made components for use in building app UIs.
Read the [docs](https://headlessui.dev/) for more info.\

#### Usage
Import the required component from `@headlessui/react`

#### Styling
Headless components do not come styled out of the box. The components exposes render props you use to style them.
# palmfit
# palmfit
# palmfit
