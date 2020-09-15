declare var LINEHEIGHT: number;
declare var EDGE_LOD: number;
declare var STATE_LOD: number;
declare var NODE_LOD: number;

interface CustomCanvasRenderingContext2D extends CanvasRenderingContext2D {
  lod: boolean;
  _custom_transform_matrix: DOMMatrix;
  custom_inverseTransformMultiply: (x: number, y: number) => DOMPoint;
  setTransform: any;
}

type SDFGType = any;

type Drawable = any;
type Index = { c: number; d: Drawable };
type Coordinate = { x: number; y: number };
type Rect = { x: number; y: number; height: number; width: number };
type RectHW = { x: number; y: number; h: number; w: number };

type Mousepos = Coordinate | null;

// TODO find out what graph is
type Graph = dagre.graphlib.Graph<SDFGElement>;
type GraphNode = any;
type Point = { x: number; y: number };
type EdgeType = any;

// TODO: complete this
type ElementType = "nodes" | "states" | "connectors" | "edges" | "isedges";

// TODO: improve type
type ElementObj = any;
type IntersectE = any;

type ElementFunction = (
  type: ElementType,
  e: IntersectE,
  obj: ElementObj
) => void;

interface SDFGRoot {
  type: "sdfg";
  attributes: any;
  nodes: SDFGNode[];
  edges: SDFGEdge[];
  sdfg_list_id: number;
  error: SDGFError;
}

interface SDFGNode {
  type: string;
  label: string;
  id: string;
  collapsed: boolean;
  scope_dict: Record<string, number[]>;
  nodes: SDFGNode[];
  edges: SDFGEdge[];
  attributes: any;
}

interface SDFGEdge {
  type: string;
  attributes: any;
  src: string;
  dst: string;
  dst_connector?: string;
  src_connector?: string;
}

interface SDGFError {
  message: string;
  sdfg_id: number;
  state_id: number;
  edge_id: number;
}
