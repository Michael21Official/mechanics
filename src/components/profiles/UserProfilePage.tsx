import React from 'react';
import './UserProfilePage.css';
import Header from '../common/Header';


function UserProfilePage() {
  return (
    <div>
    <Header />
      <div className="container">
        <div className="left">
          <div className="top profile">
            <div className="bg-profile"></div>
            <img src="https://i.ibb.co/pxvkv6Z/download.jpg" className="pic-profile" alt="User Avatar" />
            <div className="info">
              <div className="profil">
                <img src="https://cdn-icons-png.flaticon.com/512/7011/7011411.png" alt="Stats Icon" />
                <span>Stats</span>
              </div>
              <div className="trophy">
                <img src="https://cdn-icons-png.flaticon.com/512/7011/7011471.png" alt="Trophies Icon" />
                <span>Trophies</span>
              </div>
            </div>
          </div>
          <div className="bottom">
            <h1>Levels</h1>
            <div className="level warrior">
              <img src="https://cdn-icons-png.flaticon.com/128/3496/3496701.png" alt="Warrior Icon" />
              <h4>Warrior <span>Level 24</span></h4>
            </div>
            <div className="level hunter">
              <img src="https://cdn-icons-png.flaticon.com/128/3496/3496995.png" alt="Hunter Icon" />
              <h4>Hunter <span>Level 21</span></h4>
            </div>
            <div className="level mage">
              <img src="https://cdn-icons-png.flaticon.com/128/3496/3496231.png" alt="Mage Icon" />
              <h4>Mage <span>Level 22</span></h4>
            </div>
            <div className="level priest">
              <img src="https://cdn-icons-png.flaticon.com/128/3496/3496838.png" alt="Priest Icon" />
              <h4>Priest <span>Level 19</span></h4>
            </div>
            <p className="play">Play Now</p>
          </div>
        </div>
        <div className="right">
          <div className="top stats">
            <h1>Skill</h1>
            <div className="skills">
              <h3 className="skillsTop">PVP <span className="pvp-number">62</span></h3>
              <div className="skillsBottom">
                <div className="progress">
                  <div className="pvp progress-bar progress-bar-info" role="progressbar"></div>
                </div>
              </div>
              <h3 className="skillsTop">Farming <span className="farm-number">48</span></h3>
              <div className="skillsBottom">
                <div className="progress">
                  <div className="farming progress-bar progress-bar-info" role="progressbar"></div>
                </div>
              </div>
              <h3 className="skillsTop">Victories <span className="vic-number">91</span></h3>
              <div className="skillsBottom">
                <div className="progress">
                  <div className="victories progress-bar progress-bar-info" role="progressbar"></div>
                </div>
              </div>
              <h3 className="skillsTop">Supporting <span className="sup-number">77</span></h3>
              <div className="skillsBottom">
                <div className="progress">
                  <div className="supporting progress-bar progress-bar-info" role="progressbar"></div>
                </div>
              </div>
              <i className="fa fa-circle-thin" aria-hidden="true"><span>Compare</span></i>
            </div>
          </div>
          <div className="bottom">
            <h1>Recent Matches</h1>
            <table className="matches">
              <tr>
                <td className="wl win">Win</td>
                <td className="date">20/09/2017 19:35</td>
                <td className="time">24:19</td>
              </tr>
              <tr>
                <td className="wl loss">Loss</td>
                <td className="date">18/09/2017 17:22</td>
                <td className="time">42:07</td>
              </tr>
              <tr>
                <td className="wl loss">Loss</td>
                <td className="date">18/09/2017 13:45</td>
                <td className="time">33:25</td>
              </tr>
              <tr>
                <td className="wl win">Win</td>
                <td className="date">14/09/2017 20:24</td>
                <td className="time">18:25</td>
              </tr>
            </table>
            <span className="view-more">View more..</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
