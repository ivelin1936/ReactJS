import React, {Component} from 'react';
import '../../../styles/account-style.css';

export default class AccountComponent extends Component {

    render() {
        return (
            <section className="account-section">
                <article className="account-details">
                    <h3>Paul Rossi</h3>

                    <ul>
                        <li>
                            <strong>Username:</strong> SomeUserName
                        </li>
                        <li>
                            <strong>Email:</strong> SomeEmail
                        </li>
                        <li>
                            <strong>Phone number:</strong> +359 555 339 845
                        </li>
                        <li>
                            <strong>Town:</strong> SomeTown
                        </li>
                        <li>
                            <strong>Address:</strong> SomeAddress
                        </li>
                    </ul>

                    <p className="account-icons">
                        <a href="" title="FaceBook"><i class="fa fa-facebook-f"></i></a>
                        <a href="" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
                        <a href="" title="Instagram"><i class="fa fa-instagram"></i></a>
                        <a href="" title="GitHub"><i class="fa fa-github"></i></a>
                        <a href="" title="Pinterest"><i class="fa fa-pinterest"></i></a>
                    </p>

                    <span>&copy; SomeUserName, 2019. All rights reserved</span>
                </article>

                <article className="account-review">
                    <article>
                        <h2>ABOUT ME</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret
                            dolore adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enimet minim
                            veniam magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim
                            enum esqudiat dolore.
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret
                            dolore adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enimet minim
                            veniam magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim
                            enum esqudiat dolore.
                        </p>
                    </article>
                    <article>
                        <img src="http://www.jeewanmalahospital.com/uploaded_files/doctors/pi_image1_42.jpg"
                             alt="picture"/>
                    </article>
                </article>
            </section>
        )
    }
}