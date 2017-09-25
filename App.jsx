import React from 'react';

class App extends React.Component {
   render() {
      return (
        <div id="intro-container">
          <div id="introduction">
            <h1 className="title">Hello, I&#39;m Kin.</h1>
            <p className="blurb">I&#39;m an Associate Software Engineer at <a href="http://www.mlbam.com/" id="mlbam">MLBAM</a>.</p>
            <p className="blurb">Interested in Web, Mobile Development, Software Engineering and learning new technologies.</p>
            <div className="social-media text-center">
              <a href="http://www.linkedin.com/in/kinzhaoo" id="linkedin"><span><i aria-hidden="true" className="fa fa-linkedin-square fa-2x"></i></span></a> <a href="http://www.github.com/kinzhao" id="github"><span><i aria-hidden="true" className="fa fa-github fa-2x"></i></span></a> <a href="https://stackoverflow.com/users/3183744/kin" id="stackoverflow"><span><i aria-hidden="true" className="fa fa-stack-overflow fa-2x"></i></span></a> <a href="mailto:developer@kinzhao.com?Subject=kinzhao.com" id="email"><span><i aria-hidden="true" className="fa fa-envelope-o fa-2x"></i></span></a>
            </div>
          </div>
        </div>
      );
   }
}

export default App;