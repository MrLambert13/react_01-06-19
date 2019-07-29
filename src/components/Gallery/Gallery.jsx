import './Gallery.sass';

import React, { Component } from 'react';
import { ImageBox } from 'components/ImageBox';

export class Gallery extends Component {
  state = {
    pictures: [],
  };

  componentDidMount() {
    const { token } = this.props;

    fetch('http://localhost:8888/api/photos', {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ pictures: data.photos })
      });
  }

  render() {
    const { pictures } = this.state;
    console.log(pictures);

    return (
      <div className="gallery">
        {pictures.length > 0
          ? pictures.map((picture, idx) => <ImageBox key={idx} {...picture} />)
          : <span>Loading...</span>}
      </div>
    );
  }
};
