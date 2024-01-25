import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList'

export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
        this.state = { selected: 'All' };
    }
    render() {
        return (
            <>
                <Toolbar
                    filters={this.filters}
                    selected={this.state.selected}
                    onSelectFilter={(filter) => this.setState({ selected: filter })} />
                <ProjectList projects={this.state.selected === 'All' ? this.props.items : this.props.items.filter(item => item.category === this.state.selected)} />
            </>
        )
    }
}