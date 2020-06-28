import React, { Component } from 'react';
import { getCharacter, getEpisode, getLocation } from '../api';

export class EpisodeDetail extends Component {
  state = {
    id: null,
    name: "",
    air_date: "",
    characters: []
  };

  componentDidMount() {
    getEpisode(this.props.data.id)
    .then(data => {
      this.setState(data.data.episode);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      getEpisode(this.props.data.id)
      .then(data => {
        this.setState(data.data.episode);
      });
    }
  }

  render() {
    let header;
    if (this.props.previous){
      header =  <div className="row">
                  <div className="col-sm-1">
                    <button className="btn"
                            onClick={() => {
                              this.props.goPrevious(this.props.currentPages)
                            }}>
                            <i class="fa fa-arrow-left"></i>
                    </button>
                  </div>
                  <div className="col-sm-9 col-sm-offset-1"><h3>{this.state.name}</h3></div>
                </div>;
    } else {
      header =  <div className="row">
                  <div className="col-sm-12"><h3>{this.state.name}</h3></div>
                </div>;
    }
    return (
      <div className="card">
        <div className="card-header">{header}</div>
        <div className="card-body">
          <h5 className="card-title text-muted">{this.state.episode}</h5>
          <p className="card-text">{this.state.air_date}</p>
          <p className="card-text"><strong>Characters:</strong></p>
          <ul>
            {this.state.characters.map((ch) => {
              return(
                <li className="text-link" onClick={() => {this.props.addPage("character", ch, this.props.currentPages)}}>{ch.name}</li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}


export class CharacterDetail extends Component {
  state = {
    id: null,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      id: null
    },
    location: {
      name: "",
      id: null
    },
    image: "",
    episode: []
  };

  componentDidMount() {
    getCharacter(this.props.data.id)
    .then(data => {
      this.setState(data.data.character);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      getCharacter(this.props.data.id)
      .then(data => {
        this.setState(data.data.character);
      });
    }
  }

  render() {
    let header;
    if (this.props.previous){
      header =  <div className="row">
                  <div className="col-sm-1">
                    <button className="btn"
                            onClick={() => {
                              this.props.goPrevious(this.props.currentPages)
                            }}>
                            <i class="fa fa-arrow-left"></i>
                    </button>
                  </div>
                  <div className="col-sm-9 col-sm-offset-1"><h3>{this.state.name}</h3></div>
                </div>;
    } else {
      header =  <div className="row">
                  <div className="col-sm-12"><h3>{this.state.name}</h3></div>
                </div>;
    }
    return (
      <div className="card">
        <div className="card-header">{header}</div>
        <div className="card-body">
          <div className="row">

            <div className="col-sm-6">
              <p className="card-text"><strong>Status:</strong> {this.state.status}</p>
              <p className="card-text"><strong>Species:</strong> {this.state.species}</p>
              <p className="card-text"><strong>Type:</strong> {this.state.type}</p>
              <p className="card-text"><strong>Gender:</strong> {this.state.gender}</p>
              <p className="card-text">
                <strong>Origin: </strong>
                {this.state.origin.id ?
                  <bold className="text-link"
                     onClick={() => {this.props.addPage("location", this.state.origin, this.props.currentPages)}}>
                     {this.state.origin.name}
                  </bold>
                :
                  <bold className="">{this.state.origin.name}</bold>
                }
              </p>
              <p className="card-text">
                <strong>Location: </strong>
                {this.state.location.id ?
                  <bold className="text-link"
                     onClick={() => {this.props.addPage("location", this.state.location, this.props.currentPages)}}>
                     {this.state.location.name}
                  </bold>
                :
                  <bold className="">{this.state.origin.name}</bold>
                }
              </p>
            </div>
            {this.state.location.id ?
            <div className="col-sm-6">
              <img src={this.state.image} alt={this.state.name}/>
            </div>
            :
            <div className="col-sm-6">
              <img src={this.state.image} alt={this.state.name}/>
            </div>
            }
          </div>
          <br/>
          <p className="card-text"><strong>Episodes:</strong></p>
          <ul>
            {this.state.episode.map((ep) => {
              return(
                <li className="text-link" onClick={() => {this.props.addPage("episode", ep, this.props.currentPages)}}>{ep.episode} - {ep.name}</li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}


export class LocationDetail extends Component {
  state = {
    id: null,
    name: "",
    type: "",
    dimension: "",
    air_date: "",
    residents: []
  };

  componentDidMount() {
    getLocation(this.props.data.id)
    .then(data => {
      this.setState(data.data.location);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      getLocation(this.props.data.id)
      .then(data => {
        this.setState(data.data.location);
      });
    }
  }

  render() {
    let header;
    if (this.props.previous){
      header =  <div className="row">
                  <div className="col-sm-1">
                    <button className="btn"
                            onClick={() => {
                              this.props.goPrevious(this.props.currentPages)
                            }}>
                            <i class="fa fa-arrow-left"></i>
                    </button>
                  </div>
                  <div className="col-sm-9 col-sm-offset-1"><h3>{this.state.name}</h3></div>
                </div>;
    } else {
      header =  <div className="row">
                  <div className="col-sm-12"><h3>{this.state.name}</h3></div>
                </div>;
    }
    return (
      <div className="card">
        <div className="card-header">{header}</div>
        <div className="card-body">
          <p className="card-text"><strong>Type:</strong> {this.state.type}</p>
          <p className="card-text"><strong>Dimension:</strong> {this.state.dimension}</p>
          <p className="card-text"><strong>Residents:</strong></p>
          <ul>
            {this.state.residents.map((re) => {
              return(
                <li className="text-link" onClick={() => {this.props.addPage("character", re, this.props.currentPages)}}>{re.name}</li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}
