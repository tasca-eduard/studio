import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.timeoutId = null;
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
      ],
      sortBy: 'default'
    };
  }

  renderBoxes = () => {
    let boxes = this.state.boxes;

    if(this.state.sortBy === 'fruits') {
      boxes = [...this.getSortedFruits(['🍊', '🍌', '🍋'])];
    } else if(this.state.sortBy === 'boxes') {
      boxes = [...this.getSortedBoxes()];
    } else if(this.state.sortBy === 'random') {
      boxes = this.getShuffledBoxes(boxes);
    }

    return boxes.map((box, index) => {
      // maybe it's not always ideal to use index as key (?)
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

  getSortedFruits = (fruitOrder) => {
    const boxes = this.state.boxes;
    const sortedFruits = boxes.map(box => {
      return box.sort((a, b) => {
        return fruitOrder.indexOf(a) - fruitOrder.indexOf(b)
      }) 
    })

    return sortedFruits;
  }

  getSortedBoxes = () => {
    const allFruits = [].concat(...this.getSortedFruits(['🍊', '🍌', '🍋']));
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

  getRandomElements(elem) {
    for (let i = elem.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [elem[i], elem[j]] = [elem[j], elem[i]];
    }

    return elem;
  }

  getShuffledBoxes(boxes) {
    boxes = this.getRandomElements(boxes);
    boxes = boxes.map(box => this.getRandomElements(box));

    return boxes;
  }

  getTypesOfFruits = (fruits) => {
    let typesOfFruits = new Set([...fruits]);

    return [...typesOfFruits];
  }

  setSortBy = (e) => {
    this.setState({
      sortBy: e.target.value
    }, () => {
      this.timeoutId = this.customTimeout();
    })
  }

  customTimeout = () => {
    return setTimeout(() => {
      this.setState({
        sortBy: 'random'
      })
    }, 3000)
  }

  componentDidUpdate() {
    clearTimeout(this.timeoutId);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    return (
      <div className="App">
        <button className="button" type="button" value="fruits" onClick={this.setSortBy}>Sort Fruits</button>
        <button className="button" type="button" value="boxes" onClick={this.setSortBy}>Sort Boxes</button>
        <button className="button" type="button" value="random" onClick={this.setSortBy}>Randomize</button>
        {this.renderBoxes()}
      </div>
    );
  }
}

export default App;
