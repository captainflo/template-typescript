interface ChildProps{
  color: string;
  onClick: ()=> void,
}

export const Child = ({color, onClick}: ChildProps)=>{
  return <div>{color}
  <button onClick={onClick}></button>
  </div>
}

// second way with more option
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children})=>{
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}></button>
    </div>
  )
}
