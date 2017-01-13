import React             from 'react';
import { Link }          from 'react-router';
import Terms             from './Terms';
import TermsContainer    from './TermsContainer';
import NextStep          from './NextStep';
import StepTitle         from './StepTitle';
import TwoStep           from './TwoStep';
import OneStep           from './OneStep';
import TitleContainer    from './TitleContainer';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';
import { NextStepBox } from '../styles';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isViewed: true
        }
        this.onNextStep = this.onNextStep.bind(this);
    }
    componentDidMount() {
        this.setState({
            onNextStep: this.props.onNextStep,
            isActive: this.props.isActive
        });
    }
    onNextStep() {
        this.setState({
            isActive: false
        });
        this.state.onNextStep("commit");
    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    Git Add
                    <Terms isCode="true" term="git add <filename>" >
                        Adds the changes in a given file to git
                    </Terms>
                </FlowHeader>

                <TermsDescription>
                    After you've made changes, you will want to save them. Saving in git is a two step process:
                    <span className="left-margin">
                        1. <kbd>Stage</kbd> changes to be saved
                        <br/>
                        2. <kbd>Commit</kbd>, or save those changes
                    </span>

                    We will discuss staging here.
                    <br/><br/>
                    To stage a given file, <kbd>{"<"}filename{">"}</kbd>, you will use the command <kbd className="is-command">git add {"<"}filename{">"}</kbd>
                    You can also stage multiple files at once by stringing them together:
                    <kbd className="is-command">git add file1 file2 file3</kbd>
                    Alternatively, you can stage all the current changes by replacing the filename with a period:
                    <kbd className="is-command">git add .</kbd>
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox} onClick={this.onNextStep} className="btn-black">
                            <h4>
                                Commit my staged files
                            </h4>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Add;
