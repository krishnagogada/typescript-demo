import React from 'react'

import { PostsObject } from '../../types'

class PostsModel {
    userId: number
    id: number
    title: string
    post: string

    constructor(postsObject:PostsObject) {
        this.userId = postsObject.userId
        this.id = postsObject.id
        this.title = postsObject.title
        this.post = postsObject.body
    }
}

export default PostsModel