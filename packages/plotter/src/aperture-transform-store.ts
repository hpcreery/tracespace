import type { Polarity, Mirroring, Rotation, Scaling, GerberNode} from '@hpcreery/tracespace-parser'
import { LOAD_MIRRORING, LOAD_POLARITY, LOAD_ROTATION, LOAD_SCALING, DARK, NONE } from '@hpcreery/tracespace-parser'


export interface ApertureTransform {
  polarity: Polarity
  mirror: Mirroring
  rotation: Rotation
  scale: Scaling
}

export interface TransformStore {
  use: (node: GerberNode) => ApertureTransform
}


export function createTransformStore(): TransformStore {
  return Object.create(TransformStorePrototype)
}


interface TransformStoreState {
  _currentTransform: ApertureTransform
}

const TransformStorePrototype: TransformStore & TransformStoreState = {
  _currentTransform: {
    polarity: DARK,
    mirror: NONE,
    rotation: 0,
    scale: 1
  },

  use(node: GerberNode): ApertureTransform {
    if (node.type === LOAD_MIRRORING) {
      this._currentTransform.mirror = node.mirroring
    }
    if (node.type === LOAD_POLARITY) {
      this._currentTransform.polarity = node.polarity
    }
    if (node.type === LOAD_ROTATION) {
      this._currentTransform.rotation = node.rotation
    }
    if (node.type === LOAD_SCALING) {
      this._currentTransform.scale = node.scaling
    }
    return this._currentTransform
  }
}