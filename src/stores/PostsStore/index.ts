import React from 'react'
import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'

import PostsModel from '../models/PostsModel/index'
import { PostsObject } from '../../stores/types'
import PostsAPIService from '../../services/PostsService/index.api'

class PostsStore {

    @observable getPostsResponseAPIStatus!: APIStatus
    @observable getPostsResponseAPIError!: Error | null

    @observable postsAPIService!:PostsAPIService
    @observable postsList!: Array<PostsModel>

    constructor(postsService:PostsAPIService) {
        this.init(postsService)
    }

    @action.bound
    init(postsService:PostsAPIService) {
        this.getPostsResponseAPIStatus = API_INITIAL
        this.getPostsResponseAPIError = null
        this.postsAPIService = postsService
        this.postsList = []
    }

    @action.bound
    setPostsResponseAPIStatus(apiStatus) {
        this.getPostsResponseAPIStatus = apiStatus
    }

    @action.bound
    setPostsResponseAPI(response: Array<PostsObject> | null) {
        if (response) {
            this.postsList = response.map((eachPost) => new PostsModel(eachPost))
        }
    }

    @action.bound
    setPostsResponseAPIError(apiError) {
        this.getPostsResponseAPIError = apiError
    }

    @action.bound
    getPosts() {
        const getPostsPromise = this.postsAPIService.getPostsAPI()
        return bindPromiseWithOnSuccess(getPostsPromise)
            .to(this.setPostsResponseAPIStatus, this.setPostsResponseAPI)
            .catch(this.setPostsResponseAPIError)
    }

}

export default PostsStore