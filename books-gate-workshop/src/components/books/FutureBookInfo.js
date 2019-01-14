import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class FutureBookInfo extends Component {

    render() {
        return (
            <div className="content-md container">
                <br/><br/>
                <div className="row margin-b-20">
                    <div className="col-sm-6">
                        <h2>Featured Book. Expected soon</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-7 sm-margin-b-50">
                        <div className="margin-b-30">
                            <p>How modern life has transformed major faiths worldwide in the twenty-first century – and what breaking new research in neuroscience, human genetics and the socioeconomic trends of today can tell us about upcoming spiritual beliefs of the future.</p>
                            <p>Ultimately, the "future" of religion is approaching far more quickly than many of us think. The greatest mysteries of life – who we are, how life began, the nature of existence and more – are fast losing their traditional power to support supernatural faith. Human evolution, brain function and the nature of physical reality will soon be considered common knowledge in more parts of the world than ever before. Today's hyper-connected, science-heavy, internet-of-everything transition will forever change our species and the way we see ourselves in the cosmos. This book offers a vision of that future. Readers of Post Secular will explore the ongoing dilution of supernaturalism around the world; a process completely changing what we currently call secular. Join Marc Schaus on an exploration of this change toward next-gen spirituality and how "religion" will function when living the secular life becomes the new normal.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-sm-offset-1">
                        <Link to='/' title="Read more">
                            <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MgQuHxMtt2fkvTHM7ZDohy_OUs1iBX5dEUtOIkCqmmYJZffifQ" alt="Our Office"/>
                        </Link>
                        <br/>
                        <br/>
                        <div className="margin-b-30">
                            <h5>PostSecular: Science</h5>
                            <h6>by Marc Schaus</h6>
                        </div>
                    </div>
                </div>
                <p>"Anyone entering the literature for the first time on why people believe in God, commit to religion, and rely on faith can be forgiven for feeling overwhelmed in a miasma of ideas, hypotheses, theories, and just-so stories, and this is just from a secular and scientific perspective. Marc Schaus's well-organized and highly readable distillation of this literature, Post Secular, gives readers an important overview of what we know today about these vital matters of the human condition.”</p>
            </div>
        )
    }
}