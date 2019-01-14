import React, {Component} from 'react';
import '../../styles/boo-info-section.css';

export default class ChoiceUsSection extends Component {

    render() {
        return (
            <section className="books-info-section">
                <section className="books-info">
                    <img className="icon-one-size" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/1280px-Open_book_nae_02.svg.png" alt="open-book"/>
                        <h2>Tons of Books</h2>
                        <p>Today's blog features a lot of great books from Del Rey, almost all of which you have</p>
                </section>

                <section className="books-info">
                    <img className="icon-one-size" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/2000px-Blue_pencil.svg.png" alt="icon-pencil"/>
                        <h2>Hundreds of Authors</h2>
                        <p>Some writers have had prolific careers with hundreds of their works being published</p>
                </section>

                <section className="books-info">
                    <img className="icon-one-size" src="http://iconsetc.com/icons-watermarks/simple-blue/foundation/foundation_book-bookmark/foundation_book-bookmark_simple-blue_512x512.png" alt="icon-bookmarks"/>
                        <h2>Easily Bookmarked</h2>
                        <p>Bookmarks are a great way to tag pages you want to revisit.</p>
                </section>
            </section>
        )
    }
}