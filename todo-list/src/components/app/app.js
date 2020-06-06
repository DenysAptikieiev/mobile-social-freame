import React, {Component} from 'react';

import './app.sass';

// import styled from 'styled-components';

import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import PostStatusFilter from '../postStatusFilter';
import PostList from '../postList';
import PostAddForm from '../postAddForm';
// import WhoAmI from '../whoAmI';

// const AppBlock = styled.div`
//     min-width: 360;
//     padding: 0 50px;
// `;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', like: false, important: false, id: 'afas3df'},
                {label: 'Greet the world', like: false, important: true, id: 'wdad4f'},
                {label: 'Have breakfast', like: false, important: false, id: 'asad5gr'}
            ],
            searchText : '',
            filter: 'all'
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.addPost = this.addPost.bind(this);
        this.randomId = this.randomId.bind(this);
        this.showLikedPosts = this.showLikedPosts.bind(this);
        this.showAllPosts = this.showAllPosts.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    randomId() {
        const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
       return id
    }

    addPost(body) {
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: this.randomId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            }
        })
    }

    deleteItem(id) {
        this.setState(({data}) => {

            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {

            const index = data.findIndex(elem => elem.id === id);
            const before = data[index];
            const newItem = {...before, important: !before.important}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr,
            }
        })
    }

    onToggleLike(id) {
        this.setState(({data}) => {

            const index = data.findIndex(elem => elem.id === id);
            const before = data[index];
            const newItem = {...before, like: !before.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr,
            }
        })
    }

    showLikedPosts() {
        this.setState(({data}) => {
            const newArr = data.filter(elem => elem.like)
            return {
                data: newArr
            }
        })
    }

    showAllPosts() {
        this.setState(({data}) => {
            const newArr = data.map(elem => elem);
            return {
                data: newArr
            }
        })
    }

    searchPost(items, searchText) {
        if (searchText.length === 0) {
            return items
        }
        return items.filter(item => {
            const textLower = item.label.toLowerCase();
            const textUpper = item.label.toUpperCase();
            if (textLower.indexOf(searchText) > -1) {
                return item.label
            } else if (textUpper.indexOf(searchText) > -1) {
                return item.label
            }
            return item.label.indexOf(searchText) > -1
        })
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(elem => elem.like)
        } else {
            return items
        }
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    onUpdateSearch(searchText) {
        this.setState({searchText})
    }

    render() {
        const {data, searchText, filter} = this.state;

        const liked = data.filter(item => item.like).length
        const allPosts = data.length;

        const foundPost = this.filterPost(this.searchPost(data, searchText), filter);
        
        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter 
                        showLikedPosts={this.showLikedPosts}
                        showAllPosts={this.showAllPosts}
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                    <PostList 
                        onDelete={ this.deleteItem } 
                        posts={ foundPost }
                        onToggleImportant={this.onToggleImportant}
                        onToggleLike={this.onToggleLike}
                    />
                    <PostAddForm
                        addPost={ this.addPost }
                    />
                {/* <WhoAmI name="Denys" surname="Aptikieiev" link="vk.com"/> */}
            </div>
        )
    }
}
