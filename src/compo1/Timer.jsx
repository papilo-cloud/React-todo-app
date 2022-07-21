
const Timer = (props) =>  {
    //   const elapsedString = helpers.renderElapsedString(this.props.elapsed)
    return (
      <div className='card'>
          <div className="content">
              <div className="header">
                  <h3>{props.title}</h3>
              </div>
              <div className="meta">
                   {props.project}
              </div>
              <div className="description">
                  <h2>
                      00:20:56
                  </h2>
              </div>
              <div className="extra">
                  <span className="right"><i className="edit">ED</i></span>
                  <span className="right-trash">
                      <i className="trash">Tr</i>
                  </span>
              </div>
          </div>
          <div className="attached">
              <button>Start</button>
          </div>
      </div>
    )
}
export default Timer
