import React, { Component } from 'react'
import './head.css'
import jake from '../../assets/jake.png';
import circle from '../../assets/circle.png';
import Buttons from './Buttons';

export class Head extends Component {
  static propTypes = {}

  render() {
    return (
        <header>
            <div class="pad">
                <img src={jake} class="imgJake center" alt="jake"/>
                <img src={circle} class="imgCicle center" alt="circle"/>
                <h1>Jake White</h1>
            </div>
            <div class="pad">
                <Buttons/>
            </div>
        </header>
    )
  }
}

export default Head