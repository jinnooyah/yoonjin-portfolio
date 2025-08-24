import './AboutMe.css';
import Header from '../components/Header';
import TopBar from "../components/TopBar";
import {useCallback} from "react";

import yoonjin from '../yoonjin pic.png';
import signature from '../yoonjin signature.png';
import youtube from '../images/logos/youtube-logo.png';
import instagram from '../images/logos/instagram-logo.png';
import x from '../images/logos/x-logo.png';
import tiktok from '../images/logos/tiktok-logo.png';
import vgen from '../images/logos/vgen-logo.png';

export default function AboutMe() {
  const onYoutubeClick = useCallback(() => {
    window.open("https://youtube.com/yoonjin")
  }, []);

  const onInstagramClick = useCallback(() => {
    window.open("https://instagram.com/jinojaem")
  }, []);

  const onXClick = useCallback(() => {
    window.open("http://x.com/yujavu")
  }, []);

  const onTikTokClick = useCallback (() => {
    window.open("https://tiktok.com/@jinojaem")
  }, []);

  const onVGenClick = useCallback (() => {
    window.open("https://vgen.co/jinojaem")
  }, []);

  return (
    <div>
      <Header />

        <div class="page">
          <TopBar />

            <div className="about-container">
              <div>
                <div className="image-container">
                  <div>
                    <img src={yoonjin} style={{width: "12rem", marginTop: "1.2rem", marginLeft: "3rem"}} alt="yoonjin" />

                    <div>
                      <div className="image-row" style={{marginLeft: "2.2rem", marginTop: "-1.7rem"}}>
                        <img src={youtube} alt="youtube" style={{width: "2.5rem"}} onClick={onYoutubeClick}/>
                        <img src={instagram} alt="instagram" style={{width: "2.5rem", marginLeft: "0.3rem"}} onClick={onInstagramClick}/>
                        <img src={x} alt="x" style={{width: "2.5rem", marginLeft: "0.2rem"}} onClick={onXClick}/>
                        <img src={tiktok} alt="tiktok" style={{width: "2.5rem", marginLeft: "0.2rem"}} onClick={onTikTokClick}/>
                        <img src={vgen} alt="vgen" style={{width: "2.5rem", marginLeft: "0.2rem"}} onClick={onVGenClick}/>
                      </div>
                    </div>

                    <p style={{paddingLeft: "2.5rem", paddingTop: "0.2rem", fontSize: "14px"}}>art by <a href="https://x.com/lilbeanie_artz" target="_blank" rel="noreferrer">lilbeanie_artz</a> & <a href="https://x.com/AeriaNephri" target="_blank" rel="noreferrer">AeriaNephri</a></p>

                  </div>
                </div>
              </div>

              <div>
                <div style={{marginTop: "3.5rem"}}>
                    <table>
                      <tr>
                        <td style={{paddingLeft: "1rem", fontFamily: "pfontbold"}}>name</td>
                        <div className="highlight-container" style={{marginLeft: "-1.5rem"}}>
                          <td style={{paddingLeft: "0.5rem", color: "white"}}>yoonjin</td>
                        </div>
                      </tr>
                      <tr>
                        <td style={{paddingLeft: "1rem", fontFamily: "pfontbold", paddingTop:"0.2rem"}}>pronouns</td>
                        <div className="highlight-container" style={{marginLeft: "0.7rem", paddingRight: "8rem", marginTop:"0.2rem"}}>
                          <td style={{paddingLeft: "0.5rem", color: "white"}}>she/her</td>
                        </div>
                      </tr>
                      <tr>
                        <td style={{paddingLeft: "1rem", fontFamily: "pfontbold", paddingTop:"0.2rem"}}>age</td>
                        <div className="highlight-container" style={{marginLeft: "-2.9rem", marginTop:"0.2rem"}}>
                          <td style={{paddingLeft: "0.5rem", color: "white"}}>19</td>
                        </div>
                      </tr>
                    </table>
                </div>

                <div style={{marginTop: "1rem", paddingLeft: "1rem"}}>
                  <td style={{paddingRight: "3rem"}}>vocalist ⟡ mixer ⟡ graphic designer</td> 
                  <n></n>
                  <td style={{paddingRight: "3rem"}}>i love nct wish!</td> 
                </div>
                <tr>
                  <td style={{paddingTop: "1.2rem", paddingLeft: "1rem", fontFamily: "pfontbold", verticalAlign: "top"}}>signature</td>
                  <div>
                    <div className="signature-line" style={{marginTop: "2.3rem"}}></div>
                    <img src={signature} style={{marginTop: "-3.7rem", marginLeft: "3rem"}} alt="signature" />
                  </div>
                </tr>
              </div>
            </div>
        </div>
    </div>
  );
}

