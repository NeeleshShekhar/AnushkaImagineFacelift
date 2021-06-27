import React, {useEffect } from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import ReactGA from "react-ga";

const Footer = (props) =>
{
    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    const whatsappIconClicked = () => {
        ReactGA.event({
            category: 'Social',
            action: 'User shared on Whatsapp from Footer!'
        })
    }

    const donateNowClicked = () => {

        ReactGA.event({
            category: 'Button',
            action: 'User clicked on Donate Now from Footer!'
        })

    }
    const instagramIconClicked = () => {
        ReactGA.event({
            category: 'Social',
            action: 'User clicked on Instagram from Footer!!'
        })
    }

    const twitterIconClicked = () => {
        ReactGA.event({
            category: 'Social',
            action: 'User clicked on Twitter from Footer!'
        })
    }

    const telegramIconClicked = () => {
        ReactGA.event({
            category: 'Social',
            action: 'User shared on Telegram from Footer!'
        })

    }

    return (
        <div class="footer-basic">
            <footer>
                <div class="social"><a href="whatsapp://send?text= https://www.skilwil.com
                                        Earn while you learn ! Join your friends in solving brainstorming question from various subject and earn rewards.
                                        Also, ask your subject doubts for free."><WhatsAppIcon onClick={whatsappIconClicked} style={{ fontSize: "35px" }} /></a><a href="https://twitter.com/skilwilbusiness?s=08"><TwitterIcon onClick={twitterIconClicked} style={{ fontSize: "35px" }} /></a><a href="https://t.me/share/url?url=https%3A%2F%2Fwww.skilwil.com&text=Earn%20while%20you%20learn%20!%20Join%20your%20friends%20in%20solving%20brainstorming%20question%20from%20various%20subject%20and%20earn%20rewards.%20Also%2C%20ask%20your%20subject%20doubts%20for%20free"><TelegramIcon onClick={telegramIconClicked} style={{ fontSize: "35px" }} /></a><a href="https://www.instagram.com/skilwil/"><InstagramIcon onClick={instagramIconClicked} style={{ fontSize: "35px" }} /></a></div>
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="#">Home</a></li>
                    <li class="list-inline-item"><a href="https://forms.gle/vcXEqv1QAg5QsGiTA">Contact Us</a></li>
                    <li class="list-inline-item"><a onClick={donateNowClicked} href="https://forms.gle/6pkQi1QXtek4Lw6dA">Donate</a></li>
                </ul>
                <p class="copyright">SkilWil © 2020</p>
            </footer>
        </div>
    );
}
export default Footer;