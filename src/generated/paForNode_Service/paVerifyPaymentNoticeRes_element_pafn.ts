/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import * as t from "io-ts";
import { ctResponse_type_pafn } from "./ctResponse_type_pafn";
import { ctPaymentOptionsDescriptionListPA_type_pafn } from "./ctPaymentOptionsDescriptionListPA_type_pafn";
import { stText140_type_pafn } from "./stText140_type_pafn";
import { stFiscalCodePA_type_pafn } from "./stFiscalCodePA_type_pafn";

/**
 * Its a response to `paVerifyPaymentNoticeReq` and contains :
 *
 * - `outcome` and _optional_ `fault` (_see below to details_)
 * - `paymentList` : the list of all available payment options (_see below to details_)
 * - `paymentDescription` :
 *
 * If the Public Administration is configured as _OLD_ (i.e. still uses the old primitives) this field must be set with the data `nodeTipoDatiPagamentoPA` of the` nodeVerificaRPTRanspond` specifically:
 * - `causaleVersamento`: represents the extended description of the reason for the payment, or
 * - `spezzoniCausaleVersamento`: structure available to Public Administration to specify the payment reasons.
 *
 * The size of the current field is such as to allow the concatenation of the old information previously described.
 *
 * - `fiscalCodePA` : Tax code of the public administration
 * - `companyName` : Public Administration full name
 * - `officeName` : Public Administration Department Name
 */

// required attributes
const paVerifyPaymentNoticeRes_element_pafn2R = t.interface({});

// optional attributes
const paVerifyPaymentNoticeRes_element_pafn2O = t.partial({
  paymentList: ctPaymentOptionsDescriptionListPA_type_pafn,

  paymentDescription: stText140_type_pafn,

  fiscalCodePA: stFiscalCodePA_type_pafn,

  companyName: stText140_type_pafn,

  officeName: stText140_type_pafn
});

export const paVerifyPaymentNoticeRes_element_pafn2 = t.intersection(
  [
    paVerifyPaymentNoticeRes_element_pafn2R,
    paVerifyPaymentNoticeRes_element_pafn2O
  ],
  "paVerifyPaymentNoticeRes_element_pafn2"
);

export type paVerifyPaymentNoticeRes_element_pafn2 = t.TypeOf<
  typeof paVerifyPaymentNoticeRes_element_pafn2
>;

export const paVerifyPaymentNoticeRes_element_pafn = t.intersection(
  [ctResponse_type_pafn, paVerifyPaymentNoticeRes_element_pafn2],
  "paVerifyPaymentNoticeRes_element_pafn"
);

export type paVerifyPaymentNoticeRes_element_pafn = t.TypeOf<
  typeof paVerifyPaymentNoticeRes_element_pafn
>;