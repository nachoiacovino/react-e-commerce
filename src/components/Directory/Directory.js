import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import MenuItem from '../MenuItem/MenuItem'
import './Directory.scss'
import { selectDirectorySections } from '../../redux/directory/directorySelectors'

const Directory = ({ sections }) => {
    return (
      <div className="Directory">
          {sections.map(section =>
              <MenuItem key={section.id} {...section} />    
          )}
      </div>  
    )
}

const mapStateToProps = createStructuredSelector({ sections: selectDirectorySections })

export default connect(mapStateToProps)(Directory)
