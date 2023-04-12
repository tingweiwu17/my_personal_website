import React from "react";
import {BsInstagram ,BsGithub ,BsHddNetwork} from "react-icons/bs";

const HeaderSocials = () => {
    return(
        <div className='header_socials'>
            <a href="https://www.instagram.com/we1_1i7/" target={"_blank"}><BsInstagram /></a>
            <a href="https://github.com/tingweiwu17" target={"_blank"}><BsGithub/></a>
            <a href="https://ithelp.ithome.com.tw/users/20151717" target={"_blank"}><BsHddNetwork/></a>


        </div>
    )
}
export default HeaderSocials