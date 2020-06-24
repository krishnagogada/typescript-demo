import React from 'react'
import {observer,inject} from 'mobx-react'

import PostsStore from '../../stores/PostsStore/index'
import {PostsPage} from '../../components/PostsPage'

interface PostsRouteProps {}

interface InjectedProps extends PostsRouteProps {
    postsStore:PostsStore
}

@inject('postsStore')
@observer
class PostsRoute extends React.Component<PostsRouteProps>{

    componentDidMount(){
        this.getPostsStore().getPosts()
    }

    getPostsStore = () => {
        return this.getInjectedProps().postsStore
    }

    getInjectedProps = (): InjectedProps => this.props as InjectedProps

    render(){
        const {postsList}=this.getPostsStore()
        return(
            <PostsPage postsList={postsList}/>
        )
    }
}

export default PostsRoute