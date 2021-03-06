import React, { Component } from 'react';
import { Dialog, Button } from '@extjs/ext-react';

export default class RelDialog extends Component {

    state = {
        displayed: false
    }

    componentDidMount() {
        this.setState({ displayed: true })
    }

    close = () => {
        this.setState({ displayed: false });
    }

    render() {
        return (
            <Dialog displayed={this.state.displayed} title="Dialog">
                <Button text="Button" itemId="button" handler={this.close}/>
            </Dialog>
        );
    }

}