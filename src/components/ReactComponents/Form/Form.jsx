import './Form.css'
import emailjs from '@emailjs/browser';

const Test = ['test1','test1' ]

function FormSection () {


  return (
    <div className="Form">
      <div className="Form__title">
        <h2>
          Empecemos a crear
        </h2>
      </div>
      <div className="Form__section">
        <form className="form__mail">
          <label>Proyecto/ idea</label>
          <input type="text-b" name ="name_project"/>
          {/* double inputs section */}
          <div className='form__double'>
            <div>
              <label>Nombre</label>
              <input type="text" name= "name" />
            </div>
            <div>
              <label>Apellido</label>
              <input type="text" name= "last_name" />
            </div>
          </div>
          {/* double inputs section */}
          <div className='form__double'>
            <div>
              <label>Correo-Electronico</label>
              <input type="email" name= "email" />
            </div>
            <div>
              <label>Compañia</label>
              <input type="text" name= "company" />
            </div>
          </div>
          {/* section select country */}
          <label>Pais</label>
            <select className='select'
              options = {Test.map(element =>({label:element, value:element}))}
            />
        </form>
        <button onClick={alert("Hello World!")}>
               Click Me
            </button>;
      </div>
    </div>
  )
}

export default FormSection;