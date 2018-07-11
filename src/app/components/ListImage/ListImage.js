import React, { Component } from 'react';
import './ListImage.scss';
// import nene1 from './img/nene1.jpeg';
// import nene2 from './img/nene2.jpeg';
// import nene3 from './img/nene3.png';
// import nene4 from './img/nene4.jpeg';
// import nene5 from './img/nene5.jpeg';
// import nene6 from './img/nene6.jpeg';
// import nene7 from './img/nene7.png';
// import nene8 from './img/nene8.png';
// import nene9 from './img/nene9.jpeg';

class ListImage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.listimage = {
      src: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&h=350',
    };
  }

  render() {
    return (
      <div className="list-images">
        <div className="row">
          <div className="col-sm-4">
            <img className="img-fluid r1-c1" src="https://s7.favim.com/orig/151104/amazing-background-beach-beautiful-Favim.com-3521023.jpg" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r1-c2" src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&h=350" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r1-c3" src="https://travel.amerikanki.com/wp-content/uploads/2014/01/Most-Beautiful-Forests-Around-the-World-500x300.jpg" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <img className="img-fluid r2-c1" src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&h=350" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r2-c2" src="https://www.stylecraze.com/wp-content/uploads/2013/06/1752-Top-10-Most-Beautiful-Yellow-Roses-is.jpg" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r2-c3" src="https://travel.amerikanki.com/wp-content/uploads/2014/01/Most-Beautiful-Forests-Around-the-World-500x300.jpg" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <img className="img-fluid r3-c1" src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&h=350" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r3-c2" src="https://www.stylecraze.com/wp-content/uploads/2013/06/1752-Top-10-Most-Beautiful-Yellow-Roses-is.jpg" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r3-c3" src="https://travel.amerikanki.com/wp-content/uploads/2014/01/Most-Beautiful-Forests-Around-the-World-500x300.jpg" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <img className="img-fluid r4-c1" src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&h=350" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r4-c2" src="https://www.stylecraze.com/wp-content/uploads/2013/06/1752-Top-10-Most-Beautiful-Yellow-Roses-is.jpg" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r4-c3" src="https://travel.amerikanki.com/wp-content/uploads/2014/01/Most-Beautiful-Forests-Around-the-World-500x300.jpg" alt="" />
          </div>
        </div>

      </div>
    );
  }
}

export default ListImage;
