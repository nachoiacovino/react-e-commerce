import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import sections from '../../sections.data'
import './Directory.scss'

export default function Directory() {
    return (
      <div className="Directory">
          {sections.map(section =>
              <MenuItem key={section.id} {...section} />    
          )}
      </div>  
    )
}
