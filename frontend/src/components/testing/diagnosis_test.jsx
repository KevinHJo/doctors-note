import React from 'react';
import * as ECT from '@whoicd/icd11ect';

class DiagnosisTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: new Array()
    }

    this.renderSelections = this.renderSelections.bind(this);
  }

  componentDidMount() {
    const mySettings = {apiServerUrl: "https://icd11restapi-developer-test.azurewebsites.net"};
    const myCallbacks = {
      selectedEntityFunction: selectedEntity => {
        const selections = this.state.selections.concat(selectedEntity.code + " - " + selectedEntity.bestMatchText)
        this.setState({selections: selections})
      }
    };

    ECT.Handler.configure(mySettings, myCallbacks);
  }

  renderSelections() {
    if (this.state.selections[0]) {
      return (
        <div>
          {this.state.selections.map(selection => {
            return <li>{selection}</li>
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderSelections()}
        Type for starting search: <input type="text" class="ctw-input" autocomplete="off" data-ctw-ino="1" />
        <button class="demo-clear" onclick="ECT.Handler.clear('1');" title="Clear search and results">❌</button>
        <div class="ctw-window" data-ctw-ino="1"></div>
      </div>
    )
  }
}

export default DiagnosisTest;