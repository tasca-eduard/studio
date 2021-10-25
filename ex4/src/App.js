import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
          [
              '🍊','🍊','🍋','🍌','🍋','🍌','🍋','🍊','🍌','🍌'
          ],
          [
              '🍋','🍋','🍊','🍌','🍊','🍌','🍋','🍋','🍊','🍊','🍌',
          ],
          [
              '🍌','🍋','🍌','🍋','🍊','🍌','🍌',
          ]
        ]
    }
  }

  renderBoxes = () => {
    const boxes = this.state.boxes;

    return boxes.map((box, index) => {
      return (
        <div key={index} className="box">
            {
              box.map((fruit, index) => {
                return (
                  <span key={index}>{fruit}</span>
                )
              })
            }
        </div>
      )
    })
  }

  SortFruits = () => {
    const boxes = this.state.boxes;
    const fruitOrder = ['🍊', '🍌', '🍋'];
    const sortedFruits = boxes.map(box => {
      return box.sort((a, b) => {
        return fruitOrder.indexOf(a) - fruitOrder.indexOf(b)
      }) 
    })

    return sortedFruits;
  }

  SortBoxes = () => {
    const allFruits = [].concat(...this.state.boxes);
    const typesOfFruits = this.getTypesOfFruits(allFruits);
    let sameFruitBoxes = new Array(typesOfFruits.length).fill([])

    typesOfFruits.forEach((type, index) => {
      allFruits.forEach(fruit => {
        if(type === fruit) {
          sameFruitBoxes[index] = [...sameFruitBoxes[index], fruit];
        }
      })
    })

    return [...sameFruitBoxes];
  }

  randomizeBoxes = () => {
    const allFruits = [].concat(...this.state.boxes);

  }

  getTypesOfFruits = (fruits) => {
    let typesOfFruits = new Set([...fruits]);

    return [...typesOfFruits];
  }

  render() {
    return (
      <div className="App">
        <button className="button" type="button" onClick={this.SortFruits}>Sort Fruits</button>
        <button className="button" type="button" onClick={this.SortBoxes}>Sort Boxes</button>
        {this.renderBoxes()}
      </div>
    );
  }
}

export default App;
