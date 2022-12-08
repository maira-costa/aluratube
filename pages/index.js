import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"
import { StyledFavoritos } from "../src/components/Favoritos"

function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
                <Favoritos favlist={config.favoritos}/>
            </div>
        </>
    );
}
  
export default HomePage

const StyledHeader = styled.div`
    .banner img {
        width: 100%;
        height: 230px;
        object-fit: cover;
    }
	.user-info img {
		width: 80px;
		height: 80px;
		border-radius: 50%
	}
    .user-info {
        margin-top: 16px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            {/* <img src="bannner"/> */}
            <section className="banner">
                <img src={config.banner}/>
            </section>
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

function Timeline(propriedades) {
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
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url} target="_blank">
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
                        <a href={`https://github.com/${favorito.github}`} target="_blank" className="favlist__item">
                            <img src={`https://github.com/${favorito.github}.png`}/>
                            <p>{favorito.arroba}</p>
                        </a>
                        
                    )
                })}
            </section>
        </StyledFavoritos>
    )
}