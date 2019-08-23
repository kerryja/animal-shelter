import React, { Component } from "react";
import "./Slider.css";
import ImageGallery from "react-image-gallery";
// import "/Kerry/bloc2/animal-shelter/node_modules/react-image-gallery/styles/css/image-gallery.css"
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "../config/config";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dog: null
    };
    this.id = props.id;
  }

  async componentDidMount() {
    let response = await fetch(global.gConfig.baseAPIURL + "/dog/" + this.id);
    let dog = await response.json();
    this.setState({ dog });
  }
  render() {
    const dog = this.state.dog;
    if (dog === null) {
      return <div />;
    }
    const images = [
      {
        original: global.gConfig.baseImgUrl + dog.picture
      }

      // {
      //   original: "Luna2.jpg"
      // },
      // {
      //   original: "Luna3.jpg"
      // }
    ];

    return <ImageGallery items={images} />;
  }
}

export default Slider;
