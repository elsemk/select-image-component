import React, { Component } from 'react';
import PictureSelect from './PictureSelect';
import SelectControl from './component/SelectControl';
import './App.css'

class App extends Component{
  state = {
    pictures: [
      {
        id: '1',
        name: 'foo',
        url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      },
      {
        id: '2',
        name: 'foo',
        url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      },
      {
        id: '3',
        name: 'foo',
        url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      },
    ],
    selectedIds: []
  };
  componentDidMount() {
  }
  handleChange = id => {
    const { selectedIds } = this.state;
    const prevIsSelect = !!selectedIds.find(item => item === id); // 当前点击的图片是否选中
    const newSelectIds = selectedIds.filter(item => item !== id);
    if (prevIsSelect){
      this.setState({selectedIds: newSelectIds})
    }else{
      this.setState({selectedIds: [...selectedIds, id]})
    }
  };
  handleSelectAll = () => {
    const { pictures, selectedIds } = this.state;
    if (pictures.length === selectedIds.length){
      this.setState({selectedIds: []})
    } else{
      const newIds = pictures.map(item => item.id);
      this.setState({selectedIds: newIds})
    }
  };
  componentWillUnmount() {
    this.setState({selectedIds: []})
  }

  render() {
    const { pictures, selectedIds } = this.state;
    return (
      <div className='App'>
        <div className='selectAllControl' onClick={this.handleSelectAll}>
          <SelectControl isSelected={pictures.length === selectedIds.length} />
          <div className='text'>已选中{selectedIds.length}个文件</div>
        </div>
        <PictureSelect pictures={pictures} value={selectedIds} onChange={this.handleChange} />
      </div>
    );
  }
}
export default App