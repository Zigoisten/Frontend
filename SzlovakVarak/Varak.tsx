import React from 'react';
import '../styles/varak.css';
import bojnice from '../images/Bojnice_Castle.png';
import bratislava from '../images/Bratislava_Burg.png';
import budatin from '../images/Budatín.png';
import krasna from '../images/Krasznahorka.png';

const SlovakiaCastles = () => {
    return (
        <div className="page-container">
            <nav className="navbar">
                <a href="https://www.bestslovakiatours.com/">Slovakia Tours</a>
                <a href="https://www.bestslovakiatours.com/how-to-get-to-slovakia">Information</a>
                <a href="https://www.bestslovakiatours.com/about-company">About Us</a>
            </nav>

            <div className="content">
                <h1>List of castles in Slovakia</h1>
                <p>
                    This is a list of castles in Slovakia. This list includes palaces, citadels and
                    manor houses.
                </p>
                <p>These Slovak words translate as follows:</p>
                <ol>
                    <li>hrad, hrádok - castle</li>
                    <li>zámok - correctly: château, commonly translated as castle</li>
                    <li>pevnosť - fortress, citadel</li>
                    <li>kaštieľ - mansion or manor house</li>
                </ol>

                <div className="cards">
                    <div className="card">
                        <img src={bojnice} alt="Bojnice Castle" />
                        <h2>Bojnice Castle</h2>
                        <p>
                            Bojnice Castle (Slovak: Bojnický zámok, Hungarian: Bajmóci vár) is a
                            medieval castle in Bojnice, Slovakia. It is a Romanesque castle with
                            some original Gothic and Renaissance elements built in the 12th century.
                            Bojnice Castle is one of the most visited castles in Slovakia, receiving
                            hundreds of thousands of visitors every year and also being a popular
                            filming stage for fantasy and fairy-tale movies. It was owned by
                            Hungarian kings and nobleman from the 12th century until the territory
                            became part of Czechoslovakia after the Treaty of Trianon in 1920.
                        </p>
                        <a href="https://en.wikipedia.org/wiki/Bojnice_Castle" target="_blank">
                            See Wikipedia
                        </a>
                    </div>

                    <div className="card">
                        <img src={bratislava} alt="Bratislava Castle" />
                        <h2>Bratislava Castle</h2>
                        <p>
                            Bratislava Castle (Slovak: Bratislavský hrad) is the main castle of
                            Bratislava, the capital of Slovakia. The massive rectangular building
                            with four corner towers stands on an isolated rocky hill of the Little
                            Carpathians, directly above the Danube river, in the middle of
                            Bratislava. Because of its size and location, it has been a dominant
                            feature of the city for centuries. The location provides excellent views
                            of Bratislava, Austria and, in clear weather, parts of Hungary.
                        </p>
                        <a href="https://en.wikipedia.org/wiki/Bratislava_Castle" target="_blank">
                            See Wikipedia
                        </a>
                    </div>

                    <div className="card">
                        <img src={budatin} alt="Budatín Castle" />
                        <h2>Budatín Castle</h2>
                        <p>
                            The Budatín Castle (Slovak: Budatínsky zámok) is a castle in
                            north-western Slovakia, near the city of Žilina, where the Kysuca river
                            flows into the Váh river. It was built as a guarding castle in the
                            second half of the 13th century near the confluence of the Kysuca and
                            the Váh, where tolls were collected.
                        </p>
                        <a
                            href="https://en.wikipedia.org/wiki/Kr%C3%A1sna_H%C3%B4rka_Castle"
                            target="_blank"
                        >
                            See Wikipedia
                        </a>
                    </div>

                    <div className="card">
                        <img src={krasna} alt="Krásna Hôrka Castle" />
                        <h2>Krásna Hôrka Castle</h2>
                        <p>
                            The Krásna Hôrka Castle is a castle in Slovakia, built on a hilltop
                            overlooking the village of Krásnohorské Podhradie near Rožňava. The
                            first recorded mention of the castle was in 1333. In 1961 Krásna Hôrka
                            was designated a National Cultural Monument of the Slovak Republic.
                        </p>
                        <a
                            href="https://en.wikipedia.org/wiki/Kr%C3%A1sna_H%C3%B4rka_Castle"
                            target="_blank"
                        >
                            See Wikipedia
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlovakiaCastles;
