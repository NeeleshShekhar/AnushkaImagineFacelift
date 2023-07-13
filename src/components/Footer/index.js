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
                <div class="social"><a href="whatsapp://send?text= https://www.anushkaimagine.com
                                       We bring you carefully-curated interior design ideas, to give your home a brand new look. Explore exclusive interior designs and trends that are every bit inspirational as they are practical. Our team of interior designers have put together ideas across kitchen, bedroom, living room and more, to help you pick a design that will best suit your home interior requirements."><WhatsAppIcon onClick={whatsappIconClicked} style={{ fontSize: "35px" }} /></a><a href="https://twitter.com/anushkaimagine?s=08"><TwitterIcon onClick={twitterIconClicked} style={{ fontSize: "35px" }} /></a><a href="/#"><TelegramIcon onClick={telegramIconClicked} style={{ fontSize: "35px" }} /></a><a href="https://www.instagram.com/anushkaimagine/"><InstagramIcon onClick={instagramIconClicked} style={{ fontSize: "35px" }} /></a></div>
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="#">Home</a></li>
                    <li class="list-inline-item"><a href="/contactus">Contact Us</a></li>
                    <li class="list-inline-item"><a onClick={donateNowClicked} href="https://forms.gle/6pkQi1QXtek4Lw6dA">Donate</a></li>
                </ul>
                <p class="copyright">Anushka Imagine © 2022</p>
            </footer>
        </div>
    );
}
export default Footer;