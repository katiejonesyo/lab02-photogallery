import React, { Component } from 'react'
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    state = {selected: null};
    handleChange = (e) => {
       this.setState ({ selected: e.target.value });
    };


    render() {
        return (<main>
            <section id='selector'>
                <select className='dropDown' onChange={this.handleChange}>
                    <option value='' defaultValue>All</option>
                    <option value='narwhal' defaultValue>Narwhal</option>
                    <option value='rhino' defaultValue>Rhino</option>
                    <option value='unicorn' defaultValue>Unicorn</option>
                    <option value='unilego' defaultValue>Unilego</option>
                    <option value='triceratops' defaultValue>Triceratops</option>
                    <option value='markhor' defaultValue>Markhot</option>
                    <option value='mouflon' defaultValue>Mouflon</option>
                    <option value='addex' defaultValue>Addax</option>
                    <option value='chameleon' defaultValue>Chameleon</option>
                    <option value='lizard' defaultValue>Lizard</option>
                    <option value='dragon' defaultValue>Dragon</option>

                </select>
            </section>

            <section id='results'>
                <ul className='animalList'>
                    {
                     this.props.array.filter((object) => {
                            if (!this.state.selected)
                            return true;

                            return object.keyword === this.state.selected;
                        }).map(object =>  {
                            return<ImageItem animal={object}/>
                        })
                    }
                </ul>
            </section>
        </main>

        )

    }
};