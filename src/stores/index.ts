// All the stores will be initialised here
import TodoService from '../services/TodoService/index.api'

import TodoStore from './TodoStore'
import PostsAPIService from '../services/PostsService/index.api'
import PostsStore from './PostsStore'

const todoStore = new TodoStore(new TodoService())
const postsStore = new PostsStore(new PostsAPIService())

const stores = {
  todoStore,
  postsStore
}

export default stores
