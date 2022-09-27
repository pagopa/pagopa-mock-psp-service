/* eslint-disable sonarjs/cognitive-complexity */
import * as express from 'express';
import * as bodyParserXml from 'express-xml-bodyparser';
import * as morgan from 'morgan';
import * as xml2js from 'xml2js';

import bodyParser = require('body-parser');

import { Configuration } from './config';

import {
  pspNotifyPaymentRes,
  pspInviaRPTRes,
  pspInviaCarrelloRPTCarteRes,
  pspInviaCarrelloRPTRes,
  pspInviaAckRTRes,
  pspChiediRTRes,
  pspChiediListaRTRes,
  pspChiediAvanzamentoRPTRes
} from './fixtures/mockPSP';

import { requireClientCertificateFingerprint } from './middlewares/requireClientCertificateFingerprint';
import {
  POSITIONS_STATUS,
} from './utils/helper';
import { logger, log_event_tx } from './utils/logger';


//mock-psp
const pspNotifyPaymentQueue = new Array<string>();
const pspInviaRPTQueue = new Array<string>();
const pspInviaCarrelloRPTCarteQueue = new Array<string>();
const pspInviaCarrelloRPTQueue = new Array<string>();
const pspInviaAckRTQueue = new Array<string>();
const pspChiediRTQueue = new Array<string>();
const pspChiediListaRTQueue = new Array<string>();
const pspChiediAvanzamentoRPTQueue = new Array<string>();
//-------
const pspnotifypaymentreq = 'pspfn:pspnotifypaymentreq';
const pspinviarptreq ='ppt:pspinviarpt';
const pspinviacarrellorptcartereq='ppt:pspinviacarrellorptcarte';
const pspinviacerrellorptreq='ppt:pspinviacarrellorpt';
const pspinviaackrtreq='ppt:pspinviaackrt';
const pspchiedirtreq='ppt:pspchiedirt';
const pspchiedilistartreq='ppt:pspchiedilistart';
const pspchiediavanzamentorptreq='ppt:pspchiediavanzamentorpt';

// tslint:disable-next-line: no-big-function
export async function newExpressApp(
  config: Configuration,
  db: Map<string, POSITIONS_STATUS>,
  dbAmounts: Map<string, number>,
  noticenumberRequests: Map<string, JSON>,
  noticenumberResponses: Map<string, JSON>,
): Promise<Express.Application> {
  // config params...
  const testDebug = config.PA_MOCK.TEST_DEBUG;

  // app
  const app = express();
  app.set('port', config.PA_MOCK.PORT);
  const loggerFormat = ':date[iso] [info]: :method :url :status - :response-time ms';
  app.use(morgan(loggerFormat));

  const clientCertificateFingerprint = config.PA_MOCK.CLIENT_CERTIFICATE_FINGERPRINT;
  // Verify client certificate fingerprint if required
  if (clientCertificateFingerprint !== undefined) {
    app.use(requireClientCertificateFingerprint(clientCertificateFingerprint));
  }

  /* tslint:disable:immutable-data */
  app.use(bodyParser.json({ verify: (req, res, buf) => (req.rawBody = buf) }));

  app.use(express.json());
  app.use(express.urlencoded());
  app.use(bodyParserXml({}));

  logger.info(`Path ${config.PA_MOCK.ROUTES.PPT_NODO} ...`);

  // health check
  app.get(`${config.PA_MOCK.ROUTES.PPT_NODO}/info`, async (_, res) => res.status(200).send({ status: 'iamalive' }));

  // return history of requests and responses
  app.get(`${config.PA_MOCK.ROUTES.PPT_NODO}/history/:noticenumber/:primitive`, async (req, res) => {
    const savedReq = noticenumberRequests.get(`${req.params.noticenumber}_${req.params.primitive}`);
    const savedRes = noticenumberResponses.get(`${req.params.noticenumber}_${req.params.primitive}`);

    if (testDebug.toUpperCase() === 'Y' && savedReq !== undefined && savedRes !== undefined) {
      res.status(200).send({
        request: savedReq,
        response: savedRes,
      });
    } else {
      res.status(500).send({ details: 'History not enabled' });
    }
  });

  // save custom response
  app.post(`${config.PA_MOCK.ROUTES.PPT_NODO}/response/:primitive`, async (req, res) => {
     if (req.params.primitive === 'pspNotifyPayment') {
      if (String(req.query.override).toLowerCase() === 'true') {
        pspNotifyPaymentQueue.pop();
        pspNotifyPaymentQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} updated`);
      } else {
        pspNotifyPaymentQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} saved. ${pspNotifyPaymentQueue.length} pushed`);
      }
    } else if (req.params.primitive === 'pspChiediAvanzamentoRPT') {
      if (String(req.query.override).toLowerCase() === 'true') {
        pspChiediAvanzamentoRPTQueue.pop();
        pspChiediAvanzamentoRPTQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} updated`);
      } else {
        pspChiediAvanzamentoRPTQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} saved. ${pspChiediAvanzamentoRPTQueue.length} pushed`);
      }
    } else if (req.params.primitive === 'pspChiediListaRT') {
      if (String(req.query.override).toLowerCase() === 'true') {
        pspChiediListaRTQueue.pop();
        pspChiediListaRTQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} updated`);
      } else {
        pspChiediListaRTQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} saved. ${pspChiediListaRTQueue.length} pushed`);
      }
    } else if (req.params.primitive === 'pspChiediRT') {
      if (String(req.query.override).toLowerCase() === 'true') {
        pspChiediRTQueue.pop();
        pspChiediRTQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} updated`);
      } else {
        pspChiediRTQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} saved. ${pspChiediRTQueue.length} pushed`);
      }
    } else if (req.params.primitive === 'pspInviaAckRT') {
      if (String(req.query.override).toLowerCase() === 'true') {
        pspInviaAckRTQueue.pop();
        pspInviaAckRTQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} updated`);
      } else {
        pspInviaAckRTQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} saved. ${pspInviaAckRTQueue.length} pushed`);
      }
    } else if (req.params.primitive === 'pspInviaCarrelloRPT') {
      if (String(req.query.override).toLowerCase() === 'true') {
        pspInviaCarrelloRPTQueue.pop();
        pspInviaCarrelloRPTQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} updated`);
      } else {
        pspInviaCarrelloRPTQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} saved. ${pspInviaCarrelloRPTQueue.length} pushed`);
      }
    } else if (req.params.primitive === 'pspInviaCarrelloRPTCarte') {
      if (String(req.query.override).toLowerCase() === 'true') {
        pspInviaCarrelloRPTCarteQueue.pop();
        pspInviaCarrelloRPTCarteQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} updated`);
      } else {
        pspInviaCarrelloRPTCarteQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} saved. ${pspInviaCarrelloRPTCarteQueue.length} pushed`);
      }
    } else if (req.params.primitive === 'pspInviaRPT') {
      if (String(req.query.override).toLowerCase() === 'true') {
        pspInviaRPTQueue.pop();
        pspInviaRPTQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} updated`);
      } else {
        pspInviaRPTQueue.push(req.rawBody);
        res.status(200).send(`${req.params.primitive} saved. ${pspInviaRPTQueue.length} pushed`);
      }
    } else {
      res.status(400).send(`unknown ${req.params.primitive} error on saved.`);
    }
  });

  function ritorno(res: any, customResponse: string | undefined ){
    return res.status(customResponse && customResponse.trim() === '<response>error</response>' ? 500 : 200)
    .send(customResponse);
  }

  // SOAP Server mock entrypoint
  // eslint-disable-next-line complexity
  // eslint-disable-next-line sonarjs/cognitive-complexity, complexity
  app.post(config.PA_MOCK.ROUTES.PPT_NODO, async (req, res) => {
    logger.info(`>>> rx REQUEST :`);
    logger.info(JSON.stringify(req.body));
    const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));
    try {
      const soapRequest = req.body['soapenv:envelope']['soapenv:body'][0];
      // 1. pspNotifyPayment
      if (soapRequest[pspnotifypaymentreq]) {
        if (pspNotifyPaymentQueue.length > 0) {
          const customResponse = pspNotifyPaymentQueue.shift();
          logger.info(`>>> tx customResponse RESPONSE [${customResponse}]: `);
          if (customResponse !== undefined) {         
            let convert = await xml2js.parseStringPromise(customResponse);
            let delay = convert['soapenv:Envelope']['soapenv:Body'][0]['psp:pspNotifyPaymentRes'][0].delay;
            let irraggiungibile = convert['soapenv:Envelope']['soapenv:Body'][0]['psp:pspNotifyPaymentRes'][0].irraggiungibile;
              if(irraggiungibile) {
                throw new TypeError("irraggiungibile");
              }
            if (delay) {
              logger.info('>>> start timeout')
              delete convert['soapenv:Envelope']['soapenv:Body'][0]['psp:pspNotifyPaymentRes'][0].delay;
              const builder = new xml2js.Builder();
              const xml = builder.buildObject(convert);
              var delay_numb: number = +delay[0];
              logger.info(delay_numb);
              await sleep(delay_numb);
              return ritorno(res,xml);
            } else {
              return ritorno(res, customResponse);
            }
          }
        }
        const pspnotifypayment = soapRequest[pspnotifypaymentreq][0];
        const auxdigit = config.PA_MOCK.AUX_DIGIT;
        const noticenumber: string = `${auxdigit}${pspnotifypayment.creditorreferenceid}`;

        if (testDebug.toUpperCase() === 'Y') {
          noticenumberRequests.set(`${noticenumber}_pspNotifyPayment`, req.body);
        }

        if (testDebug.toUpperCase() === 'Y') {
          xml2js.parseString(pspNotifyPaymentRes[1], (err, result) => {
            if (err) {
              throw err;
            }
            noticenumberResponses.set(`${noticenumber}_pspNotifyPayment`, result);
          });
        }
        log_event_tx(pspNotifyPaymentRes);
        return res.status(+pspNotifyPaymentRes[0]).send(pspNotifyPaymentRes[1]);
      }

      // 2. pspinviarpt
      if (soapRequest[pspinviarptreq]) {
        if (pspInviaRPTQueue.length > 0) {
          const customResponse = pspInviaRPTQueue.shift();
          logger.info(`>>> tx customResponse RESPONSE [${customResponse}]: `);
          if (customResponse !== undefined) {         
            let convert = await xml2js.parseStringPromise(customResponse);
            let delay = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspInviaRPTResponse'][0]['pspInviaRPTResponse'][0].delay;
            let irraggiungibile = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspInviaRPTResponse'][0]['pspInviaRPTResponse'][0].irraggiungibile;
              if(irraggiungibile) {
                throw new TypeError("irraggiungibile");
              }
            if (delay) {
              logger.info('>>> start timeout')
              delete convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspInviaRPTResponse'][0]['pspInviaRPTResponse'][0].delay;
              const builder = new xml2js.Builder();
              const xml = builder.buildObject(convert);
              var delay_numb: number = +delay[0];
              logger.info(delay_numb);
              await sleep(delay_numb);
              return ritorno(res,xml);
            } else {
              return ritorno(res, customResponse);
            }
          }
        }
        log_event_tx(pspInviaRPTRes);
        return res.status(+pspInviaRPTRes[0]).send(pspInviaRPTRes[1]);
      }

      // 3. pspInviaCarrelloRPTCarte
      if (soapRequest[pspinviacarrellorptcartereq]) {
        if (pspInviaCarrelloRPTCarteQueue.length > 0) {
          const customResponse = pspInviaCarrelloRPTCarteQueue.shift();
          logger.info(`>>> tx customResponse RESPONSE [${customResponse}]: `);
          if (customResponse !== undefined) {         
            let convert = await xml2js.parseStringPromise(customResponse);
            let delay = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspInviaCarrelloRPTCarteResponse'][0]['pspInviaCarrelloRPTCarteResponse'][0].delay;
            let irraggiungibile = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspInviaCarrelloRPTCarteResponse'][0]['pspInviaCarrelloRPTCarteResponse'][0].irraggiungibile;
              if(irraggiungibile) {
                throw new TypeError("irraggiungibile");
              }
            if (delay) {
              logger.info('>>> start timeout')
              delete convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspInviaCarrelloRPTCarteResponse'][0]['pspInviaCarrelloRPTCarteResponse'][0].delay;
              const builder = new xml2js.Builder();
              const xml = builder.buildObject(convert);
              var delay_numb: number = +delay[0];
              logger.info(delay_numb);
              await sleep(delay_numb);
              return ritorno(res,xml);
            } else {
              return ritorno(res, customResponse);
            }
          }
        }
        log_event_tx(pspInviaCarrelloRPTCarteRes);
        return res.status(+pspInviaCarrelloRPTCarteRes[0]).send(pspInviaCarrelloRPTCarteRes[1]);
      }

      // 4. pspinviacerrellorpt
      if (soapRequest[pspinviacerrellorptreq]) {
        if (pspInviaCarrelloRPTQueue.length > 0) {
          const customResponse = pspInviaCarrelloRPTQueue.shift();
          logger.info(`>>> tx customResponse RESPONSE [${customResponse}]: `);
          if (customResponse !== undefined) {         
            let convert = await xml2js.parseStringPromise(customResponse);
            let delay = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspInviaCarrelloRPTResponse'][0]['pspInviaCarrelloRPTResponse'][0].delay;
            let irraggiungibile = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspInviaCarrelloRPTResponse'][0]['pspInviaCarrelloRPTResponse'][0].irraggiungibile;
              if(irraggiungibile) {
                throw new TypeError("irraggiungibile");
              }
            if (delay) {
              logger.info('>>> start timeout')
              delete convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspInviaCarrelloRPTResponse'][0]['pspInviaCarrelloRPTResponse'][0].delay;
              const builder = new xml2js.Builder();
              const xml = builder.buildObject(convert);
              var delay_numb: number = +delay[0];
              logger.info(delay_numb);
              await sleep(delay_numb);
              return ritorno(res,xml);
            } else {
              return ritorno(res, customResponse);
            }
          }
        }
        log_event_tx(pspInviaCarrelloRPTRes);
        return res.status(+pspInviaCarrelloRPTRes[0]).send(pspInviaCarrelloRPTRes[1]);
      }

      // 5. pspInviaAckRT
      if (soapRequest[pspinviaackrtreq]) {
        if (pspInviaAckRTQueue.length > 0) {
          const customResponse = pspInviaAckRTQueue.shift();
          logger.info(`>>> tx customResponse RESPONSE [${customResponse}]: `);
          if (customResponse !== undefined) {         
            let convert = await xml2js.parseStringPromise(customResponse);
            let delay = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspInviaAckRTResponse'][0]['pspInviaAckRTResponse'][0].delay;
            let irraggiungibile = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspInviaAckRTResponse'][0]['pspInviaAckRTResponse'][0].irraggiungibile;
              if(irraggiungibile) {
                throw new TypeError("irraggiungibile");
              }
            if (delay) {
              logger.info('>>> start timeout')
              delete convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspInviaAckRTResponse'][0]['pspInviaAckRTResponse'][0].delay;
              const builder = new xml2js.Builder();
              const xml = builder.buildObject(convert);
              var delay_numb: number = +delay[0];
              logger.info(delay_numb);
              await sleep(delay_numb);
              return ritorno(res,xml);
            } else {
              return ritorno(res, customResponse);
            }
          }
        }
        log_event_tx(pspInviaAckRTRes);
        return res.status(+pspInviaAckRTRes[0]).send(pspInviaAckRTRes[1]);
      }

      // 6. pspChiediRT
      if (soapRequest[pspchiedirtreq]) {
        if (pspChiediRTQueue.length > 0) {
          const customResponse = pspChiediRTQueue.shift();
          logger.info(`>>> tx customResponse RESPONSE [${customResponse}]: `);
          if (customResponse !== undefined) {         
            let convert = await xml2js.parseStringPromise(customResponse);
            let delay = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspChiediRTResponse'][0]['pspChiediRTResponse'][0].delay;
            let irraggiungibile = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspChiediRTResponse'][0]['pspChiediRTResponse'][0].irraggiungibile;
              if(irraggiungibile) {
                throw new TypeError("irraggiungibile");
              }
            if (delay) {
              logger.info('>>> start timeout')
              delete convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspChiediRTResponse'][0]['pspChiediRTResponse'][0].delay;
              const builder = new xml2js.Builder();
              const xml = builder.buildObject(convert);
              var delay_numb: number = +delay[0];
              logger.info(delay_numb);
              await sleep(delay_numb);
              return ritorno(res,xml);
            } else {
              return ritorno(res, customResponse);
            }
          }
        }
        log_event_tx(pspChiediRTRes);
        return res.status(+pspChiediRTRes[0]).send(pspChiediRTRes[1]);
      }

      // 7. pspChiediListaRT
      if (soapRequest[pspchiedilistartreq]) {
        if (pspChiediListaRTQueue.length > 0) {
          const customResponse = pspChiediListaRTQueue.shift();
          logger.info(`>>> tx customResponse RESPONSE [${customResponse}]: `);
          if (customResponse !== undefined) {         
            let convert = await xml2js.parseStringPromise(customResponse);
            let delay = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspChiediListaRTResponse'][0]['pspChiediListaRTResponse'][0].delay;
            let irraggiungibile = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspChiediListaRTResponse'][0]['pspChiediListaRTResponse'][0].irraggiungibile;
              if(irraggiungibile) {
                throw new TypeError("irraggiungibile");
              }
            delete convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspChiediListaRTResponse'][0]['pspChiediListaRTResponse'][0].delay;
            if (delay) {
              logger.info('>>> start timeout')
              const builder = new xml2js.Builder();
              const xml = builder.buildObject(convert);
              var delay_numb: number = +delay[0];
              logger.info(delay_numb);
              await sleep(delay_numb);
              return ritorno(res,xml);
            } else {
              return ritorno(res, customResponse);
            }
          }
        }
        log_event_tx(pspChiediListaRTRes);
        return res.status(+pspChiediListaRTRes[0]).send(pspChiediListaRTRes[1]);
      }

      // 8. pspChiediAvanzamentoRPT
      if (soapRequest[pspchiediavanzamentorptreq]) {
        if (pspChiediAvanzamentoRPTQueue.length > 0) {
          const customResponse = pspChiediAvanzamentoRPTQueue.shift();
          logger.info(`>>> tx customResponse RESPONSE [${customResponse}]: `);
          if (customResponse !== undefined) {         
            let convert = await xml2js.parseStringPromise(customResponse);
            let delay = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspChiediAvanzamentoRPTResponse'][0]['pspChiediAvanzamentoRPTResponse'][0].delay;
            let irraggiungibile = convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspChiediAvanzamentoRPTResponse'][0]['pspChiediAvanzamentoRPTResponse'][0].irraggiungibile;
              if(irraggiungibile) {
                throw new TypeError("irraggiungibile");
              }
            if (delay) {
              logger.info('>>> start timeout')
              delete convert['soapenv:Envelope']['soapenv:Body'][0]['ws:pspChiediAvanzamentoRPTResponse'][0]['pspChiediAvanzamentoRPTResponse'][0].delay;
              const builder = new xml2js.Builder();
              const xml = builder.buildObject(convert);
              var delay_numb: number = +delay[0];
              logger.info(delay_numb);
              await sleep(delay_numb);
              return ritorno(res,xml);
            } else {
              return ritorno(res, customResponse);
            }
          }
        }
        log_event_tx(pspChiediAvanzamentoRPTRes);
        return res.status(+pspChiediAvanzamentoRPTRes[0]).send(pspChiediAvanzamentoRPTRes[1]);
      }


      if (
        !(
          soapRequest[pspnotifypaymentreq] ||
          soapRequest[pspinviarptreq] ||
          soapRequest[pspinviacarrellorptcartereq] ||
          soapRequest[pspinviacerrellorptreq] ||
          soapRequest[pspinviaackrtreq] ||
          soapRequest[pspchiedirtreq] ||
          soapRequest[pspchiedilistartreq] ||
          soapRequest[pspchiediavanzamentorptreq]
        )
      ) {
        // The SOAP Request not implemented
        logger.info(`The SOAP Request ${JSON.stringify(soapRequest)} not implemented`);
        res.status(404).send('Not found');
      }
      // tslint:disable-next-line: prettier
    } catch (error) {
      // The SOAP Request isnt' correct
      logger.info(`The SOAP Request isnt' correct`);
      res.status(500).send('Internal Server Error :( ');
    }
    // tslint:disable-next-line: no-empty
  });
  return app;
}
