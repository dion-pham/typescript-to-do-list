// ITodo interface needs to mirror the shape of data from API
interface ITodo {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
}

// use the same interface as above for TodoProps aka the
// type annotation for the props that will be received by the component
// responsible for rendering the data
interface TodoProps {
    todo: ITodo
}

// since we dont have mongoose in frontend, need to add additional properties to match the type defined on the API
type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
}
