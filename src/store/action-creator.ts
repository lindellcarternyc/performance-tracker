interface Action<T extends string> {
  type: T
}

interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P
}

function actionCreator<T extends string>(type: T): Action<T>
function actionCreator<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>
function actionCreator<T extends string, P>(type: T, payload?: P): Action<T> | ActionWithPayload<T, P> {
  return payload === undefined 
    ? { type: type as typeof type }
    : { type: type as typeof type, payload }
}

export default actionCreator