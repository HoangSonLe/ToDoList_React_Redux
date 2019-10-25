import React from 'react';
import './App.css';
import Title from './components/Title';
import List from './components/List';
import tasks from './mocks/task';
import ControlVer2 from './components/ControlVer2';

class AppVer2 extends React.Component {

    UNSAFE_componentWillMount() {
        if (localStorage && localStorage.getItem('task') === null) localStorage.setItem('task', JSON.stringify(tasks));
    }

    render() {
        return (
            <div className='container'>
                <Title />
                <ControlVer2 />
                <List />
            </div>
        );
    }
}

export default AppVer2;
