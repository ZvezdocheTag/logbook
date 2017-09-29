import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './Post';
import List from 'components/List';
import CircularProgressExampleSimple from 'components/LoaderList'

const PostsList = (props) => {
    // const { 
    //   loading, 
    //   post 
    // } = props.posts;
    // console.log(props)
    // const condition = typeof post !== "undefined" ? 
    //                   !!post.length : 
    //                   false;
   
    // if(!loading && condition) {
    //   return (<List 
    //     component={MaterialCard} 
    //     items={post}></List>)
    // } else {
    //   return <CircularProgressExampleSimple />
    // }
    
        if(!props.posts) {
            return ( 
                <h2>No posts</h2>
            )
        } else {
          return (<List 
        component={Post} 
        items={props.posts}></List>)
        }
  }

export default PostsList;