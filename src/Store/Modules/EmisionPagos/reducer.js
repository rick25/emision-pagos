import {
    SET_LOADING,
    SET_DATOS_PASO_1,
    SET_CAMPOS_EPAGOS,
    SET_OPCIONES_EPAGOS,
    TOOGLE_SELECTED_OPCION_EPAGOS,
    SET_ARRAY_CORRESPONDENCIA,
    SEARCH_IN_CORRESPONDENCIA,
} from './actions'

const organismos = [
    {
        "orgID": 1,
        "orgEstado": "A",
        "orgFecReg": "2020-10-23T16:31:20.000000Z",
        "orgFecMod": "2021-06-02T17:32:06.000000Z",
        "orgDescripcion": "Hurlingham",
        "orgSlug": "hurlingham",
        "orgCuit": "20567333446",
        "munID": null,
        "orgCalle": "",
        "orgCalleNumero": 0,
        "orgPiso": null,
        "orgTorre": null,
        "orgCodigoPostal": null,
        "orgSituacionIva": "Exento",
        "orgCodigoArea_1": null,
        "orgNumeroTelefono_1": null,
        "orgCodigoArea_2": null,
        "orgNumeroTelefono_2": null,
        "orgEmail": "hurligham@gmail.com",
        "orgCiudad": null,
        "zonID": null
    },
    {
        "orgID": 2,
        "orgEstado": "A",
        "orgFecReg": "2020-10-23T16:32:46.000000Z",
        "orgFecMod": "2021-06-14T16:04:24.000000Z",
        "orgDescripcion": "Lujan",
        "orgSlug": "lujan",
        "orgCuit": "20456342430",
        "munID": 1361,
        "orgCalle": "Dire de pruebas",
        "orgCalleNumero": 1425,
        "orgPiso": null,
        "orgTorre": null,
        "orgCodigoPostal": "5235",
        "orgSituacionIva": "Exento",
        "orgCodigoArea_1": 11,
        "orgNumeroTelefono_1": 44445555,
        "orgCodigoArea_2": null,
        "orgNumeroTelefono_2": null,
        "orgEmail": "lujan@gmail.com",
        "orgCiudad": "sdasf",
        "zonID": 2
    },
    {
        "orgID": 3,
        "orgEstado": "A",
        "orgFecReg": "2020-11-09T18:06:03.000000Z",
        "orgFecMod": "2020-12-03T14:04:32.000000Z",
        "orgDescripcion": "Berisso",
        "orgSlug": "berisso",
        "orgCuit": "2012345678423423",
        "munID": 984,
        "orgCalle": "Direccion de Pruebadsf",
        "orgCalleNumero": 1235,
        "orgPiso": 54,
        "orgTorre": 43,
        "orgCodigoPostal": "5364",
        "orgSituacionIva": "Exento",
        "orgCodigoArea_1": 12,
        "orgNumeroTelefono_1": 44581246,
        "orgCodigoArea_2": 12,
        "orgNumeroTelefono_2": 45852233,
        "orgEmail": "berisso@gmail.comf",
        "orgCiudad": "sdfdsfdsf",
        "zonID": 1
    }
]
const comprobantes = [
    {
        "comID": 137,
        "orgID": 1,
        "comDescripcion": "Tasa por Seguridad e Higiene",
        "comSiglas": "higiene",
        "comTipoFront": "I",
        "comSlug": null,
        "comEstado": "A",
        "header_logo": null,
        "main_titulo": null,
        "main_parrafo": null,
        "formulario_titulo": null,
        "footer": null,
        "resultados_email": 0,
        "resultados_pago": 0,
        "resultados_descarga": 0,
        "resultados_nueva_consulta": 0,
        "comFecReg": "2020-11-04T14:03:46.000000Z",
        "comFecMod": "2021-06-08T16:47:43.000000Z"
    },
    {
        "comID": 139,
        "orgID": 1,
        "comDescripcion": "Tasa por Servicios Generales",
        "comSiglas": "tsg",
        "comTipoFront": "I",
        "comSlug": null,
        "comEstado": "A",
        "header_logo": null,
        "main_titulo": null,
        "main_parrafo": null,
        "formulario_titulo": null,
        "footer": null,
        "resultados_email": 0,
        "resultados_pago": 0,
        "resultados_descarga": 0,
        "resultados_nueva_consulta": 0,
        "comFecReg": "2020-11-04T14:05:46.000000Z",
        "comFecMod": "2021-06-08T16:28:49.000000Z"
    },
    {
        "comID": 140,
        "orgID": 2,
        "comDescripcion": "Tasa Vial",
        "comSiglas": "vial",
        "comTipoFront": "I",
        "comSlug": null,
        "comEstado": "A",
        "header_logo": null,
        "main_titulo": null,
        "main_parrafo": null,
        "formulario_titulo": null,
        "footer": null,
        "resultados_email": 0,
        "resultados_pago": 0,
        "resultados_descarga": 0,
        "resultados_nueva_consulta": 0,
        "comFecReg": "2020-11-04T14:11:18.000000Z",
        "comFecMod": "2020-11-12T14:43:24.000000Z"
    },
    {
        "comID": 141,
        "orgID": 3,
        "comDescripcion": "Impuesto Automotor",
        "comSiglas": "automotor",
        "comTipoFront": "I",
        "comSlug": null,
        "comEstado": "A",
        "header_logo": null,
        "main_titulo": null,
        "main_parrafo": null,
        "formulario_titulo": null,
        "footer": null,
        "resultados_email": 0,
        "resultados_pago": 0,
        "resultados_descarga": 0,
        "resultados_nueva_consulta": 0,
        "comFecReg": "2020-11-04T14:13:18.000000Z",
        "comFecMod": "2020-11-06T20:52:49.000000Z"
    },
    {
        "comID": 142,
        "orgID": 3,
        "comDescripcion": "Tasa por Seguridad e Higiene",
        "comSiglas": "higiene",
        "comTipoFront": "I",
        "comSlug": null,
        "comEstado": "A",
        "header_logo": null,
        "main_titulo": null,
        "main_parrafo": null,
        "formulario_titulo": null,
        "footer": null,
        "resultados_email": 0,
        "resultados_pago": 0,
        "resultados_descarga": 0,
        "resultados_nueva_consulta": 0,
        "comFecReg": "2020-11-04T14:14:48.000000Z",
        "comFecMod": "2020-11-12T14:56:12.000000Z"
    }
]
const importaciones = [
    {
        "imiID": 1,
        "orgID": 1,
        "imiEstado": "TERMINADO",
        "plaID": 27,
        "usuID": 6,
        "imiFecReg": "2020-04-24 21:46:55",
        "imiDescripcion": "Importacion de Hurlingham 1",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 3,
        "orgID": 1,
        "imiEstado": "INICIAL",
        "plaID": 27,
        "usuID": 6,
        "imiFecReg": "2021-06-07 12:18:52",
        "imiDescripcion": "Importacion iniciada",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 5,
        "orgID": 1,
        "imiEstado": "TERMINADO",
        "plaID": 27,
        "usuID": 6,
        "imiFecReg": "2020-04-27 13:00:16",
        "imiDescripcion": "Importacion de Hurlingham 2",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 6,
        "orgID": 2,
        "imiEstado": "INICIAL",
        "plaID": 25,
        "usuID": 6,
        "imiFecReg": "2020-04-27 13:13:24",
        "imiDescripcion": "descripcionHurlingam",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 9,
        "imiEstado": "INICIAL",
        "plaID": 40,
        "usuID": 6,
        "imiFecReg": "2020-05-15 19:52:03",
        "imiDescripcion": null,
        "imiCuotasLinea": 1
    },
    {
        "imiID": 13,
        "imiEstado": "INICIAL",
        "plaID": 58,
        "usuID": 9,
        "imiFecReg": "2020-07-13 12:49:35",
        "imiDescripcion": "fooz",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 18,
        "imiEstado": "INICIAL",
        "plaID": 58,
        "usuID": 9,
        "imiFecReg": "2020-07-14 15:28:51",
        "imiDescripcion": "test2",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 31,
        "imiEstado": "INICIAL",
        "plaID": 58,
        "usuID": 9,
        "imiFecReg": "2020-08-03 12:27:07",
        "imiDescripcion": "asd",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 32,
        "imiEstado": "INICIAL",
        "plaID": 58,
        "usuID": 9,
        "imiFecReg": "2020-08-03 13:02:42",
        "imiDescripcion": "test2",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 33,
        "imiEstado": "INICIAL",
        "plaID": 58,
        "usuID": 9,
        "imiFecReg": "2020-08-03 16:44:18",
        "imiDescripcion": "test3",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 34,
        "imiEstado": "INICIAL",
        "plaID": 58,
        "usuID": 9,
        "imiFecReg": "2020-08-04 11:37:42",
        "imiDescripcion": "asd5",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 35,
        "imiEstado": "INICIAL",
        "plaID": 58,
        "usuID": 9,
        "imiFecReg": "2020-08-04 15:13:05",
        "imiDescripcion": "zxc",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 38,
        "imiEstado": "INICIAL",
        "plaID": 82,
        "usuID": 5,
        "imiFecReg": "2020-08-25 02:04:01",
        "imiDescripcion": "ahre",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 48,
        "imiEstado": "INICIAL",
        "plaID": 82,
        "usuID": 5,
        "imiFecReg": "2020-08-25 02:20:09",
        "imiDescripcion": "ahre",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 49,
        "imiEstado": "INICIAL",
        "plaID": 82,
        "usuID": 5,
        "imiFecReg": "2020-08-25 02:23:07",
        "imiDescripcion": "props.setError(true)",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 50,
        "imiEstado": "INICIAL",
        "plaID": 82,
        "usuID": 5,
        "imiFecReg": "2020-08-25 02:27:31",
        "imiDescripcion": "agenteLogeadoArchivos,",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 51,
        "imiEstado": "INICIAL",
        "plaID": 82,
        "usuID": 5,
        "imiFecReg": "2020-08-25 02:28:34",
        "imiDescripcion": "agenteLogeadoArchivos,",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 70,
        "imiEstado": "INICIAL",
        "plaID": 84,
        "usuID": 5,
        "imiFecReg": "2020-08-31 09:24:13",
        "imiDescripcion": "motazos",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 73,
        "imiEstado": "ERRONEO",
        "plaID": 84,
        "usuID": 5,
        "imiFecReg": "2020-09-08 12:01:37",
        "imiDescripcion": "<?php echo \"hola\";'>",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 74,
        "imiEstado": "TERMINADO",
        "plaID": 84,
        "usuID": 5,
        "imiFecReg": "2020-09-08 12:03:11",
        "imiDescripcion": "<?php echo \"hola\";'>",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 78,
        "imiEstado": "TERMINADO",
        "plaID": 84,
        "usuID": 5,
        "imiFecReg": "2020-09-08 12:08:39",
        "imiDescripcion": "<?php echo \"hola\";'>",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 81,
        "imiEstado": "TERMINADO",
        "plaID": 82,
        "usuID": 5,
        "imiFecReg": "2020-09-10 17:19:32",
        "imiDescripcion": "hola",
        "imiCuotasLinea": 1
    },
    {
        "imiID": 87,
        "imiEstado": "TERMINADO",
        "plaID": 82,
        "usuID": 5,
        "imiFecReg": "2020-09-11 14:40:52",
        "imiDescripcion": null,
        "imiCuotasLinea": 1
    },
    {
        "imiID": 89,
        "imiEstado": "TERMINADO",
        "plaID": 84,
        "usuID": 5,
        "imiFecReg": "2020-09-11 14:52:31",
        "imiDescripcion": null,
        "imiCuotasLinea": 1
    },
    {
        "imiID": 122,
        "imiEstado": "TERMINADO",
        "plaID": 84,
        "usuID": 5,
        "imiFecReg": "2021-02-09 15:49:46",
        "imiDescripcion": "Motorolas",
        "imiCuotasLinea": 1
    }
]
const bocetos = [
    {
    "bocetoID": 6,
    "bocetoNombre": "A ver con assets",
    "bocetoRegistro": "2020-04-28 18:27:40",
    "bocetoHTML": "<img id=\"imea\" src=\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"/><div id=\"icci8\">{{seccion}}</div><div id=\"iiq6\">{{circuito}}</div><div id=\"i9amz\">{{codigo}}</div>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}#iiq6{padding:10px;left:914px;top:538px;position:absolute;}#i9amz{padding:10px;left:1346px;top:538px;position:absolute;}#icci8{padding:10px;left:1092px;top:538px;position:absolute;}#imea{color:black;left:0px;top:-1px;position:absolute;}",
    "bocetoStyle": "[{\"selectors\":[{\"name\":\"iiq6\",\"label\":\"iiq6\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"914px\",\"top\":\"538px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i9amz\",\"label\":\"i9amz\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1346px\",\"top\":\"538px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"icci8\",\"label\":\"icci8\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1092px\",\"top\":\"538px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"wrapper\",\"label\":\"wrapper\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"wrapper\":1},{\"selectors\":[{\"name\":\"imea\",\"label\":\"imea\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"color\":\"black\",\"left\":\"0px\",\"top\":\"-1px\",\"position\":\"absolute\",\"en\":\"\"}}]",
    "bocetoComponents": "[{\"type\":\"image\",\"void\":true,\"status\":\"selected\",\"content\":\"\",\"attributes\":{\"id\":\"imea\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"},\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"activeOnRender\":0,\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"icci8\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{seccion}}\",\"_innertext\":false,\"view\":\"\",\"open\":false}],\"view\":\"\",\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iiq6\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{circuito}}\",\"_innertext\":false,\"open\":false}],\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i9amz\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{codigo}}\",\"_innertext\":false,\"open\":false}],\"view\":\"\",\"open\":false}]",
    "bocetoAssets": "[{\"type\":\"image\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"unitDim\":\"px\",\"height\":0,\"width\":0}]",
    "bocetoCreador": 3,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 7,
    "bocetoNombre": "Hurlingham 1",
    "bocetoRegistro": "2020-04-28 19:05:36",
    "bocetoHTML": "<img id=\"imea\" src=\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"/><div id=\"iyez3\">{{porcentaje_descuento}}</div><div id=\"i38ql\">{{tipo_comprobante}}</div><div id=\"ixgd3\">{{subparcela}}</div><div id=\"icci8\">{{seccion}}</div><div id=\"iiq6\">{{circuito}}</div><div id=\"i9amz\">{{codigo}}</div><div id=\"ie0j\">{{manzana}}</div><div id=\"ivlsu\">{{parcela}}</div><div id=\"ix2g8\">{{tipo_inmueble}}</div><div id=\"iw9nk\">{{cuota}}</div><div id=\"iskpy\">{{partida}}</div><div id=\"i0yii\">{{contribuyente}}</div><div id=\"i77e4\">{{cuadernillo}}</div><div id=\"ioqwk\">{{tasa_servicios_generales}}</div><div id=\"iqt1i\">{{proteccion_ciudadana}}</div><div id=\"ifzql\">{{servicio_asistencial}}</div><div id=\"imyn5\">{{contribucion_bomberos}}</div><div id=\"iwb5q\">{{descuento}}</div><div id=\"i5y4m\">{{total}}</div><div id=\"ixl3e\">{{n_comprobante}}</div><div id=\"izl7f\">{{primer_vencimiento}}</div><div id=\"ibdr3\">{{segundo_vencimiento}}</div><div id=\"il517\">{{partida}}</div><div id=\"iia8d\">{{cuota}}</div>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}#iiq6{padding:10px;left:914px;top:538px;position:absolute;}#i9amz{padding:10px;left:1346px;top:538px;position:absolute;}#icci8{padding:10px;left:1092px;top:538px;position:absolute;}#imea{color:black;left:0px;top:-1px;position:absolute;}#ie0j{padding:10px;left:1593px;top:538px;position:absolute;}#ivlsu{padding:10px;left:1843px;top:538px;position:absolute;}#ix2g8{padding:10px;left:2085px;top:440px;position:absolute;}#ixgd3{padding:10px;left:2085px;top:538px;position:absolute;}#iw9nk{padding:10px;left:1918px;top:440px;position:absolute;}#i77e4{padding:10px;left:1646.7890625px;top:440px;position:absolute;}#iskpy{padding:10px;left:1918px;top:338px;position:absolute;}#i0yii{padding:10px;left:2085px;top:338px;position:absolute;}#ioqwk{padding:10px;left:601.4296875px;top:2142px;position:absolute;}#ixl3e{padding:10px;left:1225.9921875px;top:1506px;position:absolute;}#il517{padding:10px;left:1679.9921875px;top:1432px;position:absolute;}#iia8d{padding:10px;left:1679.9921875px;top:1506px;position:absolute;}#izl7f{padding:10px;left:1225.9921875px;top:1590px;position:absolute;}#ibdr3{padding:10px;left:1225.9921875px;top:1656px;position:absolute;}#i38ql{padding:10px;left:901px;top:1506px;position:absolute;}#iqt1i{padding:10px;left:601.4296875px;top:2220px;position:absolute;}#ifzql{padding:10px;left:601.4296875px;top:2286px;position:absolute;}#imyn5{padding:10px;left:601.4296875px;top:2358px;position:absolute;}#iwb5q{padding:10px;left:601.4296875px;top:2500px;position:absolute;}#iyez3{padding:10px;left:601.4296875px;top:2432px;position:absolute;}#i5y4m{padding:10px;left:627.65625px;top:2583px;position:absolute;color:#ffffff;}",
    "bocetoStyle": "[{\"selectors\":[{\"name\":\"iiq6\",\"label\":\"iiq6\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"914px\",\"top\":\"538px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i9amz\",\"label\":\"i9amz\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1346px\",\"top\":\"538px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"icci8\",\"label\":\"icci8\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1092px\",\"top\":\"538px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"wrapper\",\"label\":\"wrapper\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"wrapper\":1},{\"selectors\":[{\"name\":\"imea\",\"label\":\"imea\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"color\":\"black\",\"left\":\"0px\",\"top\":\"-1px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ie0j\",\"label\":\"ie0j\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1593px\",\"top\":\"538px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ivlsu\",\"label\":\"ivlsu\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1843px\",\"top\":\"538px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ix2g8\",\"label\":\"ix2g8\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"2085px\",\"top\":\"440px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ixgd3\",\"label\":\"ixgd3\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"2085px\",\"top\":\"538px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iw9nk\",\"label\":\"iw9nk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1918px\",\"top\":\"440px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i77e4\",\"label\":\"i77e4\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1646.7890625px\",\"top\":\"440px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iskpy\",\"label\":\"iskpy\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1918px\",\"top\":\"338px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i0yii\",\"label\":\"i0yii\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"2085px\",\"top\":\"338px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ioqwk\",\"label\":\"ioqwk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"601.4296875px\",\"top\":\"2142px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ixl3e\",\"label\":\"ixl3e\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1225.9921875px\",\"top\":\"1506px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"il517\",\"label\":\"il517\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1679.9921875px\",\"top\":\"1432px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iia8d\",\"label\":\"iia8d\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1679.9921875px\",\"top\":\"1506px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"izl7f\",\"label\":\"izl7f\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1225.9921875px\",\"top\":\"1590px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ibdr3\",\"label\":\"ibdr3\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"1225.9921875px\",\"top\":\"1656px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i38ql\",\"label\":\"i38ql\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"901px\",\"top\":\"1506px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iqt1i\",\"label\":\"iqt1i\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"601.4296875px\",\"top\":\"2220px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ifzql\",\"label\":\"ifzql\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"601.4296875px\",\"top\":\"2286px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"imyn5\",\"label\":\"imyn5\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"601.4296875px\",\"top\":\"2358px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iwb5q\",\"label\":\"iwb5q\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"601.4296875px\",\"top\":\"2500px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iyez3\",\"label\":\"iyez3\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"601.4296875px\",\"top\":\"2432px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i5y4m\",\"label\":\"i5y4m\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"627.65625px\",\"top\":\"2583px\",\"position\":\"absolute\",\"en\":\"\",\"color\":\"#ffffff\"}}]",
    "bocetoComponents": "[{\"type\":\"image\",\"void\":true,\"status\":\"hovered\",\"content\":\"\",\"attributes\":{\"id\":\"imea\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"},\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"activeOnRender\":0,\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iyez3\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{porcentaje_descuento}}\",\"open\":false,\"_innertext\":false,\"view\":\"\"}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i38ql\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tipo_comprobante}}\",\"open\":false,\"_innertext\":false,\"view\":\"\"}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ixgd3\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{subparcela}}\",\"open\":false,\"_innertext\":false,\"view\":\"\"}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"icci8\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{seccion}}\",\"_innertext\":false,\"view\":\"\",\"open\":false}],\"view\":\"\",\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iiq6\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{circuito}}\",\"_innertext\":false,\"open\":false}],\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i9amz\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{codigo}}\",\"_innertext\":false,\"open\":false}],\"view\":\"\",\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ie0j\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{manzana}}\",\"open\":false,\"_innertext\":false}],\"open\":0},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ivlsu\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{parcela}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ix2g8\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tipo_inmueble}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iw9nk\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuota}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iskpy\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{partida}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i0yii\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{contribuyente}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i77e4\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuadernillo}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ioqwk\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tasa_servicios_generales}}\",\"open\":false,\"_innertext\":false}],\"open\":0},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iqt1i\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{proteccion_ciudadana}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ifzql\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{servicio_asistencial}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"imyn5\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{contribucion_bomberos}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iwb5q\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{descuento}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"status\":\"selected\",\"content\":\"\",\"attributes\":{\"id\":\"i5y4m\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{total}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ixl3e\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{n_comprobante}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"izl7f\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{primer_vencimiento}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ibdr3\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{segundo_vencimiento}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"il517\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{partida}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iia8d\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuota}}\",\"open\":false,\"_innertext\":false}],\"open\":0,\"view\":\"\"}]",
    "bocetoAssets": "[{\"type\":\"image\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"unitDim\":\"px\",\"height\":0,\"width\":0}]",
    "bocetoCreador": 3,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 8,
    "bocetoNombre": "Hurlingham formateado",
    "bocetoRegistro": "2020-04-30 17:52:13",
    "bocetoHTML": "<img id=\"imea\" src=\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"/><div id=\"iyez3\">{{porcentaje_descuento}}</div><div id=\"i38ql\">{{tipo_comprobante}}</div><div id=\"ixgd3\">{{subparcela}}</div><div id=\"icci8\">{{seccion}}</div><div id=\"iiq6\">{{circuito}}</div><div id=\"i9amz\">{{codigo}}</div><div id=\"ie0j\">{{manzana}}</div><div id=\"ivlsu\">{{parcela}}</div><div id=\"ix2g8\">{{tipo_inmueble}}</div><div id=\"iw9nk\">{{cuota}}</div><div id=\"i0yii\">{{contribuyente}}</div><div id=\"i77e4\">{{cuadernillo}}</div><div id=\"ioqwk\">{{tasa_servicios_generales}}</div><div id=\"iqt1i\">{{proteccion_ciudadana}}</div><div id=\"ifzql\">{{servicio_asistencial}}</div><div id=\"imyn5\">{{contribucion_bomberos}}</div><div id=\"iwb5q\">{{descuento}}</div><div id=\"i5y4m\">{{total}}</div><div id=\"ixl3e\">{{n_comprobante}}</div><div id=\"izl7f\">{{primer_vencimiento}}</div><div id=\"ibdr3\">{{segundo_vencimiento}}</div><div id=\"il517\">{{partida}}</div><div id=\"iia8d\">{{cuota}}</div><div id=\"i9l8u\">{{partida}}</div>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}#iiq6{padding:10px;left:297px;top:161px;position:absolute;}#i9amz{padding:10px;left:448.546875px;top:83.5px;position:absolute;}#icci8{padding:10px;left:366.75px;top:161px;position:absolute;}#imea{color:black;left:0px;top:-1px;position:absolute;}#ie0j{padding:10px;left:531.734375px;top:161px;position:absolute;}#ivlsu{padding:10px;left:611.125px;top:161px;position:absolute;}#ix2g8{padding:10px;left:684.640625px;top:130px;position:absolute;}#ixgd3{padding:10px;left:690px;top:161px;position:absolute;}#iw9nk{padding:10px;left:627.6640625px;top:130px;position:absolute;}#i77e4{padding:10px;left:543.4765625px;top:130px;position:absolute;}#i0yii{padding:10px;left:694.625px;top:99px;position:absolute;}#ioqwk{padding:10px;left:188.4296875px;top:678px;position:absolute;}#ixl3e{padding:10px;left:401.3515625px;top:472.5px;position:absolute;}#il517{padding:10px;left:550.2734375px;top:451px;position:absolute;}#iia8d{padding:10px;left:550.2734375px;top:472.5px;position:absolute;}#izl7f{padding:10px;left:394.6796875px;top:496px;position:absolute;}#ibdr3{padding:10px;left:394.6796875px;top:521px;position:absolute;}#i38ql{padding:10px;left:291.8125px;top:472.5px;position:absolute;}#iqt1i{padding:10px;left:188.4296875px;top:699px;position:absolute;}#ifzql{padding:10px;left:188.4296875px;top:724px;position:absolute;}#imyn5{padding:10px;left:188.4296875px;top:748px;position:absolute;}#iwb5q{padding:10px;left:188.4296875px;top:792px;position:absolute;}#iyez3{padding:10px;left:188.4296875px;top:769px;position:absolute;}#i5y4m{padding:10px;left:210.625px;top:823px;position:absolute;color:#ffffff;}*{font-size:10px;}img{width:823px !important;height:1344px !important;}body{width:823px !important;height:1344px !important;}#i9l8u{padding:10px;left:627.65625px;top:99px;position:absolute;font-size:10px;}",
    "bocetoStyle": "[{\"selectors\":[{\"name\":\"iiq6\",\"label\":\"iiq6\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"297px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i9amz\",\"label\":\"i9amz\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"448.546875px\",\"top\":\"83.5px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"icci8\",\"label\":\"icci8\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"366.75px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"wrapper\",\"label\":\"wrapper\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"wrapper\":1},{\"selectors\":[{\"name\":\"imea\",\"label\":\"imea\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"color\":\"black\",\"left\":\"0px\",\"top\":\"-1px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ie0j\",\"label\":\"ie0j\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"531.734375px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ivlsu\",\"label\":\"ivlsu\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"611.125px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ix2g8\",\"label\":\"ix2g8\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"684.640625px\",\"top\":\"130px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ixgd3\",\"label\":\"ixgd3\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"690px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iw9nk\",\"label\":\"iw9nk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"627.6640625px\",\"top\":\"130px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i77e4\",\"label\":\"i77e4\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"543.4765625px\",\"top\":\"130px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i0yii\",\"label\":\"i0yii\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"694.625px\",\"top\":\"99px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ioqwk\",\"label\":\"ioqwk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"678px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ixl3e\",\"label\":\"ixl3e\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"401.3515625px\",\"top\":\"472.5px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"il517\",\"label\":\"il517\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"550.2734375px\",\"top\":\"451px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iia8d\",\"label\":\"iia8d\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"550.2734375px\",\"top\":\"472.5px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"izl7f\",\"label\":\"izl7f\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"394.6796875px\",\"top\":\"496px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ibdr3\",\"label\":\"ibdr3\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"394.6796875px\",\"top\":\"521px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i38ql\",\"label\":\"i38ql\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"291.8125px\",\"top\":\"472.5px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iqt1i\",\"label\":\"iqt1i\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"699px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ifzql\",\"label\":\"ifzql\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"724px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"imyn5\",\"label\":\"imyn5\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"748px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iwb5q\",\"label\":\"iwb5q\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"792px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iyez3\",\"label\":\"iyez3\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"769px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i5y4m\",\"label\":\"i5y4m\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"210.625px\",\"top\":\"823px\",\"position\":\"absolute\",\"en\":\"\",\"color\":\"#ffffff\"}},{\"selectors\":[{\"name\":\"plantilla\",\"label\":\"plantilla\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"selectors\":[],\"selectorsAdd\":\"*\",\"style\":{\"font-size\":\"10px\"}},{\"selectors\":[],\"selectorsAdd\":\"img\",\"style\":{\"width\":\"823px !important\",\"height\":\"1344px !important\"}},{\"selectors\":[],\"selectorsAdd\":\"body\",\"style\":{\"width\":\"823px !important\",\"height\":\"1344px !important\"}},{\"selectors\":[{\"name\":\"i9l8u\",\"label\":\"i9l8u\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"627.65625px\",\"top\":\"99px\",\"position\":\"absolute\",\"en\":\"\",\"font-size\":\"10px\"}}]",
    "bocetoComponents": "[{\"type\":\"image\",\"void\":true,\"content\":\"\",\"attributes\":{\"id\":\"imea\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"},\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"activeOnRender\":0,\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iyez3\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{porcentaje_descuento}}\",\"open\":false,\"_innertext\":false,\"view\":\"\"}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i38ql\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tipo_comprobante}}\",\"open\":false,\"_innertext\":false,\"view\":\"\"}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ixgd3\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{subparcela}}\",\"open\":false,\"_innertext\":false,\"view\":\"\"}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"icci8\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{seccion}}\",\"_innertext\":false,\"view\":\"\",\"open\":false}],\"view\":\"\",\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iiq6\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{circuito}}\",\"_innertext\":false,\"open\":false}],\"open\":false},{\"type\":\"text\",\"status\":\"selected\",\"content\":\"\",\"attributes\":{\"id\":\"i9amz\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{codigo}}\",\"_innertext\":false,\"open\":false}],\"view\":\"\",\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ie0j\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{manzana}}\",\"open\":false,\"_innertext\":false}],\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ivlsu\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{parcela}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ix2g8\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tipo_inmueble}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iw9nk\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuota}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i0yii\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{contribuyente}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i77e4\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuadernillo}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ioqwk\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tasa_servicios_generales}}\",\"open\":false,\"_innertext\":false}],\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iqt1i\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{proteccion_ciudadana}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ifzql\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{servicio_asistencial}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"imyn5\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{contribucion_bomberos}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iwb5q\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{descuento}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i5y4m\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{total}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ixl3e\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{n_comprobante}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"izl7f\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{primer_vencimiento}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ibdr3\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{segundo_vencimiento}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"il517\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{partida}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iia8d\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuota}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i9l8u\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{partida}}\",\"_innertext\":false,\"open\":false}],\"open\":false}]",
    "bocetoAssets": "[{\"type\":\"image\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"unitDim\":\"px\",\"height\":0,\"width\":0}]",
    "bocetoCreador": 3,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 9,
    "bocetoNombre": "Berisso municipalidad",
    "bocetoRegistro": "2020-05-06 17:32:00",
    "bocetoHTML": "<img id=\"ini4\" src=\"/bocetos/imagenes/16/66J2fMLGnLbd3BuE\"/><div id=\"i4h9\">{{PARTIDA}}</div>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}img{width:823px !important;height:1344px !important;}body{width:823px !important;height:1344px !important;}#ini4{color:black;left:0px;top:0px;position:absolute;}#i4h9{padding:10px;left:609px;top:243px;position:absolute;}",
    "bocetoStyle": "[{\"selectors\":[],\"selectorsAdd\":\"img\",\"style\":{\"width\":\"823px !important\",\"height\":\"1344px !important\"}},{\"selectors\":[],\"selectorsAdd\":\"body\",\"style\":{\"width\":\"823px !important\",\"height\":\"1344px !important\"}},{\"selectors\":[{\"name\":\"ini4\",\"label\":\"ini4\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"color\":\"black\",\"left\":\"0px\",\"top\":\"0px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"wrapper\",\"label\":\"wrapper\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"wrapper\":1},{\"selectors\":[{\"name\":\"i4h9\",\"label\":\"i4h9\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"609px\",\"top\":\"243px\",\"position\":\"absolute\",\"en\":\"\"}}]",
    "bocetoComponents": "[{\"type\":\"image\",\"void\":true,\"content\":\"\",\"attributes\":{\"id\":\"ini4\",\"src\":\"/bocetos/imagenes/16/66J2fMLGnLbd3BuE\"},\"src\":\"/bocetos/imagenes/16/66J2fMLGnLbd3BuE\",\"activeOnRender\":0,\"open\":false},{\"type\":\"text\",\"status\":\"selected\",\"content\":\"\",\"attributes\":{\"id\":\"i4h9\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{PARTIDA}}\",\"_innertext\":false}]}]",
    "bocetoAssets": "[{\"type\":\"image\",\"src\":\"/bocetos/imagenes/16/66J2fMLGnLbd3BuE\",\"unitDim\":\"px\",\"height\":0,\"width\":0},{\"type\":\"image\",\"src\":\"/bocetos/imagenes/15/rgIfyd5GOMW0iy1E\",\"unitDim\":\"px\",\"height\":0,\"width\":0},{\"type\":\"image\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"unitDim\":\"px\",\"height\":0,\"width\":0}]",
    "bocetoCreador": 3,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 10,
    "bocetoNombre": "Hurlingham con variables de plantilla",
    "bocetoRegistro": "2020-05-07 15:33:34",
    "bocetoHTML": "<img id=\"iant\" src=\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"/><div title=\"here\" id=\"itx5\">{{NOMBRE}}</div><div title=\"here\" id=\"i4sg\">{{DOMICILIO}}</div><div title=\"here\" id=\"izib\">{{LOCALIDAD}}</div><div title=\"here\" id=\"iwrl\">{{CODIGO POSTAL}}</div><div title=\"here\" id=\"iud9\">{{CIRCUNSCRIPCION}}</div><div title=\"here\" id=\"idmc\">{{SECCION}}</div><div title=\"here\" id=\"iz3j\">{{CODIGO}}</div><div title=\"here\" id=\"ilpk\">{{MANZANA}}</div><div title=\"here\" id=\"iiyip\">{{PARCELA}}</div><div title=\"here\" id=\"ikf7v\">{{SUBPARCELA}}</div><div title=\"here\" id=\"ic9nm\">{{ZONIFICACION}}</div><div title=\"here\" id=\"iqu7j\">{{PARTIDA}}</div><div title=\"here\" id=\"i1ajl\">{{PARTIDA}}</div><div title=\"here\" id=\"i1sv2\">{{NRO CONTRIBUYENTE}}</div><div title=\"here\" id=\"if1ul\">{{TIPO EDIFICACION}}</div><div title=\"here\" id=\"ik4bd\">{{CUADERNILLO}}</div><div title=\"here\" id=\"iguoh\">{{PERIODO}}</div><div title=\"here\" id=\"i6f4w\">{{TIPO COMPROBANTE}}</div><div title=\"here\" id=\"i6o3z\">{{NRO COMPROBANTE}}</div><div title=\"here\" id=\"igo0v\">{{FECHA 1ER VENC}}</div><div title=\"here\" id=\"i28tt\">{{IMPORTE 1ER VENC}}</div><div title=\"here\" id=\"iz94k\">{{FECHA 2DO VENC}}</div><div title=\"here\" id=\"i3w0o\">{{IMPORTE 2DO VENC}}</div><div title=\"here\" id=\"ij1ol\">{{CODIGO CAJERO}}</div><div title=\"here\" id=\"i9113\">{{CODIGO DEB. AUT.}}</div><div title=\"here\" id=\"in68u\">{{PROX VTO}}</div><div title=\"here\" id=\"iivgd\">{{CPC}}</div><div title=\"here\" id=\"i9or6\">{{CONTRIB. BOMBEROS}}</div><div title=\"here\" id=\"iy4cc\">{{TASA ASISTENCIAL}}</div><div title=\"here\" id=\"i5i9s\">{{TSG}}</div><div title=\"here\" id=\"icr7g\">{{PORC. DESCUENTO}}</div><div title=\"here\" id=\"il8b7\">{{DESCUENTO}}</div><div title=\"here\" id=\"i1cgl\">{{DEUDA}}</div><div title=\"here\" id=\"itegr\">{{CONVENIO}}</div><div title=\"here\" id=\"ih769\">{{TITULO}}</div><div title=\"here\" id=\"irgyk\">{{DEUDA TOTAL}}</div><div title=\"here\" id=\"iqaxw\">{{EXIM}}</div><div title=\"here\" id=\"iw8zd\">{{DEBITO}}</div>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}#iant{color:black;left:0px;top:-2px;position:absolute;}img{width:823px !important;height:1344px !important;}body{width:823px !important;height:1344px !important;}#itx5{position:absolute;color:black;left:696px;top:105.5px;font-size:10px;white-space:nowrap;}#i4sg{position:absolute;color:black;left:308.359375px;top:99px;font-size:10px;white-space:nowrap;}#izib{position:absolute;color:black;left:307.59375px;top:117px;font-size:10px;white-space:nowrap;}#iwrl{position:absolute;color:black;left:307.59375px;top:135px;font-size:10px;white-space:nowrap;}#iud9{position:absolute;color:black;left:302.28125px;top:171px;font-size:10px;white-space:nowrap;}#idmc{position:absolute;color:black;left:373px;top:171px;font-size:10px;white-space:nowrap;}#iz3j{position:absolute;color:black;left:453px;top:171px;font-size:10px;white-space:nowrap;}#ilpk{position:absolute;color:black;left:532px;top:171px;font-size:10px;white-space:nowrap;}#iiyip{position:absolute;color:black;left:616px;top:171px;font-size:10px;white-space:nowrap;}#ikf7v{position:absolute;color:black;left:696px;top:171px;font-size:10px;white-space:nowrap;}#ic9nm{position:absolute;color:black;left:704.75px;top:465.5px;font-size:10px;white-space:nowrap;}#iqu7j{position:absolute;color:black;left:634.984375px;top:105.5px;font-size:10px;white-space:nowrap;}#i1sv2{position:absolute;color:black;left:307.59375px;top:80px;font-size:10px;white-space:nowrap;}#if1ul{position:absolute;color:black;left:696px;top:139px;font-size:10px;white-space:nowrap;}#ik4bd{position:absolute;color:black;left:544.671875px;top:139px;font-size:10px;white-space:nowrap;}#iguoh{position:absolute;color:black;left:706.375px;top:485.5px;font-size:10px;white-space:nowrap;}#i6f4w{position:absolute;color:black;left:302.28125px;top:480px;font-size:10px;white-space:nowrap;}#i6o3z{position:absolute;color:black;left:403.9921875px;top:480px;font-size:10px;white-space:nowrap;}#igo0v{position:absolute;color:black;left:403.984375px;top:505.5px;font-size:10px;white-space:nowrap;}#i28tt{position:absolute;left:511.09375px;top:505.5px;font-size:10px;white-space:nowrap;color:#f7f7f7;}#iz94k{position:absolute;color:black;left:403.984375px;top:531px;font-size:10px;white-space:nowrap;}#i3w0o{position:absolute;color:black;left:511.09375px;top:531px;font-size:10px;white-space:nowrap;}#ij1ol{position:absolute;color:black;left:701px;top:505.5px;font-size:10px;white-space:nowrap;}#i9113{position:absolute;color:black;left:706.375px;top:525.5px;font-size:10px;white-space:nowrap;}#in68u{position:absolute;color:black;left:706.375px;top:542px;font-size:10px;white-space:nowrap;}#iivgd{position:absolute;color:black;left:706.375px;top:559px;font-size:10px;white-space:nowrap;}#i9or6{position:absolute;color:black;left:198px;top:757px;font-size:10px;white-space:nowrap;}#iy4cc{position:absolute;color:black;left:198px;top:731px;font-size:10px;white-space:nowrap;}#i5i9s{position:absolute;color:black;left:198px;top:685.5px;font-size:10px;white-space:nowrap;}#icr7g{position:absolute;color:black;left:198px;top:776px;font-size:10px;white-space:nowrap;}#il8b7{position:absolute;color:black;left:198px;top:797px;font-size:10px;white-space:nowrap;}#i1cgl{position:absolute;color:black;left:708px;top:578px;font-size:10px;white-space:nowrap;}#itegr{position:absolute;color:black;left:708px;top:599px;font-size:10px;white-space:nowrap;}#ih769{position:absolute;color:black;left:708px;top:619px;font-size:10px;white-space:nowrap;}#irgyk{position:absolute;left:165.0546875px;top:830.5px;font-size:10px;white-space:nowrap;color:#f7f7f7;}#iqaxw{position:absolute;color:black;left:708px;top:638px;font-size:10px;white-space:nowrap;}#iw8zd{position:absolute;color:black;left:625.078125px;top:630px;font-size:10px;white-space:nowrap;}#i1ajl{position:absolute;color:black;left:554.984375px;top:460px;font-size:10px;white-space:nowrap;}",
    "bocetoStyle": "[{\"selectors\":[{\"name\":\"iant\",\"label\":\"iant\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"color\":\"black\",\"left\":\"0px\",\"top\":\"-2px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[],\"selectorsAdd\":\"img\",\"style\":{\"width\":\"823px !important\",\"height\":\"1344px !important\"}},{\"selectors\":[],\"selectorsAdd\":\"body\",\"style\":{\"width\":\"823px !important\",\"height\":\"1344px !important\"}},{\"selectors\":[{\"name\":\"itx5\",\"label\":\"itx5\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"696px\",\"top\":\"105.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i4sg\",\"label\":\"i4sg\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"308.359375px\",\"top\":\"99px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"izib\",\"label\":\"izib\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"307.59375px\",\"top\":\"117px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iwrl\",\"label\":\"iwrl\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"307.59375px\",\"top\":\"135px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iud9\",\"label\":\"iud9\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"302.28125px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"idmc\",\"label\":\"idmc\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"373px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iz3j\",\"label\":\"iz3j\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"453px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ilpk\",\"label\":\"ilpk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"532px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iiyip\",\"label\":\"iiyip\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"616px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ikf7v\",\"label\":\"ikf7v\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"696px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ic9nm\",\"label\":\"ic9nm\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"704.75px\",\"top\":\"465.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iqu7j\",\"label\":\"iqu7j\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"634.984375px\",\"top\":\"105.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i1sv2\",\"label\":\"i1sv2\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"307.59375px\",\"top\":\"80px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"if1ul\",\"label\":\"if1ul\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"696px\",\"top\":\"139px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ik4bd\",\"label\":\"ik4bd\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"544.671875px\",\"top\":\"139px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iguoh\",\"label\":\"iguoh\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"706.375px\",\"top\":\"485.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i6f4w\",\"label\":\"i6f4w\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"302.28125px\",\"top\":\"480px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i6o3z\",\"label\":\"i6o3z\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"403.9921875px\",\"top\":\"480px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"igo0v\",\"label\":\"igo0v\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"403.984375px\",\"top\":\"505.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i28tt\",\"label\":\"i28tt\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"left\":\"511.09375px\",\"top\":\"505.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\",\"color\":\"#f7f7f7\"}},{\"selectors\":[{\"name\":\"iz94k\",\"label\":\"iz94k\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"403.984375px\",\"top\":\"531px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i3w0o\",\"label\":\"i3w0o\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"511.09375px\",\"top\":\"531px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ij1ol\",\"label\":\"ij1ol\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"701px\",\"top\":\"505.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i9113\",\"label\":\"i9113\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"706.375px\",\"top\":\"525.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"in68u\",\"label\":\"in68u\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"706.375px\",\"top\":\"542px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iivgd\",\"label\":\"iivgd\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"706.375px\",\"top\":\"559px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i9or6\",\"label\":\"i9or6\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"757px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iy4cc\",\"label\":\"iy4cc\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"731px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i5i9s\",\"label\":\"i5i9s\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"685.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"icr7g\",\"label\":\"icr7g\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"776px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"il8b7\",\"label\":\"il8b7\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"797px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i1cgl\",\"label\":\"i1cgl\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"708px\",\"top\":\"578px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"itegr\",\"label\":\"itegr\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"708px\",\"top\":\"599px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ih769\",\"label\":\"ih769\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"708px\",\"top\":\"619px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"irgyk\",\"label\":\"irgyk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"left\":\"165.0546875px\",\"top\":\"830.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\",\"color\":\"#f7f7f7\"}},{\"selectors\":[{\"name\":\"iqaxw\",\"label\":\"iqaxw\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"708px\",\"top\":\"638px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iw8zd\",\"label\":\"iw8zd\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"625.078125px\",\"top\":\"630px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i1ajl\",\"label\":\"i1ajl\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"554.984375px\",\"top\":\"460px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"wrapper\",\"label\":\"wrapper\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"wrapper\":1}]",
    "bocetoComponents": "[{\"type\":\"image\",\"void\":true,\"content\":\"\",\"attributes\":{\"id\":\"iant\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"},\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"activeOnRender\":0},{\"content\":\"{{NOMBRE}}\",\"attributes\":{\"title\":\"here\",\"id\":\"itx5\"}},{\"content\":\"{{DOMICILIO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i4sg\"}},{\"content\":\"{{LOCALIDAD}}\",\"attributes\":{\"title\":\"here\",\"id\":\"izib\"}},{\"content\":\"{{CODIGO POSTAL}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iwrl\"}},{\"content\":\"{{CIRCUNSCRIPCION}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iud9\"}},{\"content\":\"{{SECCION}}\",\"attributes\":{\"title\":\"here\",\"id\":\"idmc\"}},{\"content\":\"{{CODIGO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iz3j\"}},{\"content\":\"{{MANZANA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ilpk\"}},{\"content\":\"{{PARCELA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iiyip\"}},{\"content\":\"{{SUBPARCELA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ikf7v\"}},{\"content\":\"{{ZONIFICACION}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ic9nm\"}},{\"content\":\"{{PARTIDA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iqu7j\"}},{\"content\":\"{{PARTIDA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i1ajl\"},\"view\":\"\"},{\"content\":\"{{NRO CONTRIBUYENTE}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i1sv2\"}},{\"content\":\"{{TIPO EDIFICACION}}\",\"attributes\":{\"title\":\"here\",\"id\":\"if1ul\"}},{\"content\":\"{{CUADERNILLO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ik4bd\"}},{\"content\":\"{{PERIODO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iguoh\"}},{\"content\":\"{{TIPO COMPROBANTE}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i6f4w\"}},{\"content\":\"{{NRO COMPROBANTE}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i6o3z\"}},{\"content\":\"{{FECHA 1ER VENC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"igo0v\"}},{\"content\":\"{{IMPORTE 1ER VENC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i28tt\"}},{\"content\":\"{{FECHA 2DO VENC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iz94k\"}},{\"content\":\"{{IMPORTE 2DO VENC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i3w0o\"}},{\"content\":\"{{CODIGO CAJERO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ij1ol\"}},{\"content\":\"{{CODIGO DEB. AUT.}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i9113\"}},{\"content\":\"{{PROX VTO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"in68u\"}},{\"content\":\"{{CPC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iivgd\"}},{\"content\":\"{{CONTRIB. BOMBEROS}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i9or6\"}},{\"content\":\"{{TASA ASISTENCIAL}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iy4cc\"}},{\"content\":\"{{TSG}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i5i9s\"}},{\"content\":\"{{PORC. DESCUENTO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"icr7g\"}},{\"content\":\"{{DESCUENTO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"il8b7\"}},{\"content\":\"{{DEUDA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i1cgl\"}},{\"content\":\"{{CONVENIO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"itegr\"}},{\"content\":\"{{TITULO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ih769\"}},{\"content\":\"{{DEUDA TOTAL}}\",\"attributes\":{\"title\":\"here\",\"id\":\"irgyk\"}},{\"content\":\"{{EXIM}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iqaxw\"}},{\"status\":\"selected\",\"content\":\"{{DEBITO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iw8zd\"}}]",
    "bocetoAssets": "[{\"type\":\"image\",\"src\":\"/bocetos/imagenes/16/66J2fMLGnLbd3BuE\",\"unitDim\":\"px\",\"height\":0,\"width\":0},{\"type\":\"image\",\"src\":\"/bocetos/imagenes/15/rgIfyd5GOMW0iy1E\",\"unitDim\":\"px\",\"height\":0,\"width\":0},{\"type\":\"image\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"unitDim\":\"px\",\"height\":0,\"width\":0}]",
    "bocetoCreador": 3,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 11,
    "bocetoNombre": "Hurlingham Formateado 2",
    "bocetoRegistro": "2020-05-08 20:05:48",
    "bocetoHTML": "<img id=\"imea\" src=\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"/><div id=\"iyez3\">{{porcentaje_descuento}}</div><div id=\"i38ql\">{{tipo_comprobante}}</div><div id=\"ixgd3\">{{subparcela}}</div><div id=\"icci8\">{{seccion}}</div><div id=\"iiq6\">{{circuito}}</div><div id=\"i9amz\">{{codigo}}</div><div id=\"ie0j\">{{manzana}}</div><div id=\"ivlsu\">{{parcela}}</div><div id=\"ix2g8\">{{tipo_inmueble}}</div><div id=\"iw9nk\">{{cuota}}</div><div id=\"i0yii\">{{contribuyente}}</div><div id=\"i77e4\">{{cuadernillo}}</div><div id=\"ioqwk\">{{tasa_servicios_generales}}</div><div id=\"iqt1i\">{{proteccion_ciudadana}}</div><div id=\"ifzql\">{{servicio_asistencial}}</div><div id=\"imyn5\">{{contribucion_bomberos}}</div><div id=\"iwb5q\">{{descuento}}</div><div id=\"i5y4m\">{{total}}</div><div id=\"ixl3e\">{{n_comprobante}}</div><div id=\"izl7f\">{{primer_vencimiento}}</div><div id=\"ibdr3\">{{segundo_vencimiento}}</div><div id=\"il517\">{{partida}}</div><div id=\"iia8d\">{{cuota}}</div><div id=\"i9l8u\">{{partida}}</div>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}#iiq6{padding:10px;left:297px;top:161px;position:absolute;}#i9amz{padding:10px;left:448.546875px;top:161px;position:absolute;}#icci8{padding:10px;left:366.75px;top:161px;position:absolute;}#imea{color:black;left:0px;top:-1px;position:absolute;}#ie0j{padding:10px;left:531.734375px;top:161px;position:absolute;}#ivlsu{padding:10px;left:611.125px;top:161px;position:absolute;}#ix2g8{padding:10px;left:684.640625px;top:130px;position:absolute;}#ixgd3{padding:10px;left:690px;top:161px;position:absolute;}#iw9nk{padding:10px;left:627.6640625px;top:130px;position:absolute;}#i77e4{padding:10px;left:543.4765625px;top:130px;position:absolute;}#i0yii{padding:10px;left:694.625px;top:99px;position:absolute;}#ioqwk{padding:10px;left:188.4296875px;top:678px;position:absolute;}#ixl3e{padding:10px;left:401.3515625px;top:472.5px;position:absolute;}#il517{padding:10px;left:550.2734375px;top:451px;position:absolute;}#iia8d{padding:10px;left:550.2734375px;top:472.5px;position:absolute;}#izl7f{padding:10px;left:394.6796875px;top:496px;position:absolute;}#ibdr3{padding:10px;left:394.6796875px;top:521px;position:absolute;}#i38ql{padding:10px;left:291.8125px;top:472.5px;position:absolute;}#iqt1i{padding:10px;left:188.4296875px;top:699px;position:absolute;}#ifzql{padding:10px;left:188.4296875px;top:724px;position:absolute;}#imyn5{padding:10px;left:188.4296875px;top:748px;position:absolute;}#iwb5q{padding:10px;left:188.4296875px;top:792px;position:absolute;}#iyez3{padding:10px;left:188.4296875px;top:769px;position:absolute;}#i5y4m{padding:10px;left:210.625px;top:823px;position:absolute;color:#ffffff;}*{font-size:10px;}img{width:823px !important;height:1344px !important;}body{width:823px !important;height:1344px !important;}#i9l8u{padding:10px;left:627.65625px;top:99px;position:absolute;font-size:10px;}",
    "bocetoStyle": "[{\"selectors\":[{\"name\":\"iiq6\",\"label\":\"iiq6\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"297px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i9amz\",\"label\":\"i9amz\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"448.546875px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"icci8\",\"label\":\"icci8\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"366.75px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"wrapper\",\"label\":\"wrapper\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"wrapper\":1},{\"selectors\":[{\"name\":\"imea\",\"label\":\"imea\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"color\":\"black\",\"left\":\"0px\",\"top\":\"-1px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ie0j\",\"label\":\"ie0j\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"531.734375px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ivlsu\",\"label\":\"ivlsu\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"611.125px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ix2g8\",\"label\":\"ix2g8\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"684.640625px\",\"top\":\"130px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ixgd3\",\"label\":\"ixgd3\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"690px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iw9nk\",\"label\":\"iw9nk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"627.6640625px\",\"top\":\"130px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i77e4\",\"label\":\"i77e4\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"543.4765625px\",\"top\":\"130px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i0yii\",\"label\":\"i0yii\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"694.625px\",\"top\":\"99px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ioqwk\",\"label\":\"ioqwk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"678px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ixl3e\",\"label\":\"ixl3e\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"401.3515625px\",\"top\":\"472.5px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"il517\",\"label\":\"il517\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"550.2734375px\",\"top\":\"451px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iia8d\",\"label\":\"iia8d\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"550.2734375px\",\"top\":\"472.5px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"izl7f\",\"label\":\"izl7f\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"394.6796875px\",\"top\":\"496px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ibdr3\",\"label\":\"ibdr3\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"394.6796875px\",\"top\":\"521px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i38ql\",\"label\":\"i38ql\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"291.8125px\",\"top\":\"472.5px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iqt1i\",\"label\":\"iqt1i\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"699px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ifzql\",\"label\":\"ifzql\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"724px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"imyn5\",\"label\":\"imyn5\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"748px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iwb5q\",\"label\":\"iwb5q\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"792px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iyez3\",\"label\":\"iyez3\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"769px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i5y4m\",\"label\":\"i5y4m\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"210.625px\",\"top\":\"823px\",\"position\":\"absolute\",\"en\":\"\",\"color\":\"#ffffff\"}},{\"selectors\":[{\"name\":\"plantilla\",\"label\":\"plantilla\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"selectors\":[],\"selectorsAdd\":\"*\",\"style\":{\"font-size\":\"10px\"}},{\"selectors\":[],\"selectorsAdd\":\"img\",\"style\":{\"width\":\"823px !important\",\"height\":\"1344px !important\"}},{\"selectors\":[],\"selectorsAdd\":\"body\",\"style\":{\"width\":\"823px !important\",\"height\":\"1344px !important\"}},{\"selectors\":[{\"name\":\"i9l8u\",\"label\":\"i9l8u\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"627.65625px\",\"top\":\"99px\",\"position\":\"absolute\",\"en\":\"\",\"font-size\":\"10px\"}}]",
    "bocetoComponents": "[{\"type\":\"image\",\"void\":true,\"content\":\"\",\"attributes\":{\"id\":\"imea\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"},\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"activeOnRender\":0,\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iyez3\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{porcentaje_descuento}}\",\"open\":false,\"_innertext\":false,\"view\":\"\"}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i38ql\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tipo_comprobante}}\",\"open\":false,\"_innertext\":false,\"view\":\"\"}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ixgd3\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{subparcela}}\",\"open\":false,\"_innertext\":false,\"view\":\"\"}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"icci8\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{seccion}}\",\"_innertext\":false,\"view\":\"\",\"open\":false}],\"view\":\"\",\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iiq6\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{circuito}}\",\"_innertext\":false,\"open\":false}],\"open\":false},{\"type\":\"text\",\"status\":\"selected\",\"content\":\"\",\"attributes\":{\"id\":\"i9amz\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{codigo}}\",\"_innertext\":false,\"open\":false}],\"view\":\"\",\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ie0j\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{manzana}}\",\"open\":false,\"_innertext\":false}],\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ivlsu\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{parcela}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ix2g8\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tipo_inmueble}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iw9nk\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuota}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i0yii\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{contribuyente}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i77e4\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuadernillo}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ioqwk\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tasa_servicios_generales}}\",\"open\":false,\"_innertext\":false}],\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iqt1i\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{proteccion_ciudadana}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ifzql\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{servicio_asistencial}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"imyn5\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{contribucion_bomberos}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iwb5q\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{descuento}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i5y4m\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{total}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ixl3e\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{n_comprobante}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"izl7f\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{primer_vencimiento}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ibdr3\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{segundo_vencimiento}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"il517\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{partida}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iia8d\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuota}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i9l8u\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{partida}}\",\"_innertext\":false,\"open\":false}],\"open\":false}]",
    "bocetoAssets": "[{\"type\":\"image\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"unitDim\":\"px\",\"height\":0,\"width\":0}]",
    "bocetoCreador": 3,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 12,
    "bocetoNombre": "Probemos esto",
    "bocetoRegistro": "2020-05-08 20:14:28",
    "bocetoHTML": "<img id=\"imea\" src=\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"/><div id=\"iyez3\">{{porcentaje_descuento}}</div><div id=\"i38ql\">{{tipo_comprobante}}</div><div id=\"ixgd3\">{{subparcela}}</div><div id=\"icci8\">{{seccion}}</div><div id=\"iiq6\">{{circuito}}</div><div id=\"i9amz\">{{codigo}}</div><div id=\"ie0j\">{{manzana}}</div><div id=\"ivlsu\">{{parcela}}</div><div id=\"ix2g8\">{{tipo_inmueble}}</div><div id=\"iw9nk\">{{cuota}}</div><div id=\"i0yii\">{{contribuyente}}</div><div id=\"i77e4\">{{cuadernillo}}</div><div id=\"ioqwk\">{{tasa_servicios_generales}}</div><div id=\"iqt1i\">{{proteccion_ciudadana}}</div><div id=\"ifzql\">{{servicio_asistencial}}</div><div id=\"imyn5\">{{contribucion_bomberos}}</div><div id=\"iwb5q\">{{descuento}}</div><div id=\"i5y4m\">{{total}}</div><div id=\"ixl3e\">{{n_comprobante}}</div><div id=\"izl7f\">{{primer_vencimiento}}</div><div id=\"ibdr3\">{{segundo_vencimiento}}</div><div id=\"il517\">{{partida}}</div><div id=\"iia8d\">{{cuota}}</div><div id=\"i9l8u\">{{partida}}</div>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}#iiq6{padding:10px;left:297px;top:161px;position:absolute;}#i9amz{padding:10px;left:448.546875px;top:161px;position:absolute;}#icci8{padding:10px;left:366.75px;top:161px;position:absolute;}#imea{color:black;left:0px;top:-1px;position:absolute;}#ie0j{padding:10px;left:531.734375px;top:161px;position:absolute;}#ivlsu{padding:10px;left:611.125px;top:161px;position:absolute;}#ix2g8{padding:10px;left:684.640625px;top:130px;position:absolute;}#ixgd3{padding:10px;left:690px;top:161px;position:absolute;}#iw9nk{padding:10px;left:627.6640625px;top:130px;position:absolute;}#i77e4{padding:10px;left:543.4765625px;top:130px;position:absolute;}#i0yii{padding:10px;left:694.625px;top:99px;position:absolute;}#ioqwk{padding:10px;left:188.4296875px;top:678px;position:absolute;}#ixl3e{padding:10px;left:401.3515625px;top:472.5px;position:absolute;}#il517{padding:10px;left:550.2734375px;top:451px;position:absolute;}#iia8d{padding:10px;left:550.2734375px;top:472.5px;position:absolute;}#izl7f{padding:10px;left:394.6796875px;top:496px;position:absolute;}#ibdr3{padding:10px;left:394.6796875px;top:521px;position:absolute;}#i38ql{padding:10px;left:291.8125px;top:472.5px;position:absolute;}#iqt1i{padding:10px;left:188.4296875px;top:699px;position:absolute;}#ifzql{padding:10px;left:188.4296875px;top:724px;position:absolute;}#imyn5{padding:10px;left:188.4296875px;top:748px;position:absolute;}#iwb5q{padding:10px;left:188.4296875px;top:792px;position:absolute;}#iyez3{padding:10px;left:188.4296875px;top:769px;position:absolute;}#i5y4m{padding:10px;left:210.625px;top:823px;position:absolute;color:#ffffff;}*{font-size:10px;}img{width:823px !important;height:1344px !important;}body{width:823px !important;height:1344px !important;}#i9l8u{padding:10px;left:627.65625px;top:99px;position:absolute;font-size:10px;}",
    "bocetoStyle": "[{\"selectors\":[{\"name\":\"iiq6\",\"label\":\"iiq6\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"297px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i9amz\",\"label\":\"i9amz\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"448.546875px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"icci8\",\"label\":\"icci8\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"366.75px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"wrapper\",\"label\":\"wrapper\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"wrapper\":1},{\"selectors\":[{\"name\":\"imea\",\"label\":\"imea\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"color\":\"black\",\"left\":\"0px\",\"top\":\"-1px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ie0j\",\"label\":\"ie0j\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"531.734375px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ivlsu\",\"label\":\"ivlsu\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"611.125px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ix2g8\",\"label\":\"ix2g8\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"684.640625px\",\"top\":\"130px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ixgd3\",\"label\":\"ixgd3\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"690px\",\"top\":\"161px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iw9nk\",\"label\":\"iw9nk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"627.6640625px\",\"top\":\"130px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i77e4\",\"label\":\"i77e4\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"543.4765625px\",\"top\":\"130px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i0yii\",\"label\":\"i0yii\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"694.625px\",\"top\":\"99px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ioqwk\",\"label\":\"ioqwk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"678px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ixl3e\",\"label\":\"ixl3e\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"401.3515625px\",\"top\":\"472.5px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"il517\",\"label\":\"il517\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"550.2734375px\",\"top\":\"451px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iia8d\",\"label\":\"iia8d\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"550.2734375px\",\"top\":\"472.5px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"izl7f\",\"label\":\"izl7f\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"394.6796875px\",\"top\":\"496px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ibdr3\",\"label\":\"ibdr3\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"394.6796875px\",\"top\":\"521px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i38ql\",\"label\":\"i38ql\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"291.8125px\",\"top\":\"472.5px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iqt1i\",\"label\":\"iqt1i\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"699px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ifzql\",\"label\":\"ifzql\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"724px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"imyn5\",\"label\":\"imyn5\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"748px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iwb5q\",\"label\":\"iwb5q\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"792px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iyez3\",\"label\":\"iyez3\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"188.4296875px\",\"top\":\"769px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i5y4m\",\"label\":\"i5y4m\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"210.625px\",\"top\":\"823px\",\"position\":\"absolute\",\"en\":\"\",\"color\":\"#ffffff\"}},{\"selectors\":[{\"name\":\"plantilla\",\"label\":\"plantilla\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"selectors\":[],\"selectorsAdd\":\"*\",\"style\":{\"font-size\":\"10px\"}},{\"selectors\":[],\"selectorsAdd\":\"img\",\"style\":{\"width\":\"823px !important\",\"height\":\"1344px !important\"}},{\"selectors\":[],\"selectorsAdd\":\"body\",\"style\":{\"width\":\"823px !important\",\"height\":\"1344px !important\"}},{\"selectors\":[{\"name\":\"i9l8u\",\"label\":\"i9l8u\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"padding\":\"10px\",\"left\":\"627.65625px\",\"top\":\"99px\",\"position\":\"absolute\",\"en\":\"\",\"font-size\":\"10px\"}}]",
    "bocetoComponents": "[{\"type\":\"image\",\"void\":true,\"content\":\"\",\"attributes\":{\"id\":\"imea\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"},\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"activeOnRender\":0,\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iyez3\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{porcentaje_descuento}}\",\"open\":false,\"_innertext\":false,\"view\":\"\"}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i38ql\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tipo_comprobante}}\",\"open\":false,\"_innertext\":false,\"view\":\"\"}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ixgd3\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{subparcela}}\",\"open\":false,\"_innertext\":false,\"view\":\"\"}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"icci8\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{seccion}}\",\"_innertext\":false,\"view\":\"\",\"open\":false}],\"view\":\"\",\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iiq6\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{circuito}}\",\"_innertext\":false,\"open\":false}],\"open\":false},{\"type\":\"text\",\"status\":\"selected\",\"content\":\"\",\"attributes\":{\"id\":\"i9amz\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{codigo}}\",\"_innertext\":false,\"open\":false}],\"view\":\"\",\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ie0j\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{manzana}}\",\"open\":false,\"_innertext\":false}],\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ivlsu\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{parcela}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ix2g8\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tipo_inmueble}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iw9nk\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuota}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i0yii\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{contribuyente}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i77e4\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuadernillo}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ioqwk\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tasa_servicios_generales}}\",\"open\":false,\"_innertext\":false}],\"open\":false},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iqt1i\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{proteccion_ciudadana}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ifzql\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{servicio_asistencial}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"imyn5\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{contribucion_bomberos}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iwb5q\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{descuento}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i5y4m\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{total}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ixl3e\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{n_comprobante}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"izl7f\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{primer_vencimiento}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"ibdr3\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{segundo_vencimiento}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"il517\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{partida}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"iia8d\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuota}}\",\"open\":false,\"_innertext\":false}],\"open\":false,\"view\":\"\"},{\"type\":\"text\",\"content\":\"\",\"attributes\":{\"id\":\"i9l8u\"},\"activeOnRender\":0,\"components\":[{\"tagName\":\"\",\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{partida}}\",\"_innertext\":false,\"open\":false}],\"open\":false}]",
    "bocetoAssets": "[{\"type\":\"image\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"unitDim\":\"px\",\"height\":0,\"width\":0}]",
    "bocetoCreador": 3,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 16,
    "bocetoNombre": "Hurlingham con QR",
    "bocetoRegistro": "2020-05-12 19:34:01",
    "bocetoHTML": "<img id=\"iant\" src=\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"/><div title=\"here\" id=\"itx5\">{{NOMBRE}}</div><div title=\"here\" id=\"i4sg\">{{DOMICILIO}}</div><div title=\"here\" id=\"izib\">{{LOCALIDAD}}</div><div title=\"here\" id=\"iwrl\">{{CODIGO POSTAL}}</div><div title=\"here\" id=\"iud9\">{{CIRCUNSCRIPCION}}</div><div title=\"here\" id=\"idmc\">{{SECCION}}</div><div title=\"here\" id=\"iz3j\">{{CODIGO}}</div><div title=\"here\" id=\"ilpk\">{{MANZANA}}</div><div title=\"here\" id=\"iiyip\">{{PARCELA}}</div><div title=\"here\" id=\"ikf7v\">{{SUBPARCELA}}</div><div title=\"here\" id=\"ic9nm\">{{ZONIFICACION}}</div><div title=\"here\" id=\"iqu7j\">{{PARTIDA}}</div><div title=\"here\" id=\"i1ajl\">{{PARTIDA}}</div><div title=\"here\" id=\"i1sv2\">{{NRO CONTRIBUYENTE}}</div><div title=\"here\" id=\"if1ul\">{{TIPO EDIFICACION}}</div><div title=\"here\" id=\"ik4bd\">{{CUADERNILLO}}</div><div title=\"here\" id=\"iguoh\">{{PERIODO}}</div><div title=\"here\" id=\"i6f4w\">{{TIPO COMPROBANTE}}</div><div title=\"here\" id=\"i6o3z\">{{NRO COMPROBANTE}}</div><div title=\"here\" id=\"igo0v\">{{FECHA 1ER VENC}}</div><div title=\"here\" id=\"i28tt\">{{IMPORTE 1ER VENC}}</div><div title=\"here\" id=\"iz94k\">{{FECHA 2DO VENC}}</div><div title=\"here\" id=\"i3w0o\">{{IMPORTE 2DO VENC}}</div><div title=\"here\" id=\"ij1ol\">{{CODIGO CAJERO}}</div><div title=\"here\" id=\"i9113\">{{CODIGO DEB. AUT.}}</div><div title=\"here\" id=\"in68u\">{{PROX VTO}}</div><div title=\"here\" id=\"iivgd\">{{CPC}}</div><div title=\"here\" id=\"i9or6\">{{CONTRIB. BOMBEROS}}</div><div title=\"here\" id=\"iy4cc\">{{TASA ASISTENCIAL}}</div><div title=\"here\" id=\"i5i9s\">{{TSG}}</div><div title=\"here\" id=\"icr7g\">{{PORC. DESCUENTO}}</div><div title=\"here\" id=\"il8b7\">{{DESCUENTO}}</div><div title=\"here\" id=\"i1cgl\">{{DEUDA}}</div><div title=\"here\" id=\"itegr\">{{CONVENIO}}</div><div title=\"here\" id=\"ih769\">{{TITULO}}</div><div title=\"here\" id=\"irgyk\">{{DEUDA TOTAL}}</div><div title=\"here\" id=\"iqaxw\">{{EXIM}}</div><div title=\"here\" id=\"iw8zd\">{{DEBITO}}</div><img id=\"ig8i5\" src=\"/bocetos/imagenes/19/9OXmveZWFD4KnhbY\"/>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}#iant{color:black;left:0px;top:-2px;position:absolute;}img{max-width:823px !important;max-height:1344px !important;width:100%;}body{width:823px !important;height:1344px !important;}#itx5{position:absolute;color:black;left:696px;top:105.5px;font-size:10px;white-space:nowrap;}#i4sg{position:absolute;color:black;left:308.359375px;top:99px;font-size:10px;white-space:nowrap;}#izib{position:absolute;color:black;left:307.59375px;top:117px;font-size:10px;white-space:nowrap;}#iwrl{position:absolute;color:black;left:307.59375px;top:135px;font-size:10px;white-space:nowrap;}#iud9{position:absolute;color:black;left:302.28125px;top:171px;font-size:10px;white-space:nowrap;}#idmc{position:absolute;color:black;left:373px;top:171px;font-size:10px;white-space:nowrap;}#iz3j{position:absolute;color:black;left:453px;top:171px;font-size:10px;white-space:nowrap;}#ilpk{position:absolute;color:black;left:532px;top:171px;font-size:10px;white-space:nowrap;}#iiyip{position:absolute;color:black;left:616px;top:171px;font-size:10px;white-space:nowrap;}#ikf7v{position:absolute;color:black;left:696px;top:171px;font-size:10px;white-space:nowrap;}#ic9nm{position:absolute;color:black;left:704.75px;top:465.5px;font-size:10px;white-space:nowrap;}#iqu7j{position:absolute;color:black;left:634.984375px;top:105.5px;font-size:10px;white-space:nowrap;}#i1sv2{position:absolute;color:black;left:307.59375px;top:80px;font-size:10px;white-space:nowrap;}#if1ul{position:absolute;color:black;left:696px;top:139px;font-size:10px;white-space:nowrap;}#ik4bd{position:absolute;color:black;left:544.671875px;top:139px;font-size:10px;white-space:nowrap;}#iguoh{position:absolute;color:black;left:706.375px;top:485.5px;font-size:10px;white-space:nowrap;}#i6f4w{position:absolute;color:black;left:302.28125px;top:480px;font-size:10px;white-space:nowrap;}#i6o3z{position:absolute;color:black;left:403.9921875px;top:480px;font-size:10px;white-space:nowrap;}#igo0v{position:absolute;color:black;left:403.984375px;top:505.5px;font-size:10px;white-space:nowrap;}#i28tt{position:absolute;left:511.09375px;top:505.5px;font-size:10px;white-space:nowrap;color:#f7f7f7;}#iz94k{position:absolute;color:black;left:403.984375px;top:531px;font-size:10px;white-space:nowrap;}#i3w0o{position:absolute;color:black;left:511.09375px;top:531px;font-size:10px;white-space:nowrap;}#ij1ol{position:absolute;color:black;left:701px;top:505.5px;font-size:10px;white-space:nowrap;}#i9113{position:absolute;color:black;left:706.375px;top:525.5px;font-size:10px;white-space:nowrap;}#in68u{position:absolute;color:black;left:706.375px;top:542px;font-size:10px;white-space:nowrap;}#iivgd{position:absolute;color:black;left:706.375px;top:559px;font-size:10px;white-space:nowrap;}#i9or6{position:absolute;color:black;left:198px;top:757px;font-size:10px;white-space:nowrap;}#iy4cc{position:absolute;color:black;left:198px;top:731px;font-size:10px;white-space:nowrap;}#i5i9s{position:absolute;color:black;left:198px;top:685.5px;font-size:10px;white-space:nowrap;}#icr7g{position:absolute;color:black;left:198px;top:776px;font-size:10px;white-space:nowrap;}#il8b7{position:absolute;color:black;left:198px;top:797px;font-size:10px;white-space:nowrap;}#i1cgl{position:absolute;color:black;left:708px;top:578px;font-size:10px;white-space:nowrap;}#itegr{position:absolute;color:black;left:708px;top:599px;font-size:10px;white-space:nowrap;}#ih769{position:absolute;color:black;left:708px;top:619px;font-size:10px;white-space:nowrap;}#irgyk{position:absolute;left:165.0546875px;top:830.5px;font-size:10px;white-space:nowrap;color:#f7f7f7;}#iqaxw{position:absolute;color:black;left:708px;top:638px;font-size:10px;white-space:nowrap;}#iw8zd{position:absolute;color:black;left:625.078125px;top:630px;font-size:10px;white-space:nowrap;}#i1ajl{position:absolute;color:black;left:554.984375px;top:460px;font-size:10px;white-space:nowrap;}#ig8i5{color:black;left:302.28125px;top:553px;position:absolute;width:100px;}",
    "bocetoStyle": "[{\"selectors\":[{\"name\":\"iant\",\"label\":\"iant\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"color\":\"black\",\"left\":\"0px\",\"top\":\"-2px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[],\"selectorsAdd\":\"img\",\"style\":{\"max-width\":\"823px !important\",\"max-height\":\"1344px !important\",\"width\":\"100%\"}},{\"selectors\":[],\"selectorsAdd\":\"body\",\"style\":{\"width\":\"823px !important\",\"height\":\"1344px !important\"}},{\"selectors\":[{\"name\":\"itx5\",\"label\":\"itx5\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"696px\",\"top\":\"105.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i4sg\",\"label\":\"i4sg\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"308.359375px\",\"top\":\"99px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"izib\",\"label\":\"izib\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"307.59375px\",\"top\":\"117px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iwrl\",\"label\":\"iwrl\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"307.59375px\",\"top\":\"135px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iud9\",\"label\":\"iud9\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"302.28125px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"idmc\",\"label\":\"idmc\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"373px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iz3j\",\"label\":\"iz3j\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"453px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ilpk\",\"label\":\"ilpk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"532px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iiyip\",\"label\":\"iiyip\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"616px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ikf7v\",\"label\":\"ikf7v\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"696px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ic9nm\",\"label\":\"ic9nm\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"704.75px\",\"top\":\"465.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iqu7j\",\"label\":\"iqu7j\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"634.984375px\",\"top\":\"105.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i1sv2\",\"label\":\"i1sv2\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"307.59375px\",\"top\":\"80px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"if1ul\",\"label\":\"if1ul\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"696px\",\"top\":\"139px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ik4bd\",\"label\":\"ik4bd\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"544.671875px\",\"top\":\"139px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iguoh\",\"label\":\"iguoh\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"706.375px\",\"top\":\"485.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i6f4w\",\"label\":\"i6f4w\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"302.28125px\",\"top\":\"480px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i6o3z\",\"label\":\"i6o3z\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"403.9921875px\",\"top\":\"480px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"igo0v\",\"label\":\"igo0v\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"403.984375px\",\"top\":\"505.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i28tt\",\"label\":\"i28tt\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"left\":\"511.09375px\",\"top\":\"505.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\",\"color\":\"#f7f7f7\"}},{\"selectors\":[{\"name\":\"iz94k\",\"label\":\"iz94k\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"403.984375px\",\"top\":\"531px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i3w0o\",\"label\":\"i3w0o\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"511.09375px\",\"top\":\"531px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ij1ol\",\"label\":\"ij1ol\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"701px\",\"top\":\"505.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i9113\",\"label\":\"i9113\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"706.375px\",\"top\":\"525.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"in68u\",\"label\":\"in68u\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"706.375px\",\"top\":\"542px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iivgd\",\"label\":\"iivgd\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"706.375px\",\"top\":\"559px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i9or6\",\"label\":\"i9or6\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"757px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iy4cc\",\"label\":\"iy4cc\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"731px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i5i9s\",\"label\":\"i5i9s\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"685.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"icr7g\",\"label\":\"icr7g\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"776px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"il8b7\",\"label\":\"il8b7\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"797px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i1cgl\",\"label\":\"i1cgl\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"708px\",\"top\":\"578px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"itegr\",\"label\":\"itegr\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"708px\",\"top\":\"599px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ih769\",\"label\":\"ih769\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"708px\",\"top\":\"619px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"irgyk\",\"label\":\"irgyk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"left\":\"165.0546875px\",\"top\":\"830.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\",\"color\":\"#f7f7f7\"}},{\"selectors\":[{\"name\":\"iqaxw\",\"label\":\"iqaxw\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"708px\",\"top\":\"638px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iw8zd\",\"label\":\"iw8zd\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"625.078125px\",\"top\":\"630px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i1ajl\",\"label\":\"i1ajl\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"554.984375px\",\"top\":\"460px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"wrapper\",\"label\":\"wrapper\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"wrapper\":1},{\"selectors\":[{\"name\":\"ig8i5\",\"label\":\"ig8i5\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"color\":\"black\",\"left\":\"302.28125px\",\"top\":\"553px\",\"position\":\"absolute\",\"width\":\"100px\",\"en\":\"\"}}]",
    "bocetoComponents": "[{\"type\":\"image\",\"void\":true,\"content\":\"\",\"attributes\":{\"id\":\"iant\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"},\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"activeOnRender\":0},{\"content\":\"{{NOMBRE}}\",\"attributes\":{\"title\":\"here\",\"id\":\"itx5\"}},{\"content\":\"{{DOMICILIO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i4sg\"}},{\"content\":\"{{LOCALIDAD}}\",\"attributes\":{\"title\":\"here\",\"id\":\"izib\"}},{\"content\":\"{{CODIGO POSTAL}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iwrl\"}},{\"content\":\"{{CIRCUNSCRIPCION}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iud9\"}},{\"content\":\"{{SECCION}}\",\"attributes\":{\"title\":\"here\",\"id\":\"idmc\"}},{\"content\":\"{{CODIGO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iz3j\"}},{\"content\":\"{{MANZANA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ilpk\"}},{\"content\":\"{{PARCELA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iiyip\"}},{\"content\":\"{{SUBPARCELA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ikf7v\"}},{\"content\":\"{{ZONIFICACION}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ic9nm\"}},{\"content\":\"{{PARTIDA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iqu7j\"}},{\"content\":\"{{PARTIDA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i1ajl\"},\"view\":\"\"},{\"content\":\"{{NRO CONTRIBUYENTE}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i1sv2\"}},{\"content\":\"{{TIPO EDIFICACION}}\",\"attributes\":{\"title\":\"here\",\"id\":\"if1ul\"}},{\"content\":\"{{CUADERNILLO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ik4bd\"}},{\"content\":\"{{PERIODO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iguoh\"}},{\"content\":\"{{TIPO COMPROBANTE}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i6f4w\"}},{\"content\":\"{{NRO COMPROBANTE}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i6o3z\"}},{\"content\":\"{{FECHA 1ER VENC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"igo0v\"}},{\"content\":\"{{IMPORTE 1ER VENC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i28tt\"}},{\"content\":\"{{FECHA 2DO VENC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iz94k\"}},{\"content\":\"{{IMPORTE 2DO VENC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i3w0o\"}},{\"content\":\"{{CODIGO CAJERO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ij1ol\"}},{\"content\":\"{{CODIGO DEB. AUT.}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i9113\"}},{\"content\":\"{{PROX VTO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"in68u\"}},{\"content\":\"{{CPC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iivgd\"}},{\"content\":\"{{CONTRIB. BOMBEROS}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i9or6\"}},{\"content\":\"{{TASA ASISTENCIAL}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iy4cc\"}},{\"content\":\"{{TSG}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i5i9s\"}},{\"content\":\"{{PORC. DESCUENTO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"icr7g\"}},{\"content\":\"{{DESCUENTO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"il8b7\"}},{\"content\":\"{{DEUDA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i1cgl\"}},{\"content\":\"{{CONVENIO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"itegr\"}},{\"content\":\"{{TITULO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ih769\"}},{\"content\":\"{{DEUDA TOTAL}}\",\"attributes\":{\"title\":\"here\",\"id\":\"irgyk\"}},{\"content\":\"{{EXIM}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iqaxw\"}},{\"content\":\"{{DEBITO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iw8zd\"}},{\"type\":\"image\",\"void\":true,\"status\":\"selected\",\"content\":\"\",\"attributes\":{\"id\":\"ig8i5\",\"src\":\"/bocetos/imagenes/19/9OXmveZWFD4KnhbY\"},\"src\":\"/bocetos/imagenes/19/9OXmveZWFD4KnhbY\",\"activeOnRender\":0}]",
    "bocetoAssets": "[{\"type\":\"image\",\"src\":\"/bocetos/imagenes/19/9OXmveZWFD4KnhbY\",\"unitDim\":\"px\",\"height\":0,\"width\":0},{\"type\":\"image\",\"src\":\"/bocetos/imagenes/16/66J2fMLGnLbd3BuE\",\"unitDim\":\"px\",\"height\":0,\"width\":0},{\"type\":\"image\",\"src\":\"/bocetos/imagenes/15/rgIfyd5GOMW0iy1E\",\"unitDim\":\"px\",\"height\":0,\"width\":0},{\"type\":\"image\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"unitDim\":\"px\",\"height\":0,\"width\":0}]",
    "bocetoCreador": 3,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 17,
    "bocetoNombre": "Hurlingham con QR",
    "bocetoRegistro": "2020-05-12 19:40:53",
    "bocetoHTML": "<img id=\"iant\" src=\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"/><div title=\"here\" id=\"itx5\">{{NOMBRE}}</div><div title=\"here\" id=\"i4sg\">{{DOMICILIO}}</div><div title=\"here\" id=\"izib\">{{LOCALIDAD}}</div><div title=\"here\" id=\"iwrl\">{{CODIGO POSTAL}}</div><div title=\"here\" id=\"iud9\">{{CIRCUNSCRIPCION}}</div><div title=\"here\" id=\"idmc\">{{SECCION}}</div><div title=\"here\" id=\"iz3j\">{{CODIGO}}</div><div title=\"here\" id=\"ilpk\">{{MANZANA}}</div><div title=\"here\" id=\"iiyip\">{{PARCELA}}</div><div title=\"here\" id=\"ikf7v\">{{SUBPARCELA}}</div><div title=\"here\" id=\"ic9nm\">{{ZONIFICACION}}</div><div title=\"here\" id=\"iqu7j\">{{PARTIDA}}</div><div title=\"here\" id=\"i1ajl\">{{PARTIDA}}</div><div title=\"here\" id=\"i1sv2\">{{NRO CONTRIBUYENTE}}</div><div title=\"here\" id=\"if1ul\">{{TIPO EDIFICACION}}</div><div title=\"here\" id=\"ik4bd\">{{CUADERNILLO}}</div><div title=\"here\" id=\"iguoh\">{{PERIODO}}</div><div title=\"here\" id=\"i6f4w\">{{TIPO COMPROBANTE}}</div><div title=\"here\" id=\"i6o3z\">{{NRO COMPROBANTE}}</div><div title=\"here\" id=\"igo0v\">{{FECHA 1ER VENC}}</div><div title=\"here\" id=\"i28tt\">{{IMPORTE 1ER VENC}}</div><div title=\"here\" id=\"iz94k\">{{FECHA 2DO VENC}}</div><div title=\"here\" id=\"i3w0o\">{{IMPORTE 2DO VENC}}</div><div title=\"here\" id=\"ij1ol\">{{CODIGO CAJERO}}</div><div title=\"here\" id=\"i9113\">{{CODIGO DEB. AUT.}}</div><div title=\"here\" id=\"in68u\">{{PROX VTO}}</div><div title=\"here\" id=\"iivgd\">{{CPC}}</div><div title=\"here\" id=\"i9or6\">{{CONTRIB. BOMBEROS}}</div><div title=\"here\" id=\"iy4cc\">{{TASA ASISTENCIAL}}</div><div title=\"here\" id=\"i5i9s\">{{TSG}}</div><div title=\"here\" id=\"icr7g\">{{PORC. DESCUENTO}}</div><div title=\"here\" id=\"il8b7\">{{DESCUENTO}}</div><div title=\"here\" id=\"i1cgl\">{{DEUDA}}</div><div title=\"here\" id=\"itegr\">{{CONVENIO}}</div><div title=\"here\" id=\"ih769\">{{TITULO}}</div><div title=\"here\" id=\"irgyk\">{{DEUDA TOTAL}}</div><div title=\"here\" id=\"iqaxw\">{{EXIM}}</div><div title=\"here\" id=\"iw8zd\">{{DEBITO}}</div><img src=\"https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl={{A ver que onda}}&chld=L|0\" class=\"codigoqr\" id=\"ijgmm\"/>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}#iant{color:black;left:0px;top:-2px;position:absolute;}img{max-width:823px !important;max-height:1344px !important;width:100%;}body{width:823px !important;height:1344px !important;}#itx5{position:absolute;color:black;left:696px;top:105.5px;font-size:10px;white-space:nowrap;}#i4sg{position:absolute;color:black;left:308.359375px;top:99px;font-size:10px;white-space:nowrap;}#izib{position:absolute;color:black;left:307.59375px;top:117px;font-size:10px;white-space:nowrap;}#iwrl{position:absolute;color:black;left:307.59375px;top:135px;font-size:10px;white-space:nowrap;}#iud9{position:absolute;color:black;left:302.28125px;top:171px;font-size:10px;white-space:nowrap;}#idmc{position:absolute;color:black;left:373px;top:171px;font-size:10px;white-space:nowrap;}#iz3j{position:absolute;color:black;left:453px;top:171px;font-size:10px;white-space:nowrap;}#ilpk{position:absolute;color:black;left:532px;top:171px;font-size:10px;white-space:nowrap;}#iiyip{position:absolute;color:black;left:616px;top:171px;font-size:10px;white-space:nowrap;}#ikf7v{position:absolute;color:black;left:696px;top:171px;font-size:10px;white-space:nowrap;}#ic9nm{position:absolute;color:black;left:704.75px;top:465.5px;font-size:10px;white-space:nowrap;}#iqu7j{position:absolute;color:black;left:634.984375px;top:105.5px;font-size:10px;white-space:nowrap;}#i1sv2{position:absolute;color:black;left:307.59375px;top:80px;font-size:10px;white-space:nowrap;}#if1ul{position:absolute;color:black;left:696px;top:139px;font-size:10px;white-space:nowrap;}#ik4bd{position:absolute;color:black;left:544.671875px;top:139px;font-size:10px;white-space:nowrap;}#iguoh{position:absolute;color:black;left:706.375px;top:485.5px;font-size:10px;white-space:nowrap;}#i6f4w{position:absolute;color:black;left:302.28125px;top:480px;font-size:10px;white-space:nowrap;}#i6o3z{position:absolute;color:black;left:403.9921875px;top:480px;font-size:10px;white-space:nowrap;}#igo0v{position:absolute;color:black;left:403.984375px;top:505.5px;font-size:10px;white-space:nowrap;}#i28tt{position:absolute;left:511.09375px;top:505.5px;font-size:10px;white-space:nowrap;color:#f7f7f7;}#iz94k{position:absolute;color:black;left:403.984375px;top:531px;font-size:10px;white-space:nowrap;}#i3w0o{position:absolute;color:black;left:511.09375px;top:531px;font-size:10px;white-space:nowrap;}#ij1ol{position:absolute;color:black;left:701px;top:505.5px;font-size:10px;white-space:nowrap;}#i9113{position:absolute;color:black;left:706.375px;top:525.5px;font-size:10px;white-space:nowrap;}#in68u{position:absolute;color:black;left:706.375px;top:542px;font-size:10px;white-space:nowrap;}#iivgd{position:absolute;color:black;left:706.375px;top:559px;font-size:10px;white-space:nowrap;}#i9or6{position:absolute;color:black;left:198px;top:757px;font-size:10px;white-space:nowrap;}#iy4cc{position:absolute;color:black;left:198px;top:731px;font-size:10px;white-space:nowrap;}#i5i9s{position:absolute;color:black;left:198px;top:685.5px;font-size:10px;white-space:nowrap;}#icr7g{position:absolute;color:black;left:198px;top:776px;font-size:10px;white-space:nowrap;}#il8b7{position:absolute;color:black;left:198px;top:797px;font-size:10px;white-space:nowrap;}#i1cgl{position:absolute;color:black;left:708px;top:578px;font-size:10px;white-space:nowrap;}#itegr{position:absolute;color:black;left:708px;top:599px;font-size:10px;white-space:nowrap;}#ih769{position:absolute;color:black;left:708px;top:619px;font-size:10px;white-space:nowrap;}#irgyk{position:absolute;left:165.0546875px;top:830.5px;font-size:10px;white-space:nowrap;color:#f7f7f7;}#iqaxw{position:absolute;color:black;left:708px;top:638px;font-size:10px;white-space:nowrap;}#iw8zd{position:absolute;color:black;left:625.078125px;top:630px;font-size:10px;white-space:nowrap;}#i1ajl{position:absolute;color:black;left:554.984375px;top:460px;font-size:10px;white-space:nowrap;}#ijgmm{position:absolute;width:100px;height:100px;left:296.359375px;top:554px;font-size:10px;white-space:nowrap;}",
    "bocetoStyle": "[{\"selectors\":[{\"name\":\"iant\",\"label\":\"iant\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"color\":\"black\",\"left\":\"0px\",\"top\":\"-2px\",\"position\":\"absolute\",\"en\":\"\"}},{\"selectors\":[],\"selectorsAdd\":\"img\",\"style\":{\"max-width\":\"823px !important\",\"max-height\":\"1344px !important\",\"width\":\"100%\"}},{\"selectors\":[],\"selectorsAdd\":\"body\",\"style\":{\"width\":\"823px !important\",\"height\":\"1344px !important\"}},{\"selectors\":[{\"name\":\"itx5\",\"label\":\"itx5\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"696px\",\"top\":\"105.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i4sg\",\"label\":\"i4sg\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"308.359375px\",\"top\":\"99px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"izib\",\"label\":\"izib\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"307.59375px\",\"top\":\"117px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iwrl\",\"label\":\"iwrl\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"307.59375px\",\"top\":\"135px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iud9\",\"label\":\"iud9\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"302.28125px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"idmc\",\"label\":\"idmc\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"373px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iz3j\",\"label\":\"iz3j\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"453px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ilpk\",\"label\":\"ilpk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"532px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iiyip\",\"label\":\"iiyip\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"616px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ikf7v\",\"label\":\"ikf7v\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"696px\",\"top\":\"171px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ic9nm\",\"label\":\"ic9nm\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"704.75px\",\"top\":\"465.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iqu7j\",\"label\":\"iqu7j\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"634.984375px\",\"top\":\"105.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i1sv2\",\"label\":\"i1sv2\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"307.59375px\",\"top\":\"80px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"if1ul\",\"label\":\"if1ul\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"696px\",\"top\":\"139px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ik4bd\",\"label\":\"ik4bd\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"544.671875px\",\"top\":\"139px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iguoh\",\"label\":\"iguoh\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"706.375px\",\"top\":\"485.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i6f4w\",\"label\":\"i6f4w\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"302.28125px\",\"top\":\"480px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i6o3z\",\"label\":\"i6o3z\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"403.9921875px\",\"top\":\"480px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"igo0v\",\"label\":\"igo0v\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"403.984375px\",\"top\":\"505.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i28tt\",\"label\":\"i28tt\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"left\":\"511.09375px\",\"top\":\"505.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\",\"color\":\"#f7f7f7\"}},{\"selectors\":[{\"name\":\"iz94k\",\"label\":\"iz94k\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"403.984375px\",\"top\":\"531px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i3w0o\",\"label\":\"i3w0o\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"511.09375px\",\"top\":\"531px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ij1ol\",\"label\":\"ij1ol\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"701px\",\"top\":\"505.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i9113\",\"label\":\"i9113\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"706.375px\",\"top\":\"525.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"in68u\",\"label\":\"in68u\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"706.375px\",\"top\":\"542px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iivgd\",\"label\":\"iivgd\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"706.375px\",\"top\":\"559px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i9or6\",\"label\":\"i9or6\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"757px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iy4cc\",\"label\":\"iy4cc\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"731px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i5i9s\",\"label\":\"i5i9s\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"685.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"icr7g\",\"label\":\"icr7g\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"776px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"il8b7\",\"label\":\"il8b7\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"198px\",\"top\":\"797px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i1cgl\",\"label\":\"i1cgl\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"708px\",\"top\":\"578px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"itegr\",\"label\":\"itegr\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"708px\",\"top\":\"599px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"ih769\",\"label\":\"ih769\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"708px\",\"top\":\"619px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"irgyk\",\"label\":\"irgyk\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"left\":\"165.0546875px\",\"top\":\"830.5px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\",\"color\":\"#f7f7f7\"}},{\"selectors\":[{\"name\":\"iqaxw\",\"label\":\"iqaxw\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"708px\",\"top\":\"638px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"iw8zd\",\"label\":\"iw8zd\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"625.078125px\",\"top\":\"630px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"i1ajl\",\"label\":\"i1ajl\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"color\":\"black\",\"left\":\"554.984375px\",\"top\":\"460px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[{\"name\":\"wrapper\",\"label\":\"wrapper\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"wrapper\":1},{\"selectors\":[{\"name\":\"codigoqr\",\"label\":\"codigoqr\",\"type\":1,\"active\":true,\"private\":false,\"protected\":false}]},{\"selectors\":[{\"name\":\"ijgmm\",\"label\":\"ijgmm\",\"type\":2,\"active\":true,\"private\":false,\"protected\":false}],\"style\":{\"position\":\"absolute\",\"width\":\"100px\",\"height\":\"100px\",\"left\":\"296.359375px\",\"top\":\"554px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}}]",
    "bocetoComponents": "[{\"type\":\"image\",\"void\":true,\"content\":\"\",\"attributes\":{\"id\":\"iant\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"},\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"activeOnRender\":0,\"open\":false},{\"content\":\"{{NOMBRE}}\",\"attributes\":{\"title\":\"here\",\"id\":\"itx5\"},\"open\":false},{\"content\":\"{{DOMICILIO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i4sg\"},\"open\":false},{\"content\":\"{{LOCALIDAD}}\",\"attributes\":{\"title\":\"here\",\"id\":\"izib\"},\"open\":false},{\"content\":\"{{CODIGO POSTAL}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iwrl\"},\"open\":false},{\"content\":\"{{CIRCUNSCRIPCION}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iud9\"},\"open\":false},{\"content\":\"{{SECCION}}\",\"attributes\":{\"title\":\"here\",\"id\":\"idmc\"},\"open\":false},{\"content\":\"{{CODIGO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iz3j\"},\"open\":false},{\"content\":\"{{MANZANA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ilpk\"},\"open\":false},{\"content\":\"{{PARCELA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iiyip\"},\"open\":false},{\"content\":\"{{SUBPARCELA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ikf7v\"},\"open\":false},{\"content\":\"{{ZONIFICACION}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ic9nm\"},\"open\":false},{\"content\":\"{{PARTIDA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iqu7j\"},\"open\":false},{\"content\":\"{{PARTIDA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i1ajl\"},\"view\":\"\",\"open\":false},{\"content\":\"{{NRO CONTRIBUYENTE}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i1sv2\"},\"open\":false},{\"content\":\"{{TIPO EDIFICACION}}\",\"attributes\":{\"title\":\"here\",\"id\":\"if1ul\"},\"open\":false},{\"content\":\"{{CUADERNILLO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ik4bd\"},\"open\":false},{\"content\":\"{{PERIODO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iguoh\"},\"open\":false},{\"content\":\"{{TIPO COMPROBANTE}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i6f4w\"},\"open\":false},{\"content\":\"{{NRO COMPROBANTE}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i6o3z\"},\"open\":false},{\"content\":\"{{FECHA 1ER VENC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"igo0v\"},\"open\":false},{\"content\":\"{{IMPORTE 1ER VENC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i28tt\"},\"open\":false},{\"content\":\"{{FECHA 2DO VENC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iz94k\"},\"open\":false},{\"content\":\"{{IMPORTE 2DO VENC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i3w0o\"},\"open\":false},{\"content\":\"{{CODIGO CAJERO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ij1ol\"},\"open\":false},{\"content\":\"{{CODIGO DEB. AUT.}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i9113\"},\"open\":false},{\"content\":\"{{PROX VTO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"in68u\"},\"open\":false},{\"content\":\"{{CPC}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iivgd\"},\"open\":false},{\"content\":\"{{CONTRIB. BOMBEROS}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i9or6\"},\"open\":false},{\"content\":\"{{TASA ASISTENCIAL}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iy4cc\"},\"open\":false},{\"content\":\"{{TSG}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i5i9s\"},\"open\":false},{\"content\":\"{{PORC. DESCUENTO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"icr7g\"},\"open\":false},{\"content\":\"{{DESCUENTO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"il8b7\"},\"open\":false},{\"content\":\"{{DEUDA}}\",\"attributes\":{\"title\":\"here\",\"id\":\"i1cgl\"},\"open\":false},{\"content\":\"{{CONVENIO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"itegr\"},\"open\":false},{\"content\":\"{{TITULO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"ih769\"},\"open\":false},{\"content\":\"{{DEUDA TOTAL}}\",\"attributes\":{\"title\":\"here\",\"id\":\"irgyk\"},\"open\":false},{\"content\":\"{{EXIM}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iqaxw\"},\"open\":false},{\"content\":\"{{DEBITO}}\",\"attributes\":{\"title\":\"here\",\"id\":\"iw8zd\"},\"open\":false},{\"tagName\":\"img\",\"void\":true,\"status\":\"selected\",\"content\":\"\",\"attributes\":{\"src\":\"https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl={{A ver que onda}}&chld=L|0\",\"id\":\"ijgmm\"}}]",
    "bocetoAssets": "[{\"type\":\"image\",\"src\":\"/bocetos/imagenes/19/9OXmveZWFD4KnhbY\",\"unitDim\":\"px\",\"height\":0,\"width\":0},{\"type\":\"image\",\"src\":\"/bocetos/imagenes/16/66J2fMLGnLbd3BuE\",\"unitDim\":\"px\",\"height\":0,\"width\":0},{\"type\":\"image\",\"src\":\"/bocetos/imagenes/15/rgIfyd5GOMW0iy1E\",\"unitDim\":\"px\",\"height\":0,\"width\":0},{\"type\":\"image\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"unitDim\":\"px\",\"height\":0,\"width\":0}]",
    "bocetoCreador": 3,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 20,
    "bocetoNombre": "Hurlingham Formateado 3",
    "bocetoRegistro": "2021-01-27 13:32:54",
    "bocetoHTML": "<img id=\"imea\" src=\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"/><div id=\"iyez3\">{{porcentaje_descuento}}</div><div id=\"i38ql\">{{tipo_comprobante}}</div><div id=\"ixgd3\">{{subparcela}}</div><div id=\"icci8\">{{seccion}}</div><div id=\"iiq6\">{{circuito}}</div><div id=\"i9amz\">{{codigo}}</div><div id=\"ie0j\">{{manzana}}</div><div id=\"ivlsu\">{{parcela}}</div><div id=\"ix2g8\">{{tipo_inmueble}}</div><div id=\"iw9nk\">{{cuota}}</div><div id=\"i0yii\">{{contribuyente}}</div><div id=\"i77e4\">{{cuadernillo}}</div><div id=\"ioqwk\">{{tasa_servicios_generales}}</div><div id=\"iqt1i\">{{proteccion_ciudadana}}</div><div id=\"ifzql\">{{servicio_asistencial}}</div><div id=\"imyn5\">{{contribucion_bomberos}}</div><div id=\"iwb5q\">{{descuento}}</div><div id=\"i5y4m\">{{total}}</div><div id=\"ixl3e\">{{n_comprobante}}</div><div id=\"izl7f\">{{primer_vencimiento}}</div><div id=\"ibdr3\">{{segundo_vencimiento}}</div><div id=\"il517\">{{partida}}</div><div id=\"iia8d\">{{cuota}}</div><div id=\"i9l8u\">{{partida}}</div>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}#iiq6{padding:10px;left:297px;top:161px;position:absolute;}#i9amz{padding:10px;left:448.546875px;top:161px;position:absolute;}#icci8{padding:10px;left:366.75px;top:161px;position:absolute;}#imea{color:black;left:0px;top:-1px;position:absolute;}#ie0j{padding:10px;left:531.734375px;top:161px;position:absolute;}#ivlsu{padding:10px;left:611.125px;top:161px;position:absolute;}#ix2g8{padding:10px;left:684.640625px;top:130px;position:absolute;}#ixgd3{padding:10px;left:690px;top:161px;position:absolute;}#iw9nk{padding:10px;left:627.6640625px;top:130px;position:absolute;}#i77e4{padding:10px;left:543.4765625px;top:130px;position:absolute;}#i0yii{padding:10px;left:694.625px;top:99px;position:absolute;}#ioqwk{padding:10px;left:188.4296875px;top:678px;position:absolute;}#ixl3e{padding:10px;left:401.3515625px;top:472.5px;position:absolute;}#il517{padding:10px;left:550.2734375px;top:451px;position:absolute;}#iia8d{padding:10px;left:550.2734375px;top:472.5px;position:absolute;}#izl7f{padding:10px;left:394.6796875px;top:496px;position:absolute;}#ibdr3{padding:10px;left:394.6796875px;top:521px;position:absolute;}#i38ql{padding:10px;left:291.8125px;top:472.5px;position:absolute;}#iqt1i{padding:10px;left:188.4296875px;top:699px;position:absolute;}#ifzql{padding:10px;left:188.4296875px;top:724px;position:absolute;}#imyn5{padding:10px;left:188.4296875px;top:748px;position:absolute;}#iwb5q{padding:10px;left:188.4296875px;top:792px;position:absolute;}#iyez3{padding:10px;left:188.4296875px;top:769px;position:absolute;}#i5y4m{padding:10px;left:210.625px;top:823px;position:absolute;color:#ffffff;}*{font-size:10px;}img{max-width:823px !important;max-height:1344px !important;width:100%;}body{width:823px !important;height:1344px !important;}#i9l8u{padding:10px;left:627.65625px;top:99px;position:absolute;font-size:10px;}",
    "bocetoStyle": null,
    "bocetoComponents": "[{\"type\":\"image\",\"attributes\":{\"id\":\"imea\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\"},\"activeOnRender\":0},{\"type\":\"text\",\"attributes\":{\"id\":\"iyez3\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{porcentaje_descuento}}\",\"_innertext\":false,\"view\":\"\"}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"i38ql\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tipo_comprobante}}\",\"_innertext\":false,\"view\":\"\"}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"ixgd3\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{subparcela}}\",\"_innertext\":false,\"view\":\"\"}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"icci8\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{seccion}}\",\"_innertext\":false,\"view\":\"\"}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"iiq6\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{circuito}}\",\"_innertext\":false}]},{\"type\":\"text\",\"attributes\":{\"id\":\"i9amz\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{codigo}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"ie0j\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{manzana}}\",\"_innertext\":false}]},{\"type\":\"text\",\"attributes\":{\"id\":\"ivlsu\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{parcela}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"ix2g8\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tipo_inmueble}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"iw9nk\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuota}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"i0yii\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{contribuyente}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"i77e4\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuadernillo}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"ioqwk\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{tasa_servicios_generales}}\",\"_innertext\":false}]},{\"type\":\"text\",\"attributes\":{\"id\":\"iqt1i\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{proteccion_ciudadana}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"ifzql\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{servicio_asistencial}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"imyn5\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{contribucion_bomberos}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"iwb5q\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{descuento}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"i5y4m\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{total}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"ixl3e\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{n_comprobante}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"izl7f\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{primer_vencimiento}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"ibdr3\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{segundo_vencimiento}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"il517\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{partida}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"iia8d\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{cuota}}\",\"_innertext\":false}],\"view\":\"\"},{\"type\":\"text\",\"attributes\":{\"id\":\"i9l8u\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"{{partida}}\",\"_innertext\":false}]}]",
    "bocetoAssets": "[{\"type\":\"image\",\"src\":\"/bocetos/imagenes/14/XzfD0xc7aa61WEpf\",\"unitDim\":\"px\",\"height\":0,\"width\":0}]",
    "bocetoCreador": 41,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 21,
    "bocetoNombre": "boceto nuevo",
    "bocetoRegistro": "2021-01-27 15:07:44",
    "bocetoHTML": "<img id=\"i71u\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+\"/>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}img{max-width:823px !important;max-height:1344px !important;width:100%;}body{width:823px !important;height:1344px !important;}#i71u{color:black;left:0px;top:-7px;position:absolute;width:823px;height:835px;}",
    "bocetoStyle": null,
    "bocetoComponents": "[{\"type\":\"image\",\"attributes\":{\"id\":\"i71u\",\"src\":\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+\"},\"activeOnRender\":0}]",
    "bocetoAssets": "[{\"type\":\"image\",\"src\":\"/bocetos/imagenes/22/wHABYTKDz1z8JFt7\",\"unitDim\":\"px\",\"height\":0,\"width\":0}]",
    "bocetoCreador": 41,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 22,
    "bocetoNombre": "TSG - Berisso",
    "bocetoRegistro": "2021-01-27 16:20:09",
    "bocetoHTML": "Berisso - TSG<section class=\"bdg-sect\" id=\"i4tf\"><h1 class=\"heading\">Insert title here</h1><p class=\"paragraph\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></section>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}img{max-width:823px !important;max-height:1344px !important;width:100%;}body{width:823px !important;height:1344px !important;}#i4tf{left:0px;top:97px;position:absolute;}",
    "bocetoStyle": null,
    "bocetoComponents": "[{\"type\":\"textnode\",\"content\":\"Berisso - TSG\"},{\"tagName\":\"section\",\"classes\":[\"bdg-sect\"],\"attributes\":{\"id\":\"i4tf\"},\"components\":[{\"tagName\":\"h1\",\"type\":\"text\",\"classes\":[\"heading\"],\"components\":[{\"type\":\"textnode\",\"content\":\"Insert title here\"}]},{\"tagName\":\"p\",\"type\":\"text\",\"classes\":[\"paragraph\"],\"components\":[{\"type\":\"textnode\",\"content\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\"}]}]}]",
    "bocetoAssets": "[]",
    "bocetoCreador": 41,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 23,
    "bocetoNombre": "TSGR Tasa por Servicios Generales Rurales - Berisso",
    "bocetoRegistro": "2021-01-28 10:25:19",
    "bocetoHTML": "<img id=\"ihre\" src=\"/bocetos/imagenes/23/yeoxFReTsEoWRx49\"/>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}img{max-width:823px !important;max-height:1344px !important;width:100%;}body{width:823px !important;height:1344px !important;}#ihre{color:black;left:0px;top:0px;position:absolute;}",
    "bocetoStyle": null,
    "bocetoComponents": "[{\"type\":\"image\",\"attributes\":{\"id\":\"ihre\",\"src\":\"/bocetos/imagenes/23/yeoxFReTsEoWRx49\"},\"activeOnRender\":0}]",
    "bocetoAssets": "[{\"type\":\"image\",\"src\":\"/bocetos/imagenes/23/yeoxFReTsEoWRx49\",\"unitDim\":\"px\",\"height\":0,\"width\":0}]",
    "bocetoCreador": 41,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 24,
    "bocetoNombre": "prueba doge",
    "bocetoRegistro": "2021-02-02 09:13:00",
    "bocetoHTML": "<div class=\"variable\" id=\"ix8k\">{{undefined}}</div><div class=\"variable\" id=\"ivsi\">{{undefined}}</div><div class=\"variable\" id=\"ioba\">{{undefined}}</div><div id=\"i8g5\">Insert your text here</div>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}img{max-width:823px !important;max-height:1344px !important;width:100%;}body{width:823px !important;height:1344px !important;}#ix8k{position:absolute;color:black;left:751px;top:15px;font-size:10px;white-space:nowrap;}#ivsi{position:absolute;color:black;left:751px;top:54px;font-size:10px;white-space:nowrap;}#ioba{position:absolute;color:black;left:751px;top:100px;font-size:10px;white-space:nowrap;}#i8g5{padding:10px;left:417px;top:129px;position:absolute;}",
    "bocetoStyle": null,
    "bocetoComponents": "[{\"content\":\"{{undefined}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"ix8k\"}},{\"content\":\"{{undefined}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"ivsi\"}},{\"content\":\"{{undefined}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"ioba\"}},{\"type\":\"text\",\"attributes\":{\"id\":\"i8g5\"},\"activeOnRender\":0,\"components\":[{\"type\":\"textnode\",\"removable\":false,\"draggable\":false,\"highlightable\":0,\"copyable\":false,\"content\":\"Insert your text here\",\"_innertext\":false}]}]",
    "bocetoAssets": "[]",
    "bocetoCreador": 41,
    "bocetoEliminado": null
    },
    {
    "bocetoID": 25,
    "bocetoNombre": "Berisso Motos",
    "bocetoRegistro": "2021-02-09 16:37:30",
    "bocetoHTML": "<img id=\"i7ji\" src=\"/bocetos/imagenes/25/V1VWFt8Eps0tIbIG\"/><div id=\"iih5i\" class=\"variable\">{{IMPORTE}}</div><div id=\"i7sq\" class=\"variable\">{{DOMINIO}}</div><div id=\"izhj\" class=\"variable\">{{TITULAR}}</div><div id=\"itxy\" class=\"variable\">{{DESTINATARIO}}</div><div id=\"iwo5\" class=\"variable\">{{DOMICILIO_DEST}}</div><div id=\"i8sl\" class=\"variable\">{{TASA}}</div><div id=\"iokx\" class=\"variable\">{{MODELO}}</div><div id=\"i44n\" class=\"variable\">{{MARCA}}</div><div id=\"iytu\" class=\"variable\">{{DESCMODELO}}</div><div id=\"i439g\" class=\"variable\">{{CILINDRADA}}</div><div id=\"i2bvg\" class=\"variable\">{{AÑO}}</div><div id=\"itd0c\" class=\"variable\">{{PERIODO}}</div><div id=\"igmz4\" class=\"variable\">{{BOLETA}}</div><div id=\"i623s\" class=\"variable\">{{VENCIMIENTO}}</div><div id=\"iwv9m\" class=\"variable\">{{VENCIMIENTO}}</div><div id=\"iuo9w\" class=\"variable\">{{IMPORTE}}</div><div id=\"i96ql\" class=\"variable\">{{codBarras}}</div><div id=\"i5zkf\" class=\"variable\">{{aldia}}</div><img src=\"/imgs-ejemplos/barcode/I25ejemplo.png?content={{EPAGOS_CODIGOBARRAS_1}}&type=I25\" id=\"iq1d7\" class=\"I25barcode\"/><img src=\"https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl={{EPAGOS_QR_1}}&chld=L|0\" class=\"codigoqr\" id=\"iqvlu\"/>",
    "bocetoCSS": "* { box-sizing: border-box; } body {margin: 0;}img{max-width:823px !important;max-height:1344px !important;width:100%;}body{width:823px !important;height:1344px !important;}#i7sq{left:124px;top:383.796875px;position:absolute;width:823px;height:18px;}#izhj{left:106px;top:249.796875px;position:absolute;width:823px;height:18px;}#itxy{left:174px;top:217.796875px;position:absolute;width:823px;height:18px;}#iwo5{left:131px;top:276.796875px;position:absolute;width:823px;height:18px;}#i8sl{left:525px;top:417.796875px;position:absolute;width:823px;height:18px;}#iokx{left:124px;top:435.796875px;position:absolute;width:823px;height:18px;}#i44n{left:287px;top:408.796875px;position:absolute;width:823px;height:18px;}#iytu{left:245px;top:435.796875px;position:absolute;width:823px;height:18px;}#i439g{left:319px;top:383.796875px;position:absolute;width:823px;height:18px;}#i2bvg{left:98px;top:408.796875px;position:absolute;width:823px;height:18px;}#itd0c{left:151px;top:558.796875px;position:absolute;width:823px;height:18px;}#igmz4{left:632px;top:303.796875px;position:absolute;width:823px;height:18px;}#i623s{left:623px;top:235.796875px;position:absolute;width:823px;height:18px;}#iuo9w{left:124px;top:693.796875px;position:absolute;width:823px;height:18px;}#iih5i{left:294px;top:766.796875px;position:absolute;width:823px;height:18px;}#i96ql{left:419px;top:845.796875px;position:absolute;width:823px;height:18px;}#i5zkf{left:434px;top:558.796875px;position:absolute;width:823px;height:18px;}#iwv9m{left:181px;top:605.796875px;position:absolute;width:823px;height:18px;}#iq1d7{position:absolute;width:300px;height:100px;left:449.5px;top:932px;font-size:10px;white-space:nowrap;}#iqvlu{position:absolute;width:100px;height:100px;left:81px;top:932px;font-size:10px;white-space:nowrap;}",
    "bocetoStyle": "[{\"selectors\":[],\"selectorsAdd\":\"img\",\"style\":{\"max-width\":\"823px !important\",\"max-height\":\"1344px !important\",\"width\":\"100%\"}},{\"selectors\":[],\"selectorsAdd\":\"body\",\"style\":{\"width\":\"823px !important\",\"height\":\"1344px !important\"}},{\"selectors\":[\"variable\"]},{\"selectors\":[\"#i7sq\"],\"style\":{\"left\":\"124px\",\"top\":\"383.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#izhj\"],\"style\":{\"left\":\"106px\",\"top\":\"249.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#itxy\"],\"style\":{\"left\":\"174px\",\"top\":\"217.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#iwo5\"],\"style\":{\"left\":\"131px\",\"top\":\"276.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#i8sl\"],\"style\":{\"left\":\"525px\",\"top\":\"417.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#iokx\"],\"style\":{\"left\":\"124px\",\"top\":\"435.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#i44n\"],\"style\":{\"left\":\"287px\",\"top\":\"408.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#iytu\"],\"style\":{\"left\":\"245px\",\"top\":\"435.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#i439g\"],\"style\":{\"left\":\"319px\",\"top\":\"383.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#i2bvg\"],\"style\":{\"left\":\"98px\",\"top\":\"408.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#itd0c\"],\"style\":{\"left\":\"151px\",\"top\":\"558.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#igmz4\"],\"style\":{\"left\":\"632px\",\"top\":\"303.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#i623s\"],\"style\":{\"left\":\"623px\",\"top\":\"235.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#iuo9w\"],\"style\":{\"left\":\"124px\",\"top\":\"693.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#i7ji\"]},{\"selectors\":[\"#iih5i\"],\"style\":{\"left\":\"294px\",\"top\":\"766.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#wrapper\"],\"wrapper\":1},{\"selectors\":[\"#i96ql\"],\"style\":{\"left\":\"419px\",\"top\":\"845.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#i5zkf\"],\"style\":{\"left\":\"434px\",\"top\":\"558.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#iwv9m\"],\"style\":{\"left\":\"181px\",\"top\":\"605.796875px\",\"en\":\"\",\"position\":\"absolute\",\"width\":\"823px\",\"height\":\"18px\"}},{\"selectors\":[\"#iq1d7\"],\"style\":{\"position\":\"absolute\",\"width\":\"300px\",\"height\":\"100px\",\"left\":\"449.5px\",\"top\":\"932px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[\"I25barcode\"]},{\"selectors\":[\"#iqvlu\"],\"style\":{\"position\":\"absolute\",\"width\":\"100px\",\"height\":\"100px\",\"left\":\"81px\",\"top\":\"932px\",\"font-size\":\"10px\",\"white-space\":\"nowrap\",\"en\":\"\"}},{\"selectors\":[\"codigoqr\"]}]",
    "bocetoComponents": "[{\"type\":\"image\",\"attributes\":{\"id\":\"i7ji\",\"src\":\"/bocetos/imagenes/25/V1VWFt8Eps0tIbIG\"},\"activeOnRender\":0},{\"content\":\"{{IMPORTE}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"iih5i\"},\"view\":\"\"},{\"content\":\"{{DOMINIO}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"i7sq\"}},{\"content\":\"{{TITULAR}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"izhj\"}},{\"content\":\"{{DESTINATARIO}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"itxy\"}},{\"content\":\"{{DOMICILIO_DEST}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"iwo5\"}},{\"content\":\"{{TASA}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"i8sl\"}},{\"content\":\"{{MODELO}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"iokx\"}},{\"content\":\"{{MARCA}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"i44n\"}},{\"content\":\"{{DESCMODELO}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"iytu\"}},{\"content\":\"{{CILINDRADA}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"i439g\"}},{\"content\":\"{{AÑO}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"i2bvg\"}},{\"content\":\"{{PERIODO}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"itd0c\"}},{\"content\":\"{{BOLETA}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"igmz4\"}},{\"content\":\"{{VENCIMIENTO}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"i623s\"}},{\"content\":\"{{VENCIMIENTO}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"iwv9m\"},\"view\":\"\"},{\"content\":\"{{IMPORTE}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"iuo9w\"}},{\"content\":\"{{codBarras}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"i96ql\"}},{\"content\":\"{{aldia}}\",\"classes\":[\"variable\"],\"attributes\":{\"id\":\"i5zkf\"}},{\"tagName\":\"img\",\"void\":true,\"classes\":[\"I25barcode\"],\"attributes\":{\"src\":\"/imgs-ejemplos/barcode/I25ejemplo.png?content={{EPAGOS_CODIGOBARRAS_1}}&type=I25\",\"id\":\"iq1d7\"}},{\"tagName\":\"img\",\"void\":true,\"classes\":[\"codigoqr\"],\"attributes\":{\"src\":\"https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl={{EPAGOS_QR_1}}&chld=L|0\",\"id\":\"iqvlu\"}}]",
    "bocetoAssets": "[{\"type\":\"image\",\"src\":\"/bocetos/imagenes/25/V1VWFt8Eps0tIbIG\",\"unitDim\":\"px\",\"height\":0,\"width\":0}]",
    "bocetoCreador": 5,
    "bocetoEliminado": null
    }
]
const camposEpagos = [
    {
      pcaID: 10,
      camID: 1,
      pcaDescripcion: 'fdsfdsjkdfksjfd',
      camNombre: 'impPrimerClave',
      camTipo: 'VARCHAR',
      camDescripcion: 'Valor Clave',
      camObligatorio: 'C'
    },
    {
      pcaID: 11,
      camID: 3,
      pcaDescripcion: 'fdsfds',
      camNombre: 'impCuota',
      camTipo: 'INTEGER',
      camDescripcion: 'Cuota',
      camObligatorio: 'N'
    },
    {
      pcaID: 12,
      camID: 8,
      pcaDescripcion: 'fdsfdsfdsfd',
      camNombre: 'impCalle',
      camTipo: 'BOOLEAN',
      camDescripcion: 'Calle',
      camObligatorio: 'C'
    },
    {
      pcaID: 104,
      camID: 2,
      pcaDescripcion: 'asdfjhklhjklasdf',
      camNombre: 'impSegundaClave',
      camTipo: 'VARCHAR',
      camDescripcion: 'Segunda Clave',
      camObligatorio: 'C'
    },
    {
      pcaID: 105,
      camID: 19,
      pcaDescripcion: 'cbbcdkja',
      camNombre: 'impEmail',
      camTipo: 'VARCHAR',
      camDescripcion: 'Email',
      camObligatorio: 'N'
    }
]
const opcionesEpagos = [
    {
      pcaID: 13,
      plaID: 82,
      camID: 26,
      ccaID: null,
      pcaPosicion: 0,
      pcaDescripcion: 'NOMBRE',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 14,
      plaID: 82,
      camID: 27,
      ccaID: null,
      pcaPosicion: 1,
      pcaDescripcion: 'DOMICILIO',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 15,
      plaID: 82,
      camID: 28,
      ccaID: null,
      pcaPosicion: 2,
      pcaDescripcion: 'LOCALIDAD',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 16,
      plaID: 82,
      camID: 29,
      ccaID: null,
      pcaPosicion: 3,
      pcaDescripcion: 'CODIGO POSTAL',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 17,
      plaID: 82,
      camID: 30,
      ccaID: null,
      pcaPosicion: 4,
      pcaDescripcion: 'CIRCUNSCRIPCION',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 18,
      plaID: 82,
      camID: 31,
      ccaID: null,
      pcaPosicion: 5,
      pcaDescripcion: 'SECCION',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 19,
      plaID: 82,
      camID: 32,
      ccaID: null,
      pcaPosicion: 6,
      pcaDescripcion: 'CODIGO',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 20,
      plaID: 82,
      camID: 33,
      ccaID: null,
      pcaPosicion: 7,
      pcaDescripcion: 'MANZANA',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 21,
      plaID: 82,
      camID: 34,
      ccaID: null,
      pcaPosicion: 8,
      pcaDescripcion: 'PARCELA',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 22,
      plaID: 82,
      camID: 35,
      ccaID: null,
      pcaPosicion: 9,
      pcaDescripcion: 'SUBPARCELA',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 23,
      plaID: 82,
      camID: 36,
      ccaID: null,
      pcaPosicion: 10,
      pcaDescripcion: 'ZONIFICACION',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 24,
      plaID: 82,
      camID: 37,
      ccaID: null,
      pcaPosicion: 11,
      pcaDescripcion: 'PARTIDA',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 25,
      plaID: 82,
      camID: 38,
      ccaID: null,
      pcaPosicion: 12,
      pcaDescripcion: 'NRO CONTRIBUYENTE',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 26,
      plaID: 82,
      camID: 39,
      ccaID: null,
      pcaPosicion: 13,
      pcaDescripcion: 'TIPO EDIFICACION',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 27,
      plaID: 82,
      camID: 40,
      ccaID: null,
      pcaPosicion: 14,
      pcaDescripcion: 'CUADERNILLO',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 28,
      plaID: 82,
      camID: 41,
      ccaID: null,
      pcaPosicion: 15,
      pcaDescripcion: 'PERIODO',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 29,
      plaID: 82,
      camID: 42,
      ccaID: null,
      pcaPosicion: 16,
      pcaDescripcion: 'TIPO COMPROBANTE',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 30,
      plaID: 82,
      camID: 43,
      ccaID: null,
      pcaPosicion: 17,
      pcaDescripcion: 'NRO COMPROBANTE',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 31,
      plaID: 82,
      camID: 44,
      ccaID: null,
      pcaPosicion: 18,
      pcaDescripcion: 'FECHA 1ER VENC',
      ifdID: 2,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 32,
      plaID: 82,
      camID: 45,
      ccaID: null,
      pcaPosicion: 19,
      pcaDescripcion: 'IMPORTE 1ER VENC',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    },
    {
      pcaID: 33,
      plaID: 82,
      camID: 46,
      ccaID: null,
      pcaPosicion: 20,
      pcaDescripcion: 'vacio',
      ifdID: null,
      pcaLongitud: null,
      pcaEstado: 'ACTIVO',
      pcaRelacionCuota: 'N',
      pcaCuotaAdicionalPDF: 'N',
      selected: false
    }
]
let defaultState = {
    loading: true,
    organismos,
    comprobantes,
    importaciones,
    bocetos,
    camposEpagos,
    opcionesEpagos,
    arrayCorrespondencia: [],
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_DATOS_PASO_1:
            return {
                ...state,
                organismos: action.payload.organismos.filter(item => item.orgEstado==='A'),
                comprobantes: action.payload.comprobantes.filter(item => item.comEstado==='A'),
                importaciones: action.payload.importacion,
                bocetos: action.payload.bocetos,
            }
        case SET_CAMPOS_EPAGOS:
            return {
                ...state,
                camposEpagos: action.payload,
                arrayCorrespondencia: action.payload.map(obj => ({camID: obj.camID, value: ''}))
            }
        case SET_OPCIONES_EPAGOS:
            return {
                ...state,
                opcionesEpagos: action.payload.map(obj => ({ ...obj, selected: false })),
            }
        case TOOGLE_SELECTED_OPCION_EPAGOS:
            const copiaOpcionesEpagos = [...state.opcionesEpagos]
            // const toogleOption =  copiaOpcionesEpagos.map(obj => obj.pcaID===action.payload ? ({ ...obj, selected: true }) : ({ ...obj }))
            const toogleOption =  copiaOpcionesEpagos.map(obj => obj.pcaID===action.payload ? ({ ...obj, selected: !obj.selected }) : ({ ...obj }))
            return {
                ...state,
                opcionesEpagos: toogleOption
            }
        case SET_ARRAY_CORRESPONDENCIA:
            const { camID, value } = action.payload
            const arrayCorrespondencia = state.arrayCorrespondencia.map( obj => (obj.camID===camID ? { ...obj, value } : { ...obj }))
            return {
                ...state,
                arrayCorrespondencia
            }
        case SEARCH_IN_CORRESPONDENCIA:
            const copyArrayCorrespondencia = [...state.arrayCorrespondencia]
            const copyOpcionesEpagos = [...state.opcionesEpagos]
            let ad
            const copiaArrayCorrespondencia = copyArrayCorrespondencia.map(obj => {
                if(obj.camID===action.payload) {
                    ad = obj.value
                    return { ...obj, value: ''}
                } else {
                    return { ...obj }
                }
            })

            const toOpt =  copyOpcionesEpagos.map(obj => obj.pcaID===ad ? ({ ...obj, selected: false }) : ({ ...obj }))
            return {
                ...state,
                arrayCorrespondencia: copiaArrayCorrespondencia,
                opcionesEpagos: toOpt,
            }
        default:
            return defaultState
    }
}