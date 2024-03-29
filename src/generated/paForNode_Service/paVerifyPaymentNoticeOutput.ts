/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import * as t from "io-ts";
import { paVerifyPaymentNoticeRes_element_pafn } from "./paVerifyPaymentNoticeRes_element_pafn";

/**
 * Output message for wsdl operation paVerifyPaymentNoticeReq
 */

// required attributes
const paVerifyPaymentNoticeOutputEnvelopeBodyR = t.interface({});

// optional attributes
const paVerifyPaymentNoticeOutputEnvelopeBodyO = t.partial({
  paVerifyPaymentNoticeRes: paVerifyPaymentNoticeRes_element_pafn
});

export const paVerifyPaymentNoticeOutputEnvelopeBody = t.intersection(
  [
    paVerifyPaymentNoticeOutputEnvelopeBodyR,
    paVerifyPaymentNoticeOutputEnvelopeBodyO
  ],
  "paVerifyPaymentNoticeOutputEnvelopeBody"
);

export type paVerifyPaymentNoticeOutputEnvelopeBody = t.TypeOf<
  typeof paVerifyPaymentNoticeOutputEnvelopeBody
>;

// required attributes
const paVerifyPaymentNoticeOutputEnvelopeR = t.interface({
  Body: paVerifyPaymentNoticeOutputEnvelopeBody
});

// optional attributes
const paVerifyPaymentNoticeOutputEnvelopeO = t.partial({});

export const paVerifyPaymentNoticeOutputEnvelope = t.intersection(
  [paVerifyPaymentNoticeOutputEnvelopeR, paVerifyPaymentNoticeOutputEnvelopeO],
  "paVerifyPaymentNoticeOutputEnvelope"
);

export type paVerifyPaymentNoticeOutputEnvelope = t.TypeOf<
  typeof paVerifyPaymentNoticeOutputEnvelope
>;

// required attributes
const paVerifyPaymentNoticeOutputR = t.interface({
  Envelope: paVerifyPaymentNoticeOutputEnvelope
});

// optional attributes
const paVerifyPaymentNoticeOutputO = t.partial({});

export const paVerifyPaymentNoticeOutput = t.intersection(
  [paVerifyPaymentNoticeOutputR, paVerifyPaymentNoticeOutputO],
  "paVerifyPaymentNoticeOutput"
);

export type paVerifyPaymentNoticeOutput = t.TypeOf<
  typeof paVerifyPaymentNoticeOutput
>;
