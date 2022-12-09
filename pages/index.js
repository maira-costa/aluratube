import React, { useState } from "react"
import config from "../config.json"
import styled from "styled-components"
import Menu from "../src/components/Menu/Menu"
import { StyledTimeline } from "../src/components/Timeline"
import { StyledFavoritos } from "../src/components/Favoritos"

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = useState("");

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Header />
                <Timeline valorDoFiltro={valorDoFiltro} playlists={config.playlists} />
                <Favoritos favlist={config.favoritos}/>
            </div>
        </>
    );
}
  
export default HomePage

const StyledHeader = styled.div`
    background-color: ${({theme}) => theme.backgroundLevel1};
	.user-info img {
		width: 80px;
		height: 80px;
		border-radius: 50%
	}
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${({ bg }) => bg});
    /* background-image: url(${config.bg}); */
    height: 230px;
`;

function Header() {
    return (
        <StyledHeader>
            <StyledBanner bg={config.banner} />
            <section className="user-info">
                <img src={`http://www.github.com/${config.github}.png`}/>
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({valorDoFiltro, ...propriedades}) {
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                // console.log(playlistName);
                // console.log(videos);
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase()
                                const valorDoFiltroNormalized = valorDoFiltro.toLowerCase()
                                return titleNormalized.includes(valorDoFiltroNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url} target="_blank">
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

function Favoritos({favlist}) {
    return (
        <StyledFavoritos>
            <h2>Favoritos</h2>
            <section className="favlist">
                {favlist.map((favorito) => {
                    return (
                        <a key={favorito.arroba} href={`https://github.com/${favorito.github}`} target="_blank" className="favlist__item">
                            <img src={`https://github.com/${favorito.github}.png`}/>
                            <p>{favorito.arroba}</p>
                        </a>
                        
                    )
                })}
            </section>
        </StyledFavoritos>
    )
}