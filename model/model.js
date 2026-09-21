const homePage = `
    <section class="page">
        <img class="page__image" src="images/magic-home.jpg" alt="Magic the Gathering cards">

        <div class="page__content">
            <h1 class="page__title">Welcome to the Multiverse</h1>

            <p class="page__text">
                Magic: The Gathering is a trading card game where players
                use spells, creatures, and strategy to battle against one
                another.
            </p>

            <p class="page__text">
                Build your deck, discover powerful cards, and explore
                countless worlds across the Magic multiverse.
            </p>
        </div>
    </section>
`;

const formatsPage = `
    <section class="page">
        <img class="page__image" src="images/magic-formats.jpg" alt="Magic the Gathering cards arranged on a table">

        <div class="page__content">
            <h1 class="page__title">Magic Formats</h1>

            <p class="page__text">
                Magic has many different ways to play. Each format has
                its own rules, deck-building requirements, and strategies.
            </p>

            <ul class="page__list">
                <li>Commander</li>
                <li>Standard</li>
                <li>Modern</li>
                <li>Draft</li>
                <li>Sealed</li>
            </ul>

            <p class="page__text">
                Commander is a popular multiplayer format where players
                build a 100-card deck around a legendary creature.
            </p>
        </div>
    </section>
`;

const cardsPage = `
    <section class="page">
        <img class="page__image" src="images/magic-cards.jpg" alt="Magic the Gathering cards">

        <div class="page__content">
            <h1 class="page__title">Know Your Cards</h1>

            <p class="page__text">
                Magic cards come in many different types. Creatures can
                attack and defend, while instants and sorceries allow
                players to cast powerful effects.
            </p>

            <ul class="page__list">
                <li>Creatures</li>
                <li>Instants</li>
                <li>Sorceries</li>
                <li>Artifacts</li>
                <li>Enchantments</li>
                <li>Planeswalkers</li>
            </ul>

            <p class="page__text">
                Understanding how different card types work together is
                an important part of building a successful deck.
            </p>
        </div>
    </section>
`;

const aboutPage = `
    <section class="page">
        <img class="page__image" src="images/magic-about.jpg" alt="Magic the Gathering deck and accessories">

        <div class="page__content">
            <h1 class="page__title">About This Project</h1>

            <p class="page__text">
                This website was created for Homework 2 to demonstrate
                the Model-View-Controller concept.
            </p>

            <p class="page__text">
                The project uses HTML, JavaScript, SCSS, and npm. The
                page information is stored in the Model and displayed
                when a user selects a navigation option.
            </p>

            <p class="page__text">
                The theme is inspired by Magic: The Gathering and the
                experience of learning and playing the game.
            </p>
        </div>
    </section>
`;

const pages = {
    home: homePage,
    formats: formatsPage,
    cards: cardsPage,
    about: aboutPage,
};

export function changePage(pageName) {

    document.querySelector("#app").innerHTML = pages[pageName];

}