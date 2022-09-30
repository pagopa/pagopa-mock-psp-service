/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import * as t from "io-ts";
import { paVerifyPaymentNoticeHeader } from "./paVerifyPaymentNoticeHeader";
import { paVerifyPaymentNoticeReq_element_pafn } from "./paVerifyPaymentNoticeReq_element_pafn";

/**
 * Input message for wsdl operation paVerifyPaymentNoticeReq
 */

// required attributes
const paVerifyPaymentNoticeInputEnvelopeBodyR = t.interface({
  paVerifyPaymentNoticeReq: paVerifyPaymentNoticeReq_element_pafn
});

// optional attributes
const paVerifyPaymentNoticeInputEnvelopeBodyO = t.partial({});

export const paVerifyPaymentNoticeInputEnvelopeBody = t.intersection(
  [
    paVerifyPaymentNoticeInputEnvelopeBodyR,
    paVerifyPaymentNoticeInputEnvelopeBodyO
  ],
  "paVerifyPaymentNoticeInputEnvelopeBody"
);

export type paVerifyPaymentNoticeInputEnvelopeBody = t.TypeOf<
  typeof paVerifyPaymentNoticeInputEnvelopeBody
>;

// required attributes
const paVerifyPaymentNoticeInputEnvelopeR = t.interface({
  Body: paVerifyPaymentNoticeInputEnvelopeBody
});

// optional attributes
const paVerifyPaymentNoticeInputEnvelopeO = t.partial({
  Header: paVerifyPaymentNoticeHeader
});

export const paVerifyPaymentNoticeInputEnvelope = t.intersection(
  [paVerifyPaymentNoticeInputEnvelopeR, paVerifyPaymentNoticeInputEnvelopeO],
  "paVerifyPaymentNoticeInputEnvelope"
);

export type paVerifyPaymentNoticeInputEnvelope = t.TypeOf<
  typeof paVerifyPaymentNoticeInputEnvelope
>;

// required attributes
const paVerifyPaymentNoticeInputR = t.interface({
  Envelope: paVerifyPaymentNoticeInputEnvelope
});

// optional attributes
const paVerifyPaymentNoticeInputO = t.partial({});

export const paVerifyPaymentNoticeInput = t.intersection(
  [paVerifyPaymentNoticeInputR, paVerifyPaymentNoticeInputO],
  "paVerifyPaymentNoticeInput"
);

export type paVerifyPaymentNoticeInput = t.TypeOf<
  typeof paVerifyPaymentNoticeInput
>;
