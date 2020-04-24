import React, { Component } from 'react';
import './index.css';
import SelectControl from "../component/SelectControl";

class PictureSelect extends Component{
  componentDidMount() {
  }
  render() {
    const { pictures, value, onChange } = this.props;
    console.log('PictureSelect render')
    return (
      <div className='imageWrap'>
        {pictures && pictures.length>0 ? pictures.map(item => (
          <div className='imgItem' key={item.id}>
            <img src={item.url} alt={item.name} />
            <div className='imgName'>{item.name}</div>
            <div className='itemSelect' onClick={() => onChange(item.id)}>
              <SelectControl isSelected={!!value.find(id => id === item.id)} />
            </div>
          </div>
        )) : '暂无数据'}
      </div>
    );
  }
}
export default PictureSelect