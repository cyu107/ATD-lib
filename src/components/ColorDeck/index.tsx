import React, { ReactElement } from 'react'
import colors, { ColorsInterface } from '@bit/littlebox.atd.colors'

const colorNames = Object.keys(colors)

const ColorDeck = (): ReactElement => (
  <ul style={{ display: 'flex', flexWrap: 'wrap', margin: 0, padding: 0, listStyle: 'none' }}>
    {colorNames.map((color, idx) => (
      <li
        key={idx}
        style={{
          width: '33.33%',
          margin: '0.7em 0',
          padding: '0 0.5em',
          boxSizing: 'border-box',
        }}
      >
        <span
          style={{
            display: 'block',
            marginBottom: '0.2em',
            height: '4em',
            backgroundColor: colors[color as ColorsInterface['color']],
          }}
        />
        <span style={{ fontFamily: 'sans-serif' }}>{color}</span>
      </li>
    ))}
  </ul>
)

export default ColorDeck
