import './AboutMe.css';
import Header from '../components/Header';
import TopBar from "../components/TopBar";
import {useCallback} from "react";

import cute from '../cute.png';
import youtube from '../images/logos/youtube-logo.png';
import instagram from '../images/logos/instagram-icon.png';
import twitter from '../images/logos/twitter-logo.png'
import tiktok from '../images/logos/tiktok-logo.png'

export default function AboutMe() {
  const onYoutubeClick = useCallback(() => {
    window.open("https://youtube.com/yoonjin")
  }, []);

  const onInstagramClick = useCallback(() => {
    window.open("https://instagram.com/jinojaem")
  }, []);

  const onTwitterClick = useCallback(() => {
    window.open("http://x.com/yujavu")
  }, []);

  const onTikTokClick = useCallback (() => {
    window.open("https://tiktok.com/jinojaem")
  }, []);

  return (
    <div>
      <Header />

        <div class="page">
          <TopBar />

            <div className="about-container">
              <div>
                <div className="image-container">
                  <img src={cute} style={{width: "10rem", height: "10rem"}} alt="cat" />

                </div>
              </div>

              <div style={{marginTop: "2.5rem"}}>
                  <table>
                    <tr>
                      <th style = {{width: "30%"}}>NAME</th>
                      <th style = {{width: "40%"}}>DATE OF BIRTH</th>
                      <th style = {{width: "30%"}}>PRONOUNS</th>
                    </tr>
                    <tr>
                      <td>yoonjin</td>
                      <td>sept 22, 2005</td>
                      <td>she/her</td>
                    </tr>
                  </table>
              </div>

              <div>
                <div className="image-row">
                      <img src={youtube} style={{width: "2rem", marginRight: "0.8rem"}} onClick={onYoutubeClick}/>
                      <img src={instagram} style={{width: "2rem", marginRight: "0.8rem"}} onClick={onInstagramClick}/>
                      <img src={twitter} style={{width: "2rem", marginRight: "0.8rem"}} onClick={onTwitterClick}/>
                      <img src={tiktok} style={{width: "2rem", marginRight: "0.8rem"}} onClick={onTikTokClick}/>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

