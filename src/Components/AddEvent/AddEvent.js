import React from 'react';

import './AddEvent.scss'
import HeaderBar from "../HeaderBar/HeaderBar";

const AddEvent = () => {
    return (
        <>
            <HeaderBar title={"Dodaj Ogłoszenie"}/>
            <main className="main-section">
                <div className="add-party">
                    <form action="" method="post" className="add-party__form">
                        <label htmlFor="name" className="add-party__label">Nazwa imprezy</label>
                        <input type="text" name="name" id="name" className="add-party__title"/>
                        <label htmlFor="description" className="add-party__label">Opis Imprezy</label>
                        <textarea name="description" id="description" className="add-party__description" cols="30"
                                  rows="3">
                    </textarea>
                        <label htmlFor="date" className="add-party__label">Data</label>
                        <input type="date" className="add-party__date" name="date" id="date"/>

                        <label htmlFor="time" className="add-party__label">Start Imprezy</label>
                        <input type="time" className="add-party__time" name="time" id="time"/>

                        <label htmlFor="place" className="add-party__label">Miejsce</label>

                        <label htmlFor="organizer" className="add-party__label">Organizator</label>
                        <input type="text" className="add-party__organizer" name="organizer" id="organizer"/>

                        <p className="form-home__description">Kategorie Wiek:</p>
                        <div className="add-party__checboxcontainer">

                            <div className="add-party__checkbox-category">
                                <input type="checkbox" className="form-home__checkbox" id="checkbox-{{this}}"
                                       name="{{this}}"/>
                                <label className="form-home__label"
                                       htmlFor="checkbox-{{this}}">
                                </label>
                            </div>
                        </div>
                        <p className="form-home__description">Kategorie Typ:</p>
                        <div className="add-party__checboxcontainer">
                            <div className="add-party__checkbox-category">
                                <input type="checkbox" className="form-home__checkbox"/>
                                <label className="form-home__label"> asdasd</label>
                            </div>
                        </div>
                        <button className="form-home__submit" type="submit">Wyślij</button>
                    </form>
                </div>
            </main>
        </>
    );
};

export default AddEvent;