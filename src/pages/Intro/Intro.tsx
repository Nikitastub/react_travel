import React from 'react';


export const Intro = () => 
    <section className="intro">
        <div className="wrapper">
            <h1 className="intro__title">
                Discover Amazing places in Japan
            </h1>
            <p className="intro__subtitle">
                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, 
            </p>
            <form className="search-form">
                <fieldset className="search-form__wrap">
                    <p className="search-form__info">
                        <input type="text" name="likeToDo" className="search-form__field" placeholder="What would you like to do?" />
                        <input type="text" name="likeToGo" className="search-form__field" placeholder="Where would you like to go?" />
                        <button type="submit" className="search-form__submit">search</button>
                    </p>
                </fieldset>
            </form>
        </div>
    </section>
