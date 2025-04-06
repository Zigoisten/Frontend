import React from 'react';
import '../styles/cats.css';
import macskak from '../images/Macskak.jpg';
import cats from '../images/CatsMusicalLogo.jpg';

const cardData = [
    {
        title: 'Cats',
        description:
            "Cats is based on T. S. Eliot's 1939 poetry book Old Possum's Book of Practical Cats, and the songs in the musical consist of Eliot's verse set to music by Andrew Lloyd Webber.",
        image: cats,
        link: 'https://www.catsthemusical.com/',
    },
    {
        title: 'Macskák',
        description:
            'A Macskák (eredeti cím: Cats) kétfelvonásos musical T. S. Eliot angol költő Macskák könyve című versciklusából született Andrew Lloyd Webber zeneszerzőnek köszönhetően.',
        image: macskak,
        link: 'https://madachszinhaz.hu/en/play/cats-1',
    },
];

const CatsPage: React.FC = () => {
    return (
        <div className="cats-container">
            <nav className="navbar">
                <a href="https://en.wikipedia.org/wiki/Cats_(musical)">Cats</a>
                <a href="https://hu.wikipedia.org/wiki/Macsk%C3%A1k_(musical)">Macskák</a>
                <a href="https://catsmusical.fandom.com/wiki/Broadway_Production">
                    Broadway Production
                </a>
                <a href="https://en.wikiquote.org/wiki/Cats_(musical)">Quotes</a>
            </nav>
            <h1 className="title">Cat</h1>
            <p className="description">
                Cats is a sung-through musical with music by Andrew Lloyd Webber. It is based on the
                1939 poetry collection Old Possum's Book of Practical Cats by T. S. Eliot. The
                musical tells the story of a tribe of cats called the Jellicles and the night they
                make the "Jellicle choice" by deciding which cat will ascend to the Heaviside Layer
                and come back to a new life. As of 2024, Cats remains the fifth-longest-running
                Broadway show and the eighth-longest-running West End show.
            </p>
            <p className="description">
                Lloyd Webber began setting Eliot's poems to music in 1977, and the compositions were
                first presented as a song cycle in 1980. Producer Cameron Mackintosh then recruited
                director Trevor Nunn and choreographer Gillian Lynne to turn the songs into a
                complete musical. Cats opened to positive reviews at the New London Theatre in the
                West End in 1981 and then to mixed reviews at the Winter Garden Theatre on Broadway
                in 1982. It won numerous awards including Best Musical at both the Laurence Olivier
                and Tony Awards. Despite its unusual premise that deterred investors initially, the
                musical turned out to be an unprecedented commercial success, with a worldwide gross
                of US$3.5 billion by 2012.
            </p>
            <div className="cards">
                {Array.from({ length: 4 }).map((_, i) =>
                    cardData.map((card, idx) => (
                        <div className="card" key={`${i}-${idx}`}>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <img src={card.image} alt={card.title} />
                            <a href={card.link} className="button">
                                More...
                            </a>
                        </div>
                    )),
                )}
            </div>
        </div>
    );
};

export default CatsPage;
