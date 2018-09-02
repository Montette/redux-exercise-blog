import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';




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
                               <NavLink to="/" exact>Home</NavLink>                       
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post'
                                }}>New post</NavLink>   
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route exact path='/' component={Posts}/>  
                    <Route  path='/new-post' component={NewPost}/>
                    <Route exact path='/:id' exact component={FullPost}/>
                </Switch>
                
 
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