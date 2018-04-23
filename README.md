# Introduction

These exercises are originally from [a workshop organized by Jane Street](https://blog.janestreet.com/learn-ocaml-nyc/) for teaching `OCaml` to programmers who work in other languages and who do not necessarily have experience with functional languages. [Link to the original repo](https://github.com/janestreet/learn-ocaml-workshop).

We updated the exercises to be useful for someone interested in learning Reason. [Reason](https://reasonml.github.io/) is a new syntax and toolchain powered by OCaml. Reason syntax and NPM/Yarn workflow will seem familiar to Javascript programmers.

# Setting Up

1. Install [reason-cli](https://reasonml.github.io/docs/en/global-installation.html) globally. The bundles are larger than 100MB and `npm` does not show progress while downloading.

2. The recommended editor is `VSCode` along with the [vscode-reasonml](https://github.com/reasonml-editor/vscode-reasonml) extension. If you prefer a different editor check the instructions for [other supported editors](https://reasonml.github.io/docs/en/editor-plugins.html)

3. Add the [Reason Tools](https://github.com/reasonml/reason-tools) browser extension. It works as a popup where you can copy code to convert between Reason and OCaml syntaxes. When you visit OCaml library documentation you can switch between viewing Reason/OCaml syntax.

4. Run `npm install`.

# Workflow

The exercises are ordered and can be found within `src/exercises` directory. Start with the first exercise - `src/exercises/01-introduction/introduction.re`.

After completing each exercise, run its test. For example for the second exercise, run the test as:

  ```
  node src/exercises/02-basic_types/basicTypes.bs.js
  ```

This `.bs.js` file is your Reason program `.re` compiled to Javascript. `.bs` stands for the [bucklescript compiler](https://bucklescript.github.io/). You should read the `.bs.js` file for each exercise and compare the Javascript output to the original Reason code. This will help you develop an intuition for the language very quickly.

## Comments

  1. Maybe introduce `|>` around Ex. 4 or 5?
  2. Ex. 6 says *The "_" pattern means "could be anything".*. Is that true? I thought `_` was just an unused binding ignored by the compiler.
  3. What's the *point* of Ex. 12? Introducing *infinity* and *neg_infinity*? Could do more, maybe?
  4. Did I miss the purpose of Ex. 13? What did this teach me?
  5. In Ex. 14, maybe add a hint that you can use `|` as separator to match multiple patterns?
  6. Ex. 15: _The signature for a tuple is written by separating all the types within the tuple by a *._ Wut? In OCaml, maybe?
  7. Ex. 15: Mention _destructuring_ at this point, maybe?
  8. Ex. 15: `add` function isn't tested.
  9. Ex. 16: Mention the term _punning_?
  10. The test at the end of Ex. 18 seems to bear little relation to its content.
