import React, {Component} from 'react'

class ListData extends Component {
  render() {
    const {data} = this.props
    return (
      <div className='list-data'>
      <div className='list-data-top'>
      <ol className='data-list'>
    {data.map((albumdata) => (
      <li key={albumdata.id} className='data-list-item'>
        <div className='data-avatar' style={{
          backgroundImage: `url(${albumdata.thumbnailUrl})`
        }}/>
        <div className='data-details'>
          <p>
          <span style={{fontWeight: "bold"}}>albumId: </span>
          <span style={{color: "blue"}}>{albumdata.albumId} </span>
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>id: </span>
          <span style={{color: "blue"}}>{albumdata.id} </span>
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>title: </span>
          <span style={{color: "green"}}>"{albumdata.title}"</span>
          </p>
          <p>
          <span style={{fontWeight: "bold"}}>url: </span>
          <span style={{color: "blue",textDecoration: "underline"}}>"{albumdata.url}" </span>
          </p>
          <p><span style={{fontWeight: "bold"}}>thumbnailUrl: </span>
          <span style={{color: "blue",textDecoration: "underline"}}>"{albumdata.thumbnailUrl}" </span>
          </p>
        </div>
        </li>
    ))}
      </ol>
      </div>
      </div>
    )
  }
}

export default ListData
