import React from 'react';
import JumpButton from './JumpButton';
import ShareButton from './ShareButton';

class Popup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      games: [
        {
          id: 0,
          title: "Beat Saber",
          video: <iframe src="https://www.youtube.com/embed/3rIjcRK_BNU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>,
          catchcopy: "音楽好きで体を動かしたいあなたにはBeat Saberがぴったり！",
          description: "Beat Saberはスター・ウォーズのような剣でリズムに合わせて向かってくるノーツを切るVRリズムゲーム。",
          link: "https://store.steampowered.com/app/620980/Beat_Saber/"
        },
        {
          id: 1,
          title: "Eagle Flight",
          video: <iframe src="https://www.youtube.com/embed/3rIjcRK_BNU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>,
          catchcopy: "音楽好きで体を動かしたいあなたにはBeat Saberがぴったり！",
          description: "Beat Saberはスター・ウォーズのような剣でリズムに合わせて向かってくるノーツを切るVRリズムゲーム。",
          link: "https://store.steampowered.com/app/620980/Beat_Saber/"
        },
        {
          id: 2,
          title: "Echo Arena",//Echo Combat?
          video: <iframe src="https://www.youtube.com/embed/3rIjcRK_BNU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>,
          catchcopy: "音楽好きで体を動かしたいあなたにはBeat Saberがぴったり！",
          description: "Beat Saberはスター・ウォーズのような剣でリズムに合わせて向かってくるノーツを切るVRリズムゲーム。",
          link: "https://store.steampowered.com/app/620980/Beat_Saber/"
        },
        {
          id: 3,
          title: "TO THE TOP",
          video: <iframe src="https://www.youtube.com/embed/3rIjcRK_BNU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>,
          catchcopy: "音楽好きで体を動かしたいあなたにはBeat Saberがぴったり！",
          description: "Beat Saberはスター・ウォーズのような剣でリズムに合わせて向かってくるノーツを切るVRリズムゲーム。",
          link: "https://store.steampowered.com/app/620980/Beat_Saber/"
        },
        {
          id: 4,
          title: "SUPER HOT VR",
          video: <iframe src="https://www.youtube.com/embed/3rIjcRK_BNU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>,
          catchcopy: "音楽好きで体を動かしたいあなたにはBeat Saberがぴったり！",
          description: "Beat Saberはスター・ウォーズのような剣でリズムに合わせて向かってくるノーツを切るVRリズムゲーム。",
          link: "https://store.steampowered.com/app/620980/Beat_Saber/"
        }, 
        {
          id: 5,
          title: "Unspoken",
          video: <iframe src="https://www.youtube.com/embed/3rIjcRK_BNU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>,
          catchcopy: "音楽好きで体を動かしたいあなたにはBeat Saberがぴったり！",
          description: "Beat Saberはスター・ウォーズのような剣でリズムに合わせて向かってくるノーツを切るVRリズムゲーム。",
          link: "https://store.steampowered.com/app/620980/Beat_Saber/"
        },   
        {
          id: 6,
          title: "Sprint Vector",
          video: <iframe src="https://www.youtube.com/embed/3rIjcRK_BNU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>,
          catchcopy: "音楽好きで体を動かしたいあなたにはBeat Saberがぴったり！",
          description: "Beat Saberはスター・ウォーズのような剣でリズムに合わせて向かってくるノーツを切るVRリズムゲーム。",
          link: "https://store.steampowered.com/app/620980/Beat_Saber/"
        },
        {
          id: 7,
          title: "Mages Tale",
          video: <iframe src="https://www.youtube.com/embed/3rIjcRK_BNU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>,
          catchcopy: "音楽好きで体を動かしたいあなたにはBeat Saberがぴったり！",
          description: "Beat Saberはスター・ウォーズのような剣でリズムに合わせて向かってくるノーツを切るVRリズムゲーム。",
          link: "https://store.steampowered.com/app/620980/Beat_Saber/"
        }    
      ]
    }
  }
  render() {
    //結果の情報だけ使用する
    var result_num = this.props.result;
    var result = this.state.games[result_num]; 

    return (
      <div id = 'popup-outside'>
        <i className="fas fa-times-circle" onClick={this.props.closePopup}></i>
        <div id = 'popup-card-outer'>
          <div id = 'popup-card-inner'>
            <p id = 'result-recommend'>あなたにオススメのVRゲームは...</p>
            <p id = 'result-game'><span class = 'highlight'>{result.title}</span></p>
            <div id = 'result-video'>{result.video}</div>
            <p id = 'result-description'>{result.description}</p>
            {/* <button onClick={this.props.closePopup}>close me</button> */}
            <div id = 'popup-footer'>
              <div id = 'result-jump-outer'>
                <JumpButton service = 'steam' text = 'Steamで詳しくみる' link = {result.link}/>
              </div>
              <div id = 'result-share-outer'>
                <ShareButton service = 'twitter' icon = 'fab fa-twitter'/>
                <ShareButton service = 'facebook' icon = 'fab fa-facebook'/>
                <ShareButton service = 'line' icon = 'fab fa-line'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
