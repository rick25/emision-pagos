import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import {
  cambiarTitulo,
  cambiarBreadcrumb,
} from "../../Store/Modules/Template/TemplateActions";
import { useFetchJSON } from "../../Hooks";
import {
  setLoading,
  setDatosPaso1,
  setCamposEpagos,
} from "../../Store/Modules/EmisionPagos/actions";
import PasosEmisionPagos from "./PasosEmision";
import Paso1 from "./Paso1";
import Paso2 from "./Paso2";
import Paso3 from "./Paso3";

import request from "../../utils/request";

const EmisionPagos = () => {
  const dispatch = useDispatch();

  const [paso, setPaso] = useState(0);
  const [organismo, setOrganismo] = useState(null);
  const [comprobante, setComprobante] = useState(null);
  const [importacion, setImportacion] = useState(null);
  const [datosEpagos, setDatosEpagos] = useState([]);

  const { loading, camposEpagos } = useSelector((state) => ({
    loading: state.datosPago.loading,
    camposEpagos: state.datosPago.camposEpagos,
  }));

  const [isLoadingDatosPaso1] = useFetchJSON(
    "http://localhost:3501/api/emision-pagos",
    setDatosPaso1
  );

  useEffect(() => {
    setLoading(isLoadingDatosPaso1);
  }, [isLoadingDatosPaso1]);

  useEffect(() => {
    dispatch(cambiarTitulo("Emitir Pagos"));
    dispatch(cambiarBreadcrumb([{ nombre: "Emisiones / Emitir Pagos" }]));
  }, [dispatch]);

  const cambiarPaso = (valor) => {
    const nuevoPaso = paso + valor;
    setPaso(nuevoPaso);
  };

  const cambiarDatosEpagos = (value, key) => {
    for (var i in datosEpagos) {
      if (datosEpagos[i].campo === key) {
        datosEpagos[i].value = value !== undefined ? value : "";
        break;
      }
    }
    setDatosEpagos([...datosEpagos]);
  };

  const quitarParametroEmision = (campo) => {
    setDatosEpagos(datosEpagos.filter((item) => item.campo !== campo));
  };

  return (
    <>
      <Helmet>
        <title>Emitir Pagos</title>
        <meta
          name="description"
          content="Ingreso y verficación de los campos de una emision de pago"
        />
      </Helmet>

      <>
        <PasosEmisionPagos paso={paso} />

        {paso === 0 && (
          <Paso1
            cambiarPaso={cambiarPaso}
            organismo={organismo}
            comprobante={comprobante}
            importacion={importacion}
            setOrganismo={setOrganismo}
            setComprobante={setComprobante}
            setImportacion={setImportacion}
          />
        )}
        {paso === 1 && (
          <Paso2
            cambiarPaso={cambiarPaso}
            importacion={importacion}
            cambiarDatosEpagos={cambiarDatosEpagos}
            quitarParametroEmision={quitarParametroEmision}
            datosEpagos={datosEpagos}
            camposEpagos={camposEpagos}
          />
        )}
        {paso === 2 && <Paso3 cambiarPaso={cambiarPaso} />}
      </>
    </>
  );
};

export default EmisionPagos;
