


  declare  var   LINEHEIGHT: number



type Drawable = any
type Index = { c: number, d: Drawable }
type Rect = { x: number, y: number, height: number, width: number }

// TODO find out what graph is
type Graph = any
type GraphNode = any
type Point = any
type Edge = any

// TODO: complete this
type ElementType = "nodes" | "states" | "connectors" | "edges" | "isedges"

// TODO: improve type
type ElementObj = any
type IntersectE = any

type ElementFunction = (type: ElementType, e: IntersectE, obj: ElementObj) => void