enum actionType {
  SETSLICEINDEX = "setsliceindex",
  SETSTORIES = "setstories",
  SETRANDOMSTORIES = "setrandomstories",
  SETLOADING = "setloading",
  SETERROR = "seterror",
}

interface IActionType {
  type: actionType;
  payLoad?: any;
}
export { actionType };
export type { IActionType };
