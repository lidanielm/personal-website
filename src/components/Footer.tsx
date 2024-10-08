import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

export default function Footer() {
    return (
        <div
            style={{
                width: '800px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '40px',
            }}>
            <h2 style={{ fontSize: '1.5em', alignSelf: 'flex-start' }}>
                Contact Me
            </h2>
            <p className="footer-info">
                <FontAwesomeIcon icon={faPhone} className="footer-icon" />
                &nbsp;&nbsp;Phone: +1 (267) 265-2845
            </p>
            <p className="footer-info">
                <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                &nbsp;&nbsp;Email: dli2004@seas.upenn.edu
            </p>
            <p className="footer-info">
                <svg
                    fill="#000000"
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 310 310"
                    color="#696969">
                    <g id="XMLID_801_">
                        <path
                            fill="#696969"
                            id="XMLID_802_"
                            d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
                    C77.16,101.969,74.922,99.73,72.16,99.73z"
                        />
                        <path
                            fill="#696969"
                            id="XMLID_803_"
                            d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
                    c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                        />
                        <path
                            fill="#696969"
                            id="XMLID_804_"
                            d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
                    c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
                    c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
                    C310,145.43,300.549,94.761,230.454,94.761z"
                        />
                    </g>
                </svg>
                &nbsp;&nbsp;LinkedIn:{' '}
                <a href="https://www.linkedin.com/in/lidanielm/">lidanielm</a>
            </p>
            <p className="footer-info">
                <svg
                    fill="#000000"
                    width="15px"
                    height="15px"
                    version="1.1"
                    viewBox="0 0 100 100">
                    <g>
                        <path
                            fill="#696969"
                            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                        />
                    </g>
                </svg>
                &nbsp;&nbsp;GitHub:{' '}
                <a href="https://github.com/lidanielm">lidanielm</a>
            </p>
        </div>
    );
}
