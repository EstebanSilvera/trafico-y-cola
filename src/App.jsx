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

    console.log("viva el vicio");
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
      <MmsCostos show={modalShow3} onHide={() => setModalShow3(false)} />
      <Mm1k show={modalShow4} onHide={() => setModalShow4(false)} />
    </div>
  );
}

function Mm1(props) {
  const datos = {
    parametro1: props.miu,
    parametro2: props.lamnda,
  };

  useEffect(() => {
    fetch("https://teoria-trafico-colas-2.onrender.com/mm1-analysis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:5173",
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
        console.log("Respuesta del servidor:", data);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  }, []);
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">MM1</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          {props.lamnda}
          <br />
          {props.miu}
        </p>
      </Modal.Body>
    </Modal>
  );
}

function Mms(props) {
  const datos = {
    parametro1: props.miu,
    parametro2: props.lamnda,
    parametro3: props.servidor,
  };

  console.log(datos);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Mms</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  );
}

function MmsCostos(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">MmsCostos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  );
}

function Mm1k(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Mm1k</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default App;
