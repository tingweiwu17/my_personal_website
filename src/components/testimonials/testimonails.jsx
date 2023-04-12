import React from "react";
import './testimonails.css';
import AVTR1 from '../../images/blh.jpg';
import AVTR2 from '../../images/tly.jpg';
import AVTR3 from '../../images/sing.jpg';

import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data =[
    {
        avatar: AVTR1,
        name: '桃園高中班聯會22屆-副主席',
        review: '帶領班聯會成員運作。舉辦公聽會、參加校務會議，成為校園師長跟學生之間的橋樑。當時我曾擔任桃園高中班聯會副主席一職，負責協助主席規劃和組織班級相關活動。通過與成員密切合作，成功組織了多項活動，包括校慶活動、公聽會、新生訓練等，並且協助籌備學校的大型活動。在擔任副主席期間，我學習到如何領導和管理一個團隊，有效溝通和協調不同的意見和想法，並且學會了處理突發事件和挑戰的能力。',
        linkToView: 'https://www.instagram.com/tysh_ucg/'
    },{
        avatar: AVTR2,
        name: '三校聯合茶會-總召',
        review: '「桃園高中、陽明高中、中壢高中」三校聯合茶會，以供各校班聯會學生會交流。統籌工作項目:會場主持、接待服務、茶點供應、場佈、開場舞、廠商洽詢、申請贊助等等。緊密協調各項工作，讓活動得以順利進行。',
        linkToView: 'https://www.facebook.com/events/2210635355836993'
    },{
        avatar: AVTR3,
        name: '桃園高中舞唱會-公關組',
        review: '在聖誕節前夕，與各廠商洽詢，邀請多位藝人到學校進行表演，包括舞蹈、唱歌等多個範疇，讓全校同學都可以參加。，營造出歡樂的氛圍，讓大家在音樂和歡笑中度過了一個難忘的時刻。此次活動除了具娛樂性外，也讓我在籌辦過程中學習到了組織、溝通和領導等能力，希望能在未來的職場中應用這些經驗。',
        linkToView: 'https://www.instagram.com/p/Bqe5ZfCHvZF/?utm_source=ig_web_copy_link'
    }

]

const Testimonials = () => {
    return(
        <section id='testimonails'>
            <h5>I Participated in</h5>
            <h2>Club Activities</h2>
            <Swiper className='container testimonails_container'
             modules={[Pagination]}
            spaceBetween={40} slidesPerView={1}
            pagination={{clickable: true}}>
                {
                    data.map(({avatar,name,review,linkToView},index) => {
                        return(
                            <SwiperSlide key={index} className="testimonail">
                                <div className="client_avatar">
                                    <img src={avatar} alt="Avatar One" className="first1"/>
                                    <h5 className="client_name">{name}</h5>
                                    <small className="client_review">
                                        {review}
                                    </small>
                                    <a href={linkToView} className="btn">點我查看更多</a>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}
export default Testimonials