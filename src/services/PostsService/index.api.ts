import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../utils/APIUtils'

import { apiMethods } from '../../constants/APIConstants'

import { POSTS_BASE_URL } from '../../constants/EnvironmentConstants'

import endpoints from '../endpoints'

import { PostsService } from './index'

class PostsAPIService implements PostsService {
    api: Record<string, any>
  
    constructor() {
      this.api = create({
        baseURL: POSTS_BASE_URL
      })
    }
  
    async getPostsAPI() {
      return networkCallWithApisauce(
        this.api,
        endpoints.posts.postsList,
        {},
        apiMethods.get
      )
    }
}

export default PostsAPIService