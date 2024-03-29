/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { Security } from "./Security";
import * as t from "io-ts";

/**
 * Input headers for wsdl operation paVerifyPaymentNoticeReq
 */

// required attributes
const paVerifyPaymentNoticeHeaderR = t.interface({});

// optional attributes
const paVerifyPaymentNoticeHeaderO = t.partial({
  Security: Security
});

export const paVerifyPaymentNoticeHeader = t.intersection(
  [paVerifyPaymentNoticeHeaderR, paVerifyPaymentNoticeHeaderO],
  "paVerifyPaymentNoticeHeader"
);

export type paVerifyPaymentNoticeHeader = t.TypeOf<
  typeof paVerifyPaymentNoticeHeader
>;
