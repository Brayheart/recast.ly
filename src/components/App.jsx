
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: window.exampleVideoData,
      video: window.exampleVideoData[0]
    }
    this.VideoEntryPlayerTitleClicked = this.VideoEntryPlayerTitleClicked.bind(this);
  }

  VideoEntryPlayerTitleClicked (event) {
    this.setState({video: event});
  }

  render(){
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} VideoEntryPlayerTitleClicked={this.VideoEntryPlayerTitleClicked} />
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
