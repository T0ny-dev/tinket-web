import './Hero.css'

function Hero () {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__content__quote">
          <span>Web</span>
          <a href='#'>Cotizar Proyectos</a>
        </div>
          <h1>
            Creamos sitios web <br/>a la medida. 
          </h1>
          <p>
          Combinamos Tecnología y capacidades<br/> de diseño para brindar  soluciones para<br/> llevar a cabo tu idea.
          </p>
          <div className="hero__content__buttons">
            <button>Web development</button>
            <button>UX/UI</button>
            <button>Libreria</button>
          </div>
      </div>
      <div className="hero__window">
        <div className="hero__window__title">
          <h2>Creando proyectos <br/>para ti. </h2>
          <img src="/codeicon.png" alt="icono" />
        </div>
        <span>Web Development</span>
        <div className="hero__window__process">
          <img src="/ajustesicon.png" alt="ajustesicon" />
          <h3>Requerimientos</h3>
        </div>
      </div>
    </div>
  )
}

export default Hero;