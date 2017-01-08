import React        from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/main.css';
import Start from './Start';
import Init from './Init';
import Branch from './Branch';
import Clone from './Clone';

class Flow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            children: this.props.children,
            lastChild: {}
        }
    }
    onNextStep(nextComponent) {
        switch (nextComponent) {
            case "init":
                this.setState({
                    init:  <Init onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
            case "clone":
                this.setState({
                    clone:  <Clone onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
            case "branch":
                this.setState({
                    branch:  <Branch onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
        }
    }
    render() {
        return (

            <div>
                <ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={600} transitionLeaveTimeout={500} >
                    <Start onNextStep={this.onNextStep.bind(this)}/>
                    {this.state.init}
                    {this.state.clone}
                    {this.state.branch}
                </ReactCSSTransitionGroup>
            </div>

        )
    }
}

export default Flow;
