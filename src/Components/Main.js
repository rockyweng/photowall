import React, {Component} from 'react';
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import {Route} from "react-router-dom";

class Main extends Component
{
    constructor() {
        console.log('constructor');
        super();
        this.state = {
            posts: [
                {
                    id: 0,
                    description: "beautiful landscape",
                    imageLink: "https://www.canva.com/learn/wp-content/uploads/2018/12/00-winterlandscapes_featimage.jpg",
                },
                {
                    id: 1,
                    description: "Aliens???",
                    imageLink: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1577231744/191220-Axe-Aliens-next-decade-tease_c0n1xy",
                },
                {
                    id: 2,
                    description: "On a vacation!",
                    imageLink: "https://www.tanveernaseer.com/wp-content/uploads/2011/07/Boss-at-the-beach.jpg",
                }
            ],
            screen: 'photos'
        }
        this.removePhoto = this.removePhoto.bind(this);
        this.addPhoto = this.addPhoto.bind(this);

    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post!== postRemoved)
        }));
    }

    addPhoto(postSubmitted) {
        this.setState((state) => ({
            posts: state.posts.concat([postSubmitted])
        }));
    }

    // Ideally we should put API requests in componentDidMount() not in the render method
    componentDidMount() {
        // const data = SimulateFetchFromDatabase();
        // this.setState({
        //    posts: data
        // });
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState.posts)
        console.log(this.state)

    }

    render() {
        console.log(this.state.posts);
        return (<div>
                <Route exact path="/" render={() => (
                    <div>
                        <Title title={'PhotoWall'}/>
                        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
                    </div>
                )}></Route>
            <Route path="/AddPhoto" render={({history})=> (
                <AddPhoto onAddPhoto={(addedPost) => {
                    this.addPhoto(addedPost)
                    history.push('/')
                }}/>
            )}></Route>
        </div>)
    }
}
//
// function SimulateFetchFromDatabase () {
//     return [
//         {
//             id: "0",
//             description: "beautiful landscape",
//             imageLink: "https://www.canva.com/learn/wp-content/uploads/2018/12/00-winterlandscapes_featimage.jpg",
//         },
//         {
//             id: "1",
//             description: "Aliens???",
//             imageLink: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1577231744/191220-Axe-Aliens-next-decade-tease_c0n1xy",
//         },
//         {
//             id: "2",
//             description: "On a vacation!",
//             imageLink: "https://www.tanveernaseer.com/wp-content/uploads/2011/07/Boss-at-the-beach.jpg",
//         }
//     ];
// }

export default Main