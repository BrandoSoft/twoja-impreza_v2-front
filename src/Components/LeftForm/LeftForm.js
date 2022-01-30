import React from 'react';
import { FaSearch } from 'react-icons/fa';

const LeftForm = () => {
    return (
        <main className="main-section">
        <aside className="main-section__aside">
            <form action="/home" method="post" className="form-home">
                <div id="calendar">
                    tu bedzie picker
                </div>

                <div className="form-home__legend-container">
                    <div className="form-home__legend">
                        <div className="form-home__color form-home__color--red">

                        </div>
                        <span className="form-home__legend-info">Dzisiejsza Data</span>
                    </div>
                    <div className="form-home__legend">
                        <div className="form-home__color form-home__color--orange">

                        </div>
                        <span className="form-home__legend-info">Data Obserwowanej Imprezy</span>
                    </div>
                    <div className="form-home__legend">
                        <div className="form-home__color form-home__color--green">

                        </div>
                        <span className="form-home__legend-info">Święto Narodowe lub Kościelne</span>
                    </div>
                </div>


                <p className="form-home__description">Parametry Wyszukiwania</p>
                <div className="form-home__searchbox">
                    <input type="text" className="form-home__searchinput" id="search-input" name="searchParameters"
                           placeholder="Szukaj imprezy"/>
                    <FaSearch/>
                </div>

                <p className="form-home__description">Kategorie Wiek:</p>


                <div className="form-home__checboxcontainer">

                    <div className="form-home__checkbox-category">
                        <input type="checkbox" className="form-home__checkbox" id="checkbox-{{this}}" name="{{this}}"/>
                        <label className="form-home__label" htmlFor="checkbox-{{this}}">asdasds</label>
                    </div>

                </div>


                <p class="form-home__description">Kategorie Typ:</p>
                <div class="form-home__checboxcontainer">

                    <div class="form-home__checkbox-category">
                        <input type="checkbox" class="form-home__checkbox" id="checkbox-{{this}}" name="{{this}}"/>
                        <label class="form-home__label" for="checkbox-{{this}}">asdasd</label>
                    </div>

                </div>


                <button class="form-home__submit" type="submit">Wyślij</button>
            </form>
        </aside>
        </main>
    );
};

export default LeftForm;