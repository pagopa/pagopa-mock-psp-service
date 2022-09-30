/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import * as t from "io-ts";

/**
 * ### Generic Errors
 *
 * **PPT_SINTASSI_EXTRAXSD** : _Generic error related to any WSDL/XSD syntax error. It can be returned from any message_
 *
 * **PPT_STAZIONE_INT_PA_ERRORE_RESPONSE** : _Generic error related to any PA error. It can be returned from verifyPaymentNotice and ActivatePaymentNotice messages_
 *
 * **PPT_STAZIONE_INT_PA_DISABILITATA** : _PA configuration error. It can be returned from VerifyPaymentNotice and ActivatePaymentNotice messages_
 *
 * **PPT_STAZIONE_INT_PA_IRRAGGIUNGIBILE** : _PA configuration error. It can be returned from VerifyPaymentNotice and ActivatePaymentNotice messages_
 *
 * **PPT_INTERMEDIARIO_PA_DISABILITATO** : _PA configuration error. It can be returned from VerifyPaymentNotice and ActivatePaymentNotice messages_
 *
 * **PPT_STAZIONE_INT_PA_TIMEOUT** : _PA information is not available, the operation can not be authorized. It can be returned from VerifyPaymentNotice and ActivatePaymentNotice messages_
 *
 * ### Authentication Errors
 *
 * **PPT_PSP_SCONOSCIUTO** : _Authentication Error. It can be returned from any messages_
 *
 * **PPT_PSP_DISABILITATO** : _Authentication Error. It can be returned from any messages_
 *
 * **PPT_INTERMEDIARIO_PSP_SCONOSCIUTO** : _Authentication Error. It can be returned from any messages_
 *
 * **PPT_INTERMEDIARIO_PSP_DISABILITATO** : _Authentication Error. It can be returned from any messages_
 *
 * **PPT_CANALE_SCONOSCIUTO** : _Authentication Error. It can be returned from any messages_
 *
 * **PPT_CANALE_DISABILITATO** : _Authentication Error. It can be returned from any messages_
 *
 * **PPT_AUTORIZZAZIONE** : _Authentication Error. It can be returned from any messages_
 *
 * ### Request Errors
 *
 * **PPT_DOMINIO_SCONOSCIUTO** : _Request Error. Unknown PA fiscal code. It can be returned from VerifyPaymentNotice and ActivatePaymentNotice messages_
 *
 * **PPT_DOMINIO_DISABILITATO** : _Request Error. Unknown PA fiscal code. It can be returned from VerifyPaymentNotice and ActivatePaymentNotice messages_
 *
 * **PPT_INT_PA_SCONOSCIUTA** :  _Notice Number Error. It can be returned from VerifyPaymentNotice messages_
 *
 * ### Business Errors
 *
 * **PPT_ERRORE_EMESSO_DA_PAA** : _Operation not authorized. It can be returned from VerifyPaymentNotice and ActivatePaymentNotice messages_
 *
 * **PPT_SEMANTICA** : _Idempotency key expired. It can be returned from  ActivatePaymentNotice messages; The same fault code can be related to an integration error._
 *
 * **PPT_PAGAMENTO_IN_CORSO** : _Payment in process, the operation can not be authorized. It can be returned from  ActivatePaymentNotice messages:
 *
 * **PPT_TOKEN_SCONOSCIUTO** : _Unknown Payment Token, the operation can not be authorized. It can be returned from  SendPaymentOutcome messages_
 *
 * **PPT_ESITO_GIA_ACQUISITO** : _Idempotency Error, the same request has been already processed with different params. It can be returned from  SendPaymentOutcome messages_
 *
 * **PPT_TOKEN_SCADUTO** : _Expired payment token, the position debt is still payable. The operation can not be authorized. It can be returned from  SendPaymentOutcome messages_
 *
 * **PPT_PAGAMENTO_DUPLICATO** : _Expired payment token, the position debt has benn already payed. The operation can not be authorized. It can be returned from  SendPaymentOutcome messages_
 */

export type stFaultCode_type_pafn = t.TypeOf<typeof stFaultCode_type_pafn>;
export const stFaultCode_type_pafn = t.string;
