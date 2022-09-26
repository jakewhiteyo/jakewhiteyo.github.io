import React, { Component } from 'react'
import './head.css'
import jake from '../../assets/jake.png';
import circle from '../../assets/circle.png';


export class Head extends Component {
  static propTypes = {}

  render() {
    return (
        <>
        <img src={jake} class="imgJake center" alt="jake"/>
        <img src={circle} class="imgCicle center" alt="circle"/>
        <h1>Jake White</h1>
        </>
    )
  }
}

export default Head