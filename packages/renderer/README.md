# @hpcreery/tracespace-renderer

[![npm][npm badge]][npm package]

Render [@hpcreery/tracespace-plotter][] image trees as SVGs. Part of the [tracespace][] collection of PCB visualization tools.

This module is one part of the tracespace render pipeline, and you may not need to use it directly. See [@tracespace/core][] to integrate the full render pipeline into your project.

```shell
npm install @hpcreery/tracespace-renderer@next
```

[tracespace]: https://github.com/tracespace/tracespace
[@hpcreery/tracespace-plotter]: ../plotter
[@tracespace/core]: ../core
[npm package]: https://www.npmjs.com/package/@hpcreery/tracespace-renderer/v/next
[npm badge]: https://img.shields.io/npm/v/@hpcreery/tracespace-renderer/next?style=flat-square

## usage

```js
import fs from 'node:fs/promises'
import {toHtml} from 'hast-util-to-html'

import {parse} from '@hpcreery/tracespace-parser'
import {plot} from '@hpcreery/tracespace-plotter'
import {render} from '@hpcreery/tracespace-renderer'

const gerberContents = await fs.readFile('gerber.gbr', 'utf-8')
const syntaxTree = parse(gerberContents)
const imageTree = plot(syntaxTree)
const image = render(imageTree)

await fs.writeFile('render.svg', toHtml(image), 'utf-8)
```
