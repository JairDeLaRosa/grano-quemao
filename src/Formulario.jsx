import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const url = "https://ejemplo.com/api/endpoint";

  const onSubmit = (data) => {
    axios
      .post(url, data)
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
        // Realizar acciones adicionales con la respuesta si es necesario
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
        // Manejar errores si es necesario
      });
    console.log(data);
  };

  return (
    <div className="containerForm">
      <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
        <h1>Registro de usuario</h1>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            {...register("nombre", { required: true })}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Apellido
          </label>
          <input
            type="text"
            class="form-control"
            {...register("apellido", { required: true })}
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            {...register("email", { required: true })}
          />
        </div>
        <div class="col-md-6">
          <label class="form-label">Telefono</label>
          <input
            type="tel"
            class="form-control"
            {...register("telefono", { required: true })}
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Departamento
          </label>
          <select
            name="departamento"
            class="form-select"
            id="validationCustom04"
            {...register("departamento", { required: true })}
          >
            <option selected disabled value="">
              ...
            </option>
            <option value="amazonas">Amazonas</option>
            <option value="antioquia">Antioquia</option>
            <option value="arauca">Arauca</option>
            <option value="atlantico">Atlántico</option>
            <option value="bolivar">Bolívar</option>
            <option value="boyaca">Boyacá</option>
            <option value="caldas">Caldas</option>
            <option value="caqueta">Caquetá</option>
            <option value="casanare">Casanare</option>
            <option value="cauca">Cauca</option>
            <option value="cesar">Cesar</option>
            <option value="choco">Chocó</option>
            <option value="cordoba">Córdoba</option>
            <option value="cundinamarca">Cundinamarca</option>
            <option value="guainia">Guainía</option>
            <option value="guaviare">Guaviare</option>
            <option value="huila">Huila</option>
            <option value="la_guajira">La Guajira</option>
            <option value="magdalena">Magdalena</option>
            <option value="meta">Meta</option>
            <option value="narino">Nariño</option>
            <option value="norte_de_santander">Norte de Santander</option>
            <option value="putumayo">Putumayo</option>
            <option value="quindio">Quindio</option>
            <option value="risaralda">Risaralda</option>
            <option value="san_andres_y_providencia">
              San Andrés y Providencia
            </option>
            <option value="santander">Santander</option>
            <option value="sucre">Sucre</option>
            <option value="tolima">Tolima</option>
            <option value="valle_del_cauca">Valle del Cauca</option>
            <option value="vaupes">Vaupés</option>
            <option value="vichada">Vichada</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputPassword4" class="form-label">
            Ciudad
          </label>
          <input
            type="text"
            class="form-control"
            {...register("ciudad", { required: true })}
          />
        </div>

        <div class="col-2">
          <button type="submit" class="btn btn-secondary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
