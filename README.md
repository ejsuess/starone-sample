# Liz's Test Edge Delivery Service Project
This is a test project used for training on the new Edge Delivery Service. Training can be found here: https://solutionpartners.adobe.com/training/learning_program/learningProgram116495.html

## Environments
- Preview: [https://main--aem-eds-training--ejsuess.aem.page/](https://main--aem-eds-training--ejsuess.aem.page/)
- Live: [https://main--aem-eds-training--ejsuess.aem.live/](https://main--aem-eds-training--ejsuess.aem.live/)

## Index representation of pages:
https://admin.hlx.page/index/ejsuess/aem-eds-training/<branch>/<path>
Real Example: https://admin.hlx.page/index/ejsuess/aem-eds-training/main/index

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the [`aem-block-collection`](https://github.com/adobe/aem-block-collection/tree/main) template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)

## Block Examples

https://sidekick-library--aem-block-collection--adobe.aem.page/tools/sidekick/library.html?plugin=blocks