// @hpcreery/tracespace-plotter
// build abstract board images from @hpcreery/tracespace-parser ASTs
import type {GerberTree} from '@hpcreery/tracespace-parser'

import {fromGraphics as sizeFromGraphics} from './bounding-box'
import {getPlotOptions, PlotOptions} from './options'
import {createToolStore, Tool, ToolStore} from './tool-store'
import {createLocationStore, Location, LocationStore} from './location-store'
import {createGraphicPlotter, GraphicPlotter} from './graphic-plotter'
import {createTransformStore, ApertureTransform, TransformStore} from './aperture-transform-store'
import {IMAGE, ImageGraphic} from './tree'
import type {ImageTree} from './tree'

export * from './tree'
export * from './tool-store'
export * from './graphic-plotter'
export * from './graphic-plotter/plot-path'
export * from './graphic-plotter/plot-shape'
export * from './graphic-plotter/plot-macro'
export * from './graphic-plotter/plot-rect-path'
export * as BoundingBox from './bounding-box'
export {TWO_PI, positionsEqual} from './coordinate-math'

export function plot(tree: GerberTree): ImageTree {
  const plotOptions: PlotOptions = getPlotOptions(tree)
  const toolStore: ToolStore = createToolStore()
  const locationStore: LocationStore = createLocationStore()
  const transformStore: TransformStore = createTransformStore()
  const graphicPlotter: GraphicPlotter = createGraphicPlotter(tree.filetype)
  const children: ImageGraphic[] = []

  for (const node of tree.children) {
    const tool: Tool | undefined = toolStore.use(node)
    const location: Location = locationStore.use(node, plotOptions)
    const apertureTransform: ApertureTransform = transformStore.use(node)
    const graphics: ImageGraphic[] = graphicPlotter.plot(node, tool, location, apertureTransform)

    children.push(...graphics)
  }

  return {
    type: IMAGE,
    units: plotOptions.units,
    tools: toolStore._toolsByCode,
    size: sizeFromGraphics(children),
    children,
  }
}
