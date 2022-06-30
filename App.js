import React from 'react';
import MainApp from './src/navigation';
import { MenuProvider } from 'react-native-popup-menu';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import { extendedApiSlice } from './src/services/posts/postsSlice';
import { usersApiSlice } from './src/services/users/usersSlice';
const App = () => {
    store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
    store.dispatch(usersApiSlice.endpoints.getUsers.initiate());
    return (
        <Provider store={store}>
            <MenuProvider>
                <MainApp />
            </MenuProvider>
           
        </Provider>
    );
};


export default App;
