import React from 'react';
import {images} from '../../constants';

const SubHeading = ({title}) => (
  <div style={{ marginBottom: '1rem'}}>
    <p className="p__cormorant">
      {title}
    </p>
    <img src={images.spoon} alt="spoon" className='spoon__image' style={{margin: "1rem 0"}} />
  </div>
);

export default SubHeading;