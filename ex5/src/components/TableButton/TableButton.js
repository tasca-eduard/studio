import React from 'react';

class TableButton extends React.Component {
    render() {
      return (
        <button className="btn btn-info" name={this.props.buttonName} onClick={this.props.handleClick}>
          <span>{this.props.text}</span>
          {
            this.props.columnName === this.props.buttonName &&
              <span className={[
                  "fas",
                  this.props.direction === 'asc' ? "fa-angle-up" : "fa-angle-down"
              ].join(' ')}>
              </span>
          }
        </button>
      )
    }
}

export default TableButton;