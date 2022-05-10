# loader-needed

This is supposed to be an MRE to reproduce an issue with a similar Docusaurus tool.

The tool loads a Docusaurus configuration file in the current working directory and uses it to build and open a preview of the related content. Its main benefit is that it provides a page with all available routes where normally a 404 would occur, for easy debugging and previewing of available routes.

## Usage

To install dependencies, run:

```
yarn
```

To run the tool in the provided test module, run:

```
yarn workspace module start
```

This will run the tool in the module package and use its configuration to preview.
