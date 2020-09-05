import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import { increase, decrease, increaseBy } from 'modules/counter';

import Presenter from './presenter';

function Container() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Presenter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default Container;
