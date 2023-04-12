import React from "react";
import './protfolio.css';
import IMG1 from '../../images/front.png';
import IMG2 from '../../images/personal.png';
import IMG3 from '../../images/website.png';
import IMG4 from '../../images/java.png';
import IMG5 from '../../images/ml.png';


const data = () => [
    {
        id: 1,
        title: '專題:通訊診療與個案管理系統',
        image: IMG1,
        github: 'https://github.com/HappyGroupHub/TelemedicConsult-Web',

    },{
        id: 2,
        title: '2022鐵人賽:SASS/SCSS',
        image: IMG2,
        github: 'https://ithelp.ithome.com.tw/users/20151717',

    },{
        id: 3,
        title: '個人介紹網站:React.js',
        image: IMG3,
        github: 'https://github.com/tingweiwu17/my_personal_website',

    },{
        id: 4,
        title: 'Java專案練習',
        image: IMG4,
        github: 'https://github.com/tingweiwu17',

    },{
        id: 5,
        title: 'Python機器學習實作',
        image: IMG5,
        github: 'https://github.com/tingweiwu17/colab_machine_learing',

    }
]


const Protfolio = () => {
    return(
        <section id='protfolio'>
            <h5>My recent work</h5>
            <h2>Protfolio</h2>
            <div className="container portfolio_container">
                {
                    data().map(({id,image,title,github,liveDemo}) => {
                        return(
                        <article key={id} className="portfolio_item">
                            <div className="portfolio_item-image">
                                <img src={image} alt={title}/>
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio_item-cta">
                                <a href={github} className="btn">View More</a>
                            </div>
                        </article>
                        )
                    })
                }

            </div>
        </section>
    )
}
export default Protfolio