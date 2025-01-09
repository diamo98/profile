import { h } from 'preact';
import style from './style.css';

const Contact = () => {
    return (
        <div class={style.contact}>
            <h1>Contact Information</h1>
            <div class={style.contactInfo}>
                <div class={style.infoItem}>
                    <h2>Email</h2>
                    <p><a href="mailto:diana.moya.osorio@liu.se">diana.moya.osorio@liu.se</a></p>
                </div>
                <div class={style.infoItem}>
                    <h2>Department</h2>
                    <p>Department of Electrical Engineering</p>
                </div>
                <div class={style.infoItem}>
                    <h2>Mailing Address</h2>
                    <p>SE-581 83 Linköping</p>
                </div>
                <div class={style.infoItem}>
                    <h2>Visiting Address</h2>
                    <p>Building B, Entrance 29, top floor</p>
                    <p>Corridor A, Office 3A:436</p>
                    <p>Campus Valla, Linköping</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;

