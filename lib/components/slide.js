import React from 'react';

const Slide = ({ children, horizontal, isActive, isNext, style, className }) => {
  if (!isActive && !isNext) {
    return null;
  }

  const styles = Object.assign({
    overflow: 'hidden', width: innerWidth, height: innerHeight, position: 'relative'
  }, style);

  let slideClassName = [];

  if (className) {
    slideClassName.push(className);
  }
  slideClassName = slideClassName.join(' ');

  return (
    <div className={slideClassName} style={styles}>
      {children}
    </div>
  );
}

export default Slide;
