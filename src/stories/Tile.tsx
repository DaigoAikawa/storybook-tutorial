import React from 'react'

type Props = {
  color?: string;
  opacity?: number;
  shape?: 'square' | 'circle'
};

type styleForColorType = {
  backgroundColor?: string;
  opacity?: number;
};

/**
 * タイルです。
 */
export const Tile = ({ color = '#000000', opacity = 1, shape = 'square'}: Props) => {
  let styleForColor: styleForColorType = {
    backgroundColor: color,
    opacity,
  };

  let shapeClass = shape === 'square' ? 'rounded-md' : 'rounded-full';

  return (
    <div className={`w-14 h-14 ${shapeClass}`} style={styleForColor}></div>
  )
}
