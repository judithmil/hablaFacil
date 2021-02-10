import './searchResult.css';
import { ToVotoPautas } from './toVotoPautas.js';
import { ToVotoSanciones } from './toVotoSanciones.js';
import { ToVotoSeguridad } from './toVotoSeguridad.js';

export function MasArticulos(props) {
  const allPostsSearch = props.posts.filter((post)=>post.tipo==='posts');
  const slideBtn = (order) => {
    if(order===2){
    return <ToVotoPautas/> 
    } else if(order===3){
      return(<ToVotoSeguridad/>)
    } else {
      return(<ToVotoSanciones/>)
    }
  }

    return (
      <main className="mainResults">
        <p className='subtituloMas'>Más artículos sobre este tema</p>
        <section>{
        // eslint-disable-next-line array-callback-return
        allPostsSearch.map((slide)=> 
        <div className="divCard" key={slide.id}>
            <img src={slide.img} className="cardImg" alt={slide.id}/>
            <div className="cardContent">
              <div className="cardTexto">
                <h4 className="cardTitulo">{slide.titulo}</h4>
                <p className="cardContenido">{slide.contenido}</p>
                <p className="cardFecha">{slide.fecha}</p>
                <div className="cardFooter">
                {slideBtn(slide.order)}
              </div>
              </div>
            </div>
        </div>
        )
        }</section>
      </main>
    );
  }