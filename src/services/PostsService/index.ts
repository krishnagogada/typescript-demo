import { PostsObject } from '../../stores/types'

export interface PostsService {
    getPostsAPI: () => Promise<Array<PostsObject>>
}