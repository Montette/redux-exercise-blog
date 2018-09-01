import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom';



import './Blog.css';

// const getOptions = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'AUTH TOKEN'
//     }
// }

class Blog extends Component {
 
    // componentDidMount () {
    //     fetch("https://jsonplaceholder.typicode.com/posts", getOptions)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log(response);
    //             const posts = response.slice(0, 4);
    //             console.log(posts);
    //             const updatedPosts = posts.map(post => {
    //                 return {
    //                     ...post,
    //                     author: 'Max'
    //                 }
    //             });
    //             this.setState({posts: updatedPosts});
    //             // console.log( response );
    //         } )
    //         .catch(error => {
    //             // console.log(error);
    //             this.setState({error: true});
    //         });
    // }


    addNewPost =(data) =>{
  
        this.setState(PrevState => {
            const posts = [...PrevState.posts];
            let {title, body, author, id} = data.data;
            const newPost = {title, body, author, id};
            posts.push(newPost);
            console.log(newPost);
            return{
                posts: posts
            }
        })
    }

    render () {
  
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href='/'>Home</a>                       
                            </li>
                            <li>
                                <a href='/new-post'>New Post</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route exact path='/' render={()=> <h1>Home</h1>}/>
                <Route path='/posts' component={Posts}/>
 
            </div>
        );
    }
}

export default Blog;

// <section>
// <FullPost id={this.state.selectedPostId} />
// </section>
// <section>
// <NewPost 
// update={this.addNewPost}
// />
// </section>