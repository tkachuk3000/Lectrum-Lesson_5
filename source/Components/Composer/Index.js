// Core
import React, {Component} from 'react';

//Components
import { Consumer } from '../HOC/withProfile';

//Instruments
import Styles from './styles.m.css';

export default class Composer extends Component{

   render (){
    // const {avatar, currentUserFirstName} = this.props;
        return (
            <Consumer>
                {(context) => (
                    <section className = {Styles.composer}>
                        <img src = {context.avatar}/>
                        <form>
                            <textarea placeholder = {`What's on your mind,  ${context.currentUserFirstName}?`}/>
                                <input type = 'submit' value = 'post'/>
                            </form>
                    </section>
                )}
            </Consumer>
        )
    }
}
