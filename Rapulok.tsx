import React from 'react';
import '../styles/rapulok.css';
import rapeta from '../images/rapeta_album.png';
import album from '../images/rapulok_album.png';
import riszajkling from '../images/riszajkling_album.png';

interface AlbumCardProps {
    title: string;
    image: string;
    description: string;
    link: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ title, image, description, link }) => (
    <div className="card">
        <img src={image} alt={title} className="card-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="button" href={link} target="_blank" rel="noopener noreferrer">
            További információ
        </a>
    </div>
);

const RapulokPage = () => {
    return (
        <div className="container">
            <nav className="navbar">
                <a href="https://hu.wikipedia.org/wiki/Rap%C3%BCl%C5%91k">Wikipedia</a>
                <a href="https://www.youtube.com/channel/UCGzMEOG7O-JDlQT1yRQf-xw/videos">
                    Youtube
                </a>
                <a href="https://www.facebook.com/rapulokofficial/?locale=hu_HU">Facebook</a>
            </nav>

            <h1>Rapülők</h1>
            <p className="description">
                A Rapülők egy magyar – nevével ellentétben – hip-hop stílusokkal fűszerezett és
                általában jazz irányába vegyített akusztikus együttes, amelyet 1992-ben alapított
                Berkes Gábor (billentyűs hangszerek), Geszti Péter (ének, rap) és Szentmihályi Gábor
                (dobok). Az 1990-es évek elején két albumot készítettek, és az együttes 1994-ben, a
                csúcson feloszlott. Mindkét lemez átlépte a 200 000-es eladott példányszámot, így
                platinalemezek lettek. A két nagylemezből összesen több mint félmilliót adtak el.
                1994-ben, a búcsúkoncerteken négyszer töltötték meg a Budapest Sportcsarnokot. Az
                együttes neve egy szójáték, a rappelő és a repülő összevonása.
            </p>

            <div className="albums">
                <AlbumCard
                    title="Rapülők (album)"
                    image={album}
                    description="A Rapülők című album az azonos nevű Rapülők együttes 1992-ben megjelent első albuma, mely mindhárom hanghordozón megjelent."
                    link="https://hu.wikipedia.org/wiki/Rap%C3%BCl%C5%91k_(album)"
                />
                <AlbumCard
                    title="Rapeta"
                    image={rapeta}
                    description="A Rapeta című album a Rapülők együttes 1993-ban megjelent stúdióalbuma. Az album CD-n, és kazettán jelent meg."
                    link="https://hu.wikipedia.org/wiki/N%C3%B6v%C3%A9nyek#Rendszerez%C3%A9s"
                />
                <AlbumCard
                    title="Riszájkling"
                    image={riszajkling}
                    description="A Riszájkling a Rapülők együttes 3. és egyben utolsó 2006-ban kiadott stúdióalbuma, mely a korábban megjelent két nagylemez dalainak újrahangszerelése."
                    link="https://hu.wikipedia.org/wiki/Risz%C3%A1jkling"
                />
            </div>
        </div>
    );
};

export default RapulokPage;
