import React from 'react';
import 'babel-polyfill';
import { polyfill } from 'es6-promise';
import Hei from './Hei.jsx';
import { Media, Player, controls, withMediaProps } from 'react-media-player';
polyfill();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      videoPosisjon: 0,
      scrollPosisjon: 0,
      playing: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ videoPosisjon: document.getElementById('video').getBoundingClientRect().y})
  }

  handleScroll (event) {
    this.setState({ scrollPosisjon: event.currentTarget.scrollY });
  }

  clickOnButton (event, id) {
    const button = document.getElementById(id);
    button.click();
    this.setState({playing: !this.state.playing});
  }

  render () {
    const { PlayPause } = controls;
    const autoplay = this.state.scrollPosisjon > this.state.videoPosisjon;
    const videoimgvisibility = this.state.playing ? 'hidden' : 'visible';

    return (
        <div>
          <div className="meny">
            <img style={{alignSelf: 'left', width: 100}} src="/img/nogrlogo.png"/>
            <img style={{alignSelf: 'right', width: 80}} src="/img/burgermeny.png"/>
          </div>
          <div className="folk-i-verden">
            <img src="/img/folkiverden.png"/>
          </div>
          <Media>
            <div className="media">
              <div className="media-element left">
                <div className="media-og-text">
                  <div className="img" style={{backgroundImage: "url(\"/img/Snowboarder1.png\")"}}>
                    <img className="play-icon" src="/img/play.png"/>
                  </div>
                  <p className="info info-1 right">{`“Det tar tre timer å gå fra landsbyen min til bakken, men det er verdt det.”`}</p>
                  <p className="info info-2 right">Graham - 13 år gammel snowboarder fra Sør-Afrika</p>
                </div>
                <div className="her-er-vi">
                  Nå er vi i Leshoto. Følg reisen på Snapchat
                  <img src="/img/snapchat.png"/>
                </div>
              </div>
              <div className="media-element">
                <div className="media-og-text">
                  <div className="img right" style={{backgroundImage: "url(\"/img/Crackheads.jpg\")"}}>
                    <img className="play-icon" src="/img/play.png"/>
                  </div>
                  <p className="info info-1 left">{`“Her i Detroit prøver “crackheads” å ta over byen. De skremmer ikke meg!”`}</p>
                  <p className="info info-2 left">John - En manns kamp for normalitet</p>
                </div>
              </div>

              <div className="media-element media-video">
                <div className="media-og-text">
                  <div className="img" style={{backgroundImage: "url(\"/img/laerer.JPG\")", visibility: videoimgvisibility}}>
                    <img className="play-icon" src="/img/play.png"/>
                  </div>
                  <div className="media-player" id="video">
                    <Player src="/video/LesothoLiten.mp4" onPlay={() => this.setState({playing: true})}/>
                  </div>
                  <p className="info info-1 right">{`“Jeg vil ikke bare være et verktøy for å føde barn”`}</p>
                  <p className="info info-2 right">{`Lærerinnen i Lesotho`}</p>
                </div>
                <div className="media-controls">
                  <PlayPause />
                </div>
              </div>

              <div className="media-element" >
                <div className="media-og-text">
                  <div className="img right" style={{backgroundImage: "url(\"/img/Lucha1.jpg\")"}}>
                    <img className="play-icon" src="/img/play.png"/>
                  </div>
                  <p className="info info-1 left">{`“Selvfølgelig er jeg redd. Men i ringen og foran publikum er jeg proff.”`}</p>
                </div>
              </div>
              <div className="media-element">
                <div className="media-og-text">
                  <div className="img" style={{backgroundImage: "url(\"/img/Nafissa.jpg\")"}}>
                    <img className="play-icon" src="/img/play.png"/>
                  </div>
                  <p className="info info-1 right">{`“Jeg visste ikke hva sorg virkelig var før mamma og pappa ble drept på samme dag”`}</p>
                  <p className="info info-2 right">Nafissa - Fra Somalia til Norge</p>
                </div>
              </div>
              <div className="media-element">
                <div className="media-og-text">
                  <div className="img right" style={{backgroundImage: "url(\"/img/Barnehjemmet5.JPG\")"}}>
                    <img className="play-icon" src="/img/play.png"/>
                  </div>
                  <p className="info info-1 left">{`“De virkelige heltene er mødrene og barna deres”`}</p>
                  <p className="info info-2 left">Dennis - Barnehjemmet i Baja</p>
                </div>
              </div>
              <div className="media-element media-video" >
                <div className="media-og-text">
                  <div className="img" style={{backgroundImage: "url(\"/img/Syrer2.jpg\")", visibility: videoimgvisibility}}>
                    <img className="play-icon" src="/img/play.png"/>
                  </div>
                  <div className="media-player" id="video">
                    <Player src="/video/SyrerLiten.mp4" onPlay={() => this.setState({playing: true})}/>
                  </div>
                  <p className="info info-1 right">{`“Det beste som kan skje er å få et liv. Jeg trenger ikke noe annet.”`}</p>
                  <p className="info info-2 right">Ramin - På flukt fra Syria</p>
                </div>
                <div className="media-controls">
                  <PlayPause />
                </div>
              </div>
            </div>
          </Media>
        </div>
    );
  }
};

export default withMediaProps(App);