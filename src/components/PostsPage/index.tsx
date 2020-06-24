import React from 'react'

import { observer } from 'mobx-react'

import tw from 'tailwind.macro'

import NoDataView from '../common/NoDataView'

import PostsModel from '../../stores/models/PostsModel'

import {PostsPageWrapper,PostsInnerWrapper} from './styledComponent'

type PostsPageProps={
    postsList:Array<PostsModel>
}

@observer
class PostsPage extends React.Component<PostsPageProps>{
    renderPostsList(){
        const {postsList}=this.props
        return (postsList.map(eachPost=>{
                return  <div key={eachPost.id}>
                            <p className={'bg-blue-200 p-5'}>{eachPost.title}</p>
                            <p className={'bg-red-100 p-5'}>{eachPost.post}</p>
                        </div>
            }))
    }
    render(){
        return(
            <PostsPageWrapper>
                <PostsInnerWrapper>
                    {this.renderPostsList()}
                </PostsInnerWrapper>
            </PostsPageWrapper>
        )
    }
}

export {PostsPage}