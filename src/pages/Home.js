import './Home.css';
import Header from "../components/Header";

export default function Home() {
    return (
        <body>
            <Header />
            <h1>jinojaem</h1>
        <body>
        <div class="container">
            <div class="box window">
                <div>
                  <div className="image-container">
                    <img src={cute} style={{width: "12rem"}} alt="cat" />

                    <img src={youtube} style={{padding: "1rem", width: "2rem"}} onClick={onYoutubeClick}/>
                  </div>
                </div>

                <div>
                    <h2>about me!</h2>
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
            </div>
        </div>
    </body>
        </body>
    )
}