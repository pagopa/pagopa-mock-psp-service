/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { stText35_type_pafn } from "./stText35_type_pafn";
import { ctQrCode_type_pafn } from "./ctQrCode_type_pafn";
import * as t from "io-ts";

/**
 * The `paVerifyPaymentNotice` request contains :
 * - `idPA` : alphanumeric field containing the tax code of the structure sending the payment request.
 * - `idBrokerPA` : identification of subject that operates as an intermediary for the PA.
 * - `idStation` : identification of the station of the PA into pagoPa system.
 * - `qrCode` : is the union of `fiscalCode` and `noticeNumber`
 */

// required attributes
const paVerifyPaymentNoticeReq_element_pafnR = t.interface({
  idPA: stText35_type_pafn,

  idBrokerPA: stText35_type_pafn,

  idStation: stText35_type_pafn,

  qrCode: ctQrCode_type_pafn
});

// optional attributes
const paVerifyPaymentNoticeReq_element_pafnO = t.partial({});

export const paVerifyPaymentNoticeReq_element_pafn = t.intersection(
  [
    paVerifyPaymentNoticeReq_element_pafnR,
    paVerifyPaymentNoticeReq_element_pafnO
  ],
  "paVerifyPaymentNoticeReq_element_pafn"
);

export type paVerifyPaymentNoticeReq_element_pafn = t.TypeOf<
  typeof paVerifyPaymentNoticeReq_element_pafn
>;
