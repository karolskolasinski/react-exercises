import React from 'react';
import './root.scss';
import AppContext from '../../context';
import RootView from '../RootView/RootView';
import TwittersView from '../TwitterView/TwittersView';
import ArticleView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import danAbramovImage from '../../assets/images/danabramov.jpg';
import ryanFlorenceImage from '../../assets/images/ryanflorence.jpg';
import michaelJacksonImage from '../../assets/images/michaeljackson.jpg';
import kentCDoddsImage from '../../assets/images/kentcdodds.jpg';

class Root extends React.Component {
    state = {
        twitter: [
            {
                image: danAbramovImage,
                title: 'Dan Abramov',
                description: 'Working on @reactjs. The demo guy.',
                twitterLink: 'https://twitter.com/dan_abramov',
            },
            {
                image: ryanFlorenceImage,
                title: 'Ryan Florence',
                description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
                twitterLink: 'https://twitter.com/ryanflorence',
            },
            {
                image: michaelJacksonImage,
                title: 'Michael Jackson',
                description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
                twitterLink: 'https://twitter.com/mjackson',
            },
            {
                image: kentCDoddsImage,
                title: 'Kent C. Dodds',
                description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
                twitterLink: 'https://twitter.com/kentcdodds',
            },
        ],
        article: [],
        note: [],
        isModalOpen: false,
    };

    addItem = (e, newItem) => {
        e.preventDefault();

        this.setState(prevState => ({
            [newItem.type]: [...prevState[newItem.type], newItem],
        }));

        this.closeModal();
    };

    openModal = () => {
        this.setState({
            isModalOpen: true,
        });
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    };

    render() {
        const { isModalOpen } = this.state;
        const contextElements = {
            ...this.state,
            addItem: this.addItem,
        };

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                    <Header openModalFn={this.openModal} />
                    <Switch>
                        <Route exact path='/' component={RootView} />
                        <Route exact path='/twitters' component={TwittersView} />
                        <Route path='/articles' component={ArticleView} />
                        <Route path='/notes' component={NotesView} />
                    </Switch>
                    {isModalOpen && <Modal closeModalFn={this.closeModal} />}
                </AppContext.Provider>
            </BrowserRouter>
        );
    }
}

export default Root;
