import React, { useState } from "react";
//Использовать классы - устарвевший подход
class ClassCounter extends React.Component
{
    constructor(props)
    {
        super(props); 

        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this) // Нужно чтобы при вызывое метода с наружи вызывался контекст данного экземлпяра класса
        this.decrement = this.decrement.bind(this)
    }

    increment()
    {
        this.setState({count:this.state.count + 1});
    }

    decrement()
    {
        this.setState({count:this.state.count - 1});
    }



    render()
    {
        return(
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}> increment </button>
            <button onClick={this.decrement}> decrement </button>
            </div>
        )
    }
}

export default ClassCounter ;