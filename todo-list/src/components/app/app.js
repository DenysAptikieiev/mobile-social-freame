import React from 'react';

import './app.sass';

import styled from 'styled-components';

import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import PostStatusFilter from '../postStatusFilter';
import PostList from '../postList';
import PostAddForm from '../postAddForm';
// import WhoAmI from '../whoAmI';

const data = [
    {label: 'Going to learn React', important: false, id: 'afassa3df'},
    {label: 'Greet the world', important: true, id: 'wdad4f'},
    {label: 'Have breakfast', important: false, id: 'asad5gr'}
];

const AppBlock = styled.div`
    margin: 50px auto;
    max-width: 400px;
    padding: 0 50px;
`

const App = () => {
    return (
        <AppBlock>
            <AppHeader/>
            <div className="search-panel">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
                <PostList posts={data}/>
                <PostAddForm/>
            {/* <WhoAmI name="Denys" surname="Aptikieiev" link="vk.com"/> */}
        </AppBlock>
    )
}

export default App;