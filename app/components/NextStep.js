import React                 from 'react';
import { Link } from 'react-router';

class NextStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blurb: "",
            link: "",
            buttonText: "",
            linkText: ""
        }
    }

    componentWillMount() {
        this.setState({
            blurb: this.props.blurb,
            link: this.props.link,
            buttonText: this.props.buttonText,
            linkText: this.props.linkText
            });

    }
    render() {
        return (
            <div>
                <p>
                    {this.state.blurb}
                    <Link to={this.state.link}>{this.state.linkText}</Link>.
                    <br/>
                    <Link to={this.state.link}><button className="btn btn-lg btn-black">{this.state.buttonText}</button></Link>
                </p>
            </div>
        )
    }
}
export default NextStep;