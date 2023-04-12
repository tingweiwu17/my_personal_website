import React from "react";
import './about.css';
import {FaAward} from "react-icons/fa";
import ME from '../../images/mememe.jpg';

const About = () => {
    return(
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image"/>

                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className='about_icon'/>
                            <h5>責任感</h5>
                            <small>重視責任感，盡全力用最高標準完成我負責的工作。</small>
                        </article>
                        <article className="about_card">
                            <FaAward className='about_icon'/>
                            <h5>積極向上</h5>
                            <small>對資訊領域保有熱忱，學以致用是最快樂的時候。</small>
                        </article>
                        <article className="about_card">
                            <FaAward className='about_icon'/>
                            <h5>團隊合作與獨立完成能力兼具</h5>
                            <small>具備獨立完成工作的能力，也能跟團隊成員合作愉快</small>
                        </article>
                    </div>
                    <p>
                        高中在社團活動中培養責任感與共同辦事的能力<br></br>
                        重視團隊合作氛圍，跟夥伴保持良好關係，以便達成共同目標<br></br>
                        對前端感到有興趣，對自己做出的作品有一定的要求，喜歡用不同的角度思考問題的最佳決方案<br></br>
                        兩年半餐飲打工經驗再次提升團體與個人工作效率
                    </p>
                    <a href="#contact" className="btn-primary">Let's Talk</a>
                </div>


            </div>
        </section>
    )
}
export default About
