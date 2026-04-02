import { StyledVideo } from "./styled";
import { ListaVideos } from "../../components/ListaVideos/ListaVideos";
import { useState } from "react";


export default function Video() {

    const [videoAtual, setVideoAtual] = useState(ListaVideos[0].video);

    return (
        <StyledVideo >

            <section id="cxvideos">

              
                    {ListaVideos.map((obj, id) => (
                        <div id="video" key={id} onClick={() => setVideoAtual(obj.video)}>
                           <h2>{obj.titulo}</h2> 
                        </div>
                    ))}
             

            </section>

            <section id="cxIframe">
                <iframe
                    width="80%"
                    height="80%"
                    src={videoAtual}
                    title="video"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </section>

        </StyledVideo>
    )
}

