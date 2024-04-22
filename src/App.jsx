import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";

function App() {
  const [teoriaColas, setTeoriaColas] = useState(false);
  const [teoriaColas2, setTeoriaColas2] = useState(false);
  const [teoriaColas3, setTeoriaColas3] = useState(false);
  const [teoriaColas4, setTeoriaColas4] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);

  const [lamb, setLamb] = useState(0);
  const [miu, setMiu] = useState(0);
  const [servidor, setServidor] = useState(0);
  const [costoEspera, setCostoEspera] = useState(0);
  const [costoServidor, setCostoServidor] = useState(0);
  const [colaTamano, setColaTamano] = useState(0);

  const prueba = (e) => {
    e.preventDefault();

    console.log(lamb, miu, servidor, costoEspera, costoServidor, colaTamano);
  };

  const verificar = () => {
    switch (true) {
      case teoriaColas && !teoriaColas2 && !teoriaColas3 && !teoriaColas4:
        return setModalShow(true);
      case teoriaColas && teoriaColas2 && !teoriaColas3 && !teoriaColas4:
        return setModalShow2(true);
      case teoriaColas && teoriaColas2 && teoriaColas3 && !teoriaColas4:
        return setModalShow3(true);
      case teoriaColas && !teoriaColas2 && !teoriaColas3 && teoriaColas4:
        return setModalShow4(true);
      default:
        console.log("error");
        break;
    }
  };

  return (
    <div className="container2">
      <div className="informacion text-center">
        <button
          onClick={() => {
            setTeoriaColas(true);
            setTeoriaColas2(false);
            setTeoriaColas3(false);
            setTeoriaColas4(false);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-[20vh] rounded m-2"
        >
          MM1
        </button>

        <button
          onClick={() => {
            setTeoriaColas(true);
            setTeoriaColas2(true);
            setTeoriaColas3(false);
            setTeoriaColas4(false);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-[20vh] rounded m-2"
        >
          MMS
        </button>

        <button
          onClick={() => {
            setTeoriaColas(true);
            setTeoriaColas2(true);
            setTeoriaColas3(true);
            setTeoriaColas4(false);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-[20vh] rounded m-2"
        >
          MMS costos
        </button>

        <button
          onClick={() => {
            setTeoriaColas(true);
            setTeoriaColas2(false);
            setTeoriaColas3(false);
            setTeoriaColas4(true);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-[20vh] rounded m-2"
        >
          MM1K
        </button>

        <form action="" className="transition duration-100" onSubmit={prueba}>
          {teoriaColas ? (
            <>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Lamnda
              </label>
              <input
                type="number"
                id="first_name"
                onChange={(e) => setLamb(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Lamnda"
                required
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Miu
              </label>
              <input
                type="number"
                id="first_name"
                onChange={(e) => setMiu(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Miu"
                required
              />
            </>
          ) : (
            <div></div>
          )}
          {teoriaColas2 ? (
            <>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Servidores
              </label>
              <input
                type="number"
                id="first_name"
                onChange={(e) => setServidor(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Servidores"
                required
              />
            </>
          ) : (
            <div></div>
          )}
          {teoriaColas3 ? (
            <>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Costos de espera
              </label>
              <input
                type="number"
                id="first_name"
                onChange={(e) => setCostoEspera(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Costos de espera"
                required
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Costos de servicios
              </label>
              <input
                type="number"
                id="first_name"
                onChange={(e) => setCostoServidor(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Costos de servicios"
                required
              />
            </>
          ) : (
            <div></div>
          )}
          {teoriaColas4 ? (
            <>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Tamaño de cola
              </label>
              <input
                type="number"
                id="first_name"
                onChange={(e) => setColaTamano(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tamaño de cola"
                required
              />
            </>
          ) : (
            <div></div>
          )}
          <button
            className="my-10 bg-blue-500 w-[40vh] h-10 rounded-full text-white font-bold"
            type="submit"
            onClick={() => verificar()}
          >
            Calcular
          </button>
        </form>
      </div>
      <Mm1
        show={modalShow}
        onHide={() => setModalShow(false)}
        lamnda={lamb}
        miu={miu}
      />
      <Mms
        show={modalShow2}
        onHide={() => setModalShow2(false)}
        lamnda={lamb}
        miu={miu}
        servidor={servidor}
      />
      <MmsCostos
        show={modalShow3}
        onHide={() => setModalShow3(false)}
        lamnda={lamb}
        miu={miu}
        servidor={servidor}
        costoEspera={costoEspera}
        costoServidor={costoServidor}
      />

      <Mm1k
        show={modalShow4}
        onHide={() => setModalShow4(false)}
        lamnda={lamb}
        miu={miu}
        colaTamano={colaTamano}
      />
    </div>
  );
}

function Mm1(props) {
  const datos = {
    miu: props.miu,
    lamb: props.lamnda,
  };

  const [respuesta, setRespuesta] = useState();

  const calcula = () => {
    fetch("https://teoria-trafico-colas-2.onrender.com/mm1-analysis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        setRespuesta(data.data[0]);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <button onClick={() => calcula()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 w-[30vh] rounded m-2">
            Mostrar calculos
          </button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Información:</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio de la cola:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.lq}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio del sistema:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.ls}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.p}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.p0}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.wq}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.ws}</p>
            </div>
          </div>
        </div>

      </Modal.Body>
    </Modal>
  );
}

function Mms(props) {

  const datos = {
    miu: props.miu,
    lamb: props.lamnda,
    number_servers: props.servidor,
  };

  const [respuesta, setRespuesta] = useState();

  const calcula = () => {
    fetch("https://teoria-trafico-colas-2.onrender.com/mms-analysis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        setRespuesta(data.data[0]);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <button onClick={() => calcula()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 w-[30vh] rounded m-2">
            Mostrar calculos
          </button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Información:</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio de la cola:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.lq}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio del sistema:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.ls}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.p}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.p0}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.wq}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.ws}</p>
            </div>
          </div>
        </div>

      </Modal.Body>
    </Modal>
  );
}

function MmsCostos(props) {

  const datos = {
    miu: props.miu,
    lamb: props.lamnda,
    number_servers: props.servidor,
    wait_cost: props.costoEspera,
    service_cost: props.costoServidor,
  };

  const [respuesta, setRespuesta] = useState([]);

  const calcula = () => {
    fetch("https://teoria-trafico-colas-2.onrender.com/mms-costos-analysis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        setRespuesta(data.data[0]);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  };

  const getColorClass = (index) => {
    if (index < 2) {
      return 'bg-green-300'; // Verde para las dos primeras filas
    } else if (index < 3) {
      return 'bg-red-300'; // Rojo para las dos siguientes filas
    } else if (index < 4) {
      return 'bg-blue-300'; // Azul para las dos siguientes filas
    } else if (index < 5) {
      return 'bg-yellow-300'; // Amarillo para las filas restantes
    } else {
      return 'bg-purple-300';
    }
  };

  console.log(respuesta);

  return (
    <Modal
      {...props}
      fullscreen={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <button onClick={() => calcula()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 w-[30vh] rounded m-2">
            Mostrar calculos
          </button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <h1 className="text-2xl font-bold mb-4">Información:</h1>

        <div className="container mx-auto mb-3 ">
          <h1 className="text-2xl font-bold mb-4">Tabla de Datos:</h1>
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Pn</th>
                  <th className="px-4 py-2">Valor P</th>
                  <th className="px-4 py-2">lq</th>
                  <th className="px-4 py-2">ls</th>
                  <th className="px-4 py-2">wq</th>
                  <th className="px-4 py-2">ws</th>
                  <th className="px-4 py-2">e_cs</th>
                  <th className="px-4 py-2">e_ct</th>
                  <th className="px-4 py-2">e_cw</th>
                </tr>
              </thead>
              <tbody>
                {respuesta.map((item, index) => (
                  <tr key={index} className={getColorClass(index)}>
                    <td className="border px-4 py-2">{index}</td>
                    <td className="border px-4 py-2">{item.p}</td>
                    <td className="border px-4 py-2">{item.lq}</td>
                    <td className="border px-4 py-2">{item.ls}</td>
                    <td className="border px-4 py-2">{item.wq}</td>
                    <td className="border px-4 py-2">{item.ws}</td>
                    <td className="border px-4 py-2">{item.e_cs}</td>
                    <td className="border px-4 py-2">{item.e_ct}</td>
                    <td className="border px-4 py-2">{item.e_cw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <hr /><hr /><hr />

        <div className="container mx-auto my-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio de la cola:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta[1]?.lq}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio del sistema:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta[1]?.ls}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta[1]?.p}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta[1]?.p0}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta[1]?.wq}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta[1]?.ws}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Espera por Cliente:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta[1]?.e_cs}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Tiempo de Servicio por Cliente:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta[1]?.e_ct}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Espera del Sistema:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta[1]?.e_cw}</p>
            </div>
          </div>
        </div>
        <hr /><hr /><hr />

        <div className="container mx-auto my-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio de la cola:</h4>
              <p className="text-lg text-center font-semibold bg-red-300 rounded-full">{respuesta[2]?.lq}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio del sistema:</h4>
              <p className="text-lg text-center font-semibold bg-red-300 rounded-full">{respuesta[2]?.ls}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-red-300 rounded-full">{respuesta[2]?.p}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-red-300 rounded-full">{respuesta[2]?.p0}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-red-300 rounded-full">{respuesta[2]?.wq}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-red-300 rounded-full">{respuesta[2]?.ws}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Espera por Cliente:</h4>
              <p className="text-lg text-center font-semibold bg-red-300 rounded-full">{respuesta[2]?.e_cs}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Tiempo de Servicio por Cliente:</h4>
              <p className="text-lg text-center font-semibold bg-red-300 rounded-full">{respuesta[2]?.e_ct}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Espera del Sistema:</h4>
              <p className="text-lg text-center font-semibold bg-red-300 rounded-full">{respuesta[2]?.e_cw}</p>
            </div>
          </div>
        </div>
        <hr /><hr /><hr />

        <div className="container mx-auto my-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio de la cola:</h4>
              <p className="text-lg text-center font-semibold bg-blue-300 rounded-full">{respuesta[3]?.lq}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio del sistema:</h4>
              <p className="text-lg text-center font-semibold bg-blue-300 rounded-full">{respuesta[3]?.ls}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-blue-300 rounded-full">{respuesta[3]?.p}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-blue-300 rounded-full">{respuesta[3]?.p0}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-blue-300 rounded-full">{respuesta[3]?.wq}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-blue-300 rounded-full">{respuesta[3]?.ws}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Espera por Cliente:</h4>
              <p className="text-lg text-center font-semibold bg-blue-300 rounded-full">{respuesta[3]?.e_cs}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Tiempo de Servicio por Cliente:</h4>
              <p className="text-lg text-center font-semibold bg-blue-300 rounded-full">{respuesta[3]?.e_ct}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Espera del Sistema:</h4>
              <p className="text-lg text-center font-semibold bg-blue-300 rounded-full">{respuesta[3]?.e_cw}</p>
            </div>
          </div>
        </div>
        <hr /><hr /><hr />


        <div className="container mx-auto my-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio de la cola:</h4>
              <p className="text-lg text-center font-semibold bg-yellow-300 rounded-full">{respuesta[4]?.lq}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio del sistema:</h4>
              <p className="text-lg text-center font-semibold bg-yellow-300 rounded-full">{respuesta[4]?.ls}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-yellow-300 rounded-full">{respuesta[4]?.p}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-yellow-300 rounded-full">{respuesta[4]?.p0}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-yellow-300 rounded-full">{respuesta[4]?.wq}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-yellow-300 rounded-full">{respuesta[4]?.ws}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Espera por Cliente:</h4>
              <p className="text-lg text-center font-semibold bg-yellow-300 rounded-full">{respuesta[4]?.e_cs}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Tiempo de Servicio por Cliente:</h4>
              <p className="text-lg text-center font-semibold bg-yellow-300 rounded-full">{respuesta[4]?.e_ct}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Espera del Sistema:</h4>
              <p className="text-lg text-center font-semibold bg-yellow-300 rounded-full">{respuesta[4]?.e_cw}</p>
            </div>
          </div>
        </div>

        <hr /><hr /><hr />


        <div className="container mx-auto my-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio de la cola:</h4>
              <p className="text-lg text-center font-semibold bg-purple-300 rounded-full">{respuesta[5]?.lq}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio del sistema:</h4>
              <p className="text-lg text-center font-semibold bg-purple-300 rounded-full">{respuesta[5]?.ls}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-purple-300 rounded-full">{respuesta[5]?.p}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-purple-300 rounded-full">{respuesta[5]?.p0}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-purple-300 rounded-full">{respuesta[5]?.wq}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-purple-300 rounded-full">{respuesta[5]?.ws}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Espera por Cliente:</h4>
              <p className="text-lg text-center font-semibold bg-purple-300 rounded-full">{respuesta[5]?.e_cs}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Tiempo de Servicio por Cliente:</h4>
              <p className="text-lg text-center font-semibold bg-purple-300 rounded-full">{respuesta[5]?.e_ct}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Costo de Espera del Sistema:</h4>
              <p className="text-lg text-center font-semibold bg-purple-300 rounded-full">{respuesta[5]?.e_cw}</p>
            </div>
          </div>
        </div>

      </Modal.Body>
    </Modal>
  );
}

function Mm1k(props) {
  const datos = {
    miu: props.miu,
    lamb: props.lamnda,
    k: props.colaTamano
  };

  const [respuesta, setRespuesta] = useState();

  const calcula = () => {
    fetch("https://teoria-trafico-colas-2.onrender.com/mm1k-analysis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        setRespuesta(data.data[0]);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  };
  console.log(respuesta)

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <button onClick={() => calcula()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 w-[30vh] rounded m-2">
            Mostrar calculos
          </button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1 className="text-2xl font-bold mb-4">Información:</h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio de la cola:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.l}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Longitud promedio exclusiva de la cola de espera:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.lq}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en el sistema:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.p}</p>
            </div>
            <div className="border p-3 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Probabilidad de que no haya clientes en la cola:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.p0}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio la cola:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.wq}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Tiempo de espera promedio:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.w}</p>
            </div>
            <div className="border p-4 rounded-lg shadow-xl">
              <h4 className="text-lg text-center font-semibold">Lamnda prima:</h4>
              <p className="text-lg text-center font-semibold bg-green-300 rounded-full">{respuesta?.lambda_prima}</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default App;
