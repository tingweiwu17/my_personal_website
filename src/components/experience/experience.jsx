import React from "react";
import './experience.css';
import {AiFillCheckCircle} from 'react-icons/ai';

const Experience = () => {
    return(
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience-container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <AiFillCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>在校期間學習，有作品經驗</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>在校期間學習，有作品經驗</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>在校期間學習</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>Vue.js</h4>
                                <small className='text-light'>專題使用，日後加強學習</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>React.js</h4>
                                <small className='text-light'>自學一些部分，做此網頁使用</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>SASS/SCSS</h4>
                                <small className='text-light'>2022鐵人賽主題</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <AiFillCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>初階</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>在校課程學習</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>專題使用</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>處理機器學習</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Experience