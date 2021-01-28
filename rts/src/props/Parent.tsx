import React from 'react';
import {ChildAsFC} from './Child';

const Parent = ()=>{
  return <ChildAsFC color='red' onClick={()=> console.log('hello')}>
    hello text children
  </ChildAsFC>
}

export default Parent