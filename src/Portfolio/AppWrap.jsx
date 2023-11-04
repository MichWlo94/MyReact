import React from 'react';
import NavigationDots from './NavDots';

const AppWrap = (Component, idName) => function HOC() {
  return (
    <div id={idName}>
        <Component />
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;
