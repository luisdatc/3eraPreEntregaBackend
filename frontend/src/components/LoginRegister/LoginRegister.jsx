import React, { useState } from "react";
import "./LoginRegister.scss";

const LoginRegister = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  // Función para alternar entre el formulario de inicio de sesión y registro
  const toggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <section className="user">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className={`user_options-unregistered ${isLoginFormVisible ? "bounceLeft" : ""}`}>
            <h2 className="user_unregistered-title">No tienes una cuenta? Registrate!</h2>
            <p className="user_unregistered-text">
              Registrate para tener novedades de nuestro catalogo y poder realizar compras.
            </p>
            <button className="user_unregistered-signup" id="signup-button" onClick={toggleForm}>
              Registrate
            </button>
          </div>

          <div className={`user_options-registered ${isLoginFormVisible ? "" : "bounceRight"}`}>
            <h2 className="user_registered-title">Ya tienes una cuenta?</h2>
            <p className="user_registered-text">
              Inicia sesion y date una vuelta por nuestro catalogo de comics. 
            </p>
            <button className="user_registered-login" id="login-button" onClick={toggleForm}>
              Inicia Sesion
            </button>
          </div>
        </div>

        <div className={`user_options-forms ${isLoginFormVisible ? "bounceRight" : "bounceLeft" }`} id="user_options-forms">
          <div className="user_forms-login">
            <h2 className="forms_title">Inicia Sesion</h2>
            <form className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input type="email" placeholder="Email" className="forms_field-input" required autoFocus />
                </div>
                <div className="forms_field">
                  <input type="password" placeholder="Password" className="forms_field-input" required/>
                </div>
              </fieldset>
              <div className="forms_buttons">
{/*                 <button type="button" className="forms_buttons-forgot">
                  Forgot password?
                </button> */}
                <input type="submit" value="Log In" className="forms_buttons-action"/>
              </div>
            </form>
          </div>
          <div className="user_forms-signup">
            <h2 className="forms_title">Registro</h2>
            <form className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input type="text" placeholder="Nombre" className="forms_field-input" required name="first_name"/>
                </div>
                <div className="forms_field">
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="forms_field-input"
                    required
                    name="last_name"
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="email"
                    placeholder="Email"
                    className="forms_field-input"
                    required
                    name="email"
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="number"
                    placeholder="Edad"
                    className="forms_field-input"
                    required
                    name="edad"
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="password"
                    placeholder="Password"
                    className="forms_field-input"
                    required
                    name="password"
                  />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <input
                  type="submit"
                  value="Sign up"
                  className="forms_buttons-action"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginRegister;
