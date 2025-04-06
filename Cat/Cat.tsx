import React from 'react';
import '../styles/cat.css';
import anatomy from '../images/catanatomy.gif';
import catseye from '../images/catseye.jpg';
import domestication from '../images/domestication.jpg';
import intelligence from '../images/intelligence.png';
import logo from '../images/logo.png';

const navLinks = [
    { name: 'Wikipedia', href: 'https://en.wikipedia.org/wiki/Cat' },
    { name: 'Pictures', href: 'https://www.google.com/search?q=cat+pictures&udm=2' },
    { name: 'Videos', href: 'https://www.google.com/search?q=cat+pictures&udm=7' },
];

const catCards = [
    {
        title: 'Domestication',
        text: `The domestic cat originated from Near-Eastern and Egyptian populations of the African wildcat, Felis silvestris lybica. 
The family Felidae, to which all living feline species belong, is theorized to have arisen about 12 to 13 million years ago 
and is divided into eight major phylogenetic lineages. The Felis lineage in particular is the lineage to which the domestic cat belongs. 
Several investigations have shown that all domestic varieties of cats come from a single species.`,
        image: domestication,
        link: 'https://en.wikipedia.org/wiki/Domestication_of_the_cat',
    },
    {
        title: 'Cat anatomy',
        text: `Cats are carnivores that have highly specialized teeth. There are four types of permanent teeth that structure the mouth: 
twelve incisors, four canines, ten premolars and four molars. The premolar and first molar are located on each side of the mouth 
that together are called the carnassial pair. The carnassial pair specialize in cutting food and are parallel to the jaw. 
The incisors located in the front section of the lower and upper mouth are small, narrow, and have a single root.`,
        image: anatomy ,
        link: 'https://en.wikipedia.org/wiki/Cat_anatomy',
    },
    {
        title: 'Cat senses',
        text: `Cat senses are adaptations that allow cats to be highly efficient predators. Cats are good at detecting movement in low light, 
have an acute sense of hearing and smell, and their sense of touch is enhanced by long whiskers that protrude from their heads and bodies. 
These senses evolved to allow cats to hunt effectively at dawn and dusk. Cats have a tapetum lucidum, which is a reflective layer behind 
the retina that sends light that passes through the retina back into the eye.`,
        image: catseye,
        link: 'https://en.wikipedia.org/wiki/Cat_senses',
    },
    {
        title: 'Cat intelligence',
        text: `Cat intelligence refers to a cat’s ability to solve problems, adapt to its environment, learn new behaviors, and communicate 
its needs. Structurally, a cat’s brain shares similarities with the human brain, containing around 250 million neurons in the cerebral cortex, 
which is responsible for complex processing. Cats display neuroplasticity, allowing their brains to reorganize based on experiences. 
They have well-developed memory retaining information for a decade or longer.`,
        image: intelligence,
        link: 'https://en.wikipedia.org/wiki/Cat_intelligence',
    },
];

const CatPage: React.FC = () => {
    return (
        <div className="cat-container">
            <header className="cat-header">
                <div className="logo">
                    <img src={logo} alt="cat logo" />
                </div>
                <nav className="nav-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </header>

            <main className="cat-main">
                <h1>Cat</h1>
                <p className="cat-intro">
                    The cat (Felis catus), also referred to as the domestic cat or house cat, is a
                    small domesticated carnivorous mammal. It is the only domesticated species of
                    the family Felidae. Advances in archaeology and genetics have shown that the
                    domestication of the cat occurred in the Near East around 7500 BC. It is
                    commonly kept as a pet and farm cat, but also ranges freely as a feral cat
                    avoiding human contact. It is valued by humans for companionship and its ability
                    to kill vermin...
                </p>

                <div className="cat-cards">
                    {catCards.map((card) => (
                        <div className="cat-card" key={card.title}>
                            <img src={card.image} alt={card.title} />
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                            <a
                                className="button"
                                href={card.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                More Information
                            </a>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default CatPage;
