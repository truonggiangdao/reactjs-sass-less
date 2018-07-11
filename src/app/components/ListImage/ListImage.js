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
            <img className="img-fluid r1-c1" src="https://macnhien.files.wordpress.com/2010/08/hongdiep.jpg" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r1-c2" src="https://monchibshu.files.wordpress.com/2011/05/danmei-743.jpg" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r1-c3" src="https://vonguyetquan.files.wordpress.com/2015/08/6b4o9b7h.jpg" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <img className="img-fluid r2-c1" src="https://thuynguyetvien.files.wordpress.com/2011/12/trc3adch-tinh-lc3a2u-he1bb87-lie1bb87t-chi-te1bb8fa-tc3acnh1.jpg" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r2-c2" src="https://thuytruongluu.files.wordpress.com/2011/03/qa01.jpg" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r2-c3" src="http://wikidich.com/photo/59852e82ef21ec0bdc8ac381" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <img className="img-fluid r3-c1" src="https://garenaamduongsu.com/wp-content/uploads/2018/07/huong-dan-choi-quy-nu-hong-diep-momiji-5.png" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r3-c2" src="https://linhchi27393.files.wordpress.com/2012/03/bb21.jpg" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r3-c3" src="https://linhchi27393.files.wordpress.com/2012/04/mx1.jpg?w=820" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <img className="img-fluid r4-c1" src="https://hahannguyet.files.wordpress.com/2012/01/4eec96df07f16f2462279872.jpg?w=714" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r4-c2" src="https://hahannguyet.files.wordpress.com/2012/01/9bc2ddafd212aeccfaed5071.jpg" alt="" />
          </div>
          <div className="col-sm-4">
            <img className="img-fluid r4-c3" src="http://wikidich.com/photo/5a069752ef21ec3a52d153d6?o=1" alt="" />
          </div>
        </div>

      </div>
    );
  }
}

export default ListImage;
