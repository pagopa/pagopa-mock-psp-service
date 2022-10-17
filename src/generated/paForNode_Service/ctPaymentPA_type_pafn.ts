/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { stText35_type_pafn } from "./stText35_type_pafn";
import { stAmountNotZero_type_pafn } from "./stAmountNotZero_type_pafn";
import { stISODate_type_pafn } from "./stISODate_type_pafn";
import { stText140_type_pafn } from "./stText140_type_pafn";
import { ctSubject_type_pafn } from "./ctSubject_type_pafn";
import { ctTransferListPA_type_pafn } from "./ctTransferListPA_type_pafn";
import { ctMetadata_type_pafn } from "./ctMetadata_type_pafn";
import * as t from "io-ts";
import { UTCISODateFromString } from "italia-ts-commons/lib/dates";

/**
 * Its contains all payment information :
 *
 * - `creditorReferenceId` : its equal to **IUV** _Identificativo Univoco Versamento_
 * - `paymentAmount` : amount, it must be equal to the sums of `transferAmount` present in the `transferList`
 * - `dueDate` : indicates the expiration payment date according to the ISO 8601 format `[YYYY]-[MM]-[DD]`.
 * - `retentionDate` : indicates the retention payment date according to the ISO 8601 format `[YYYY]-[MM]-[DD]`.
 * - `lastPayment` : boolean flag used for in installment payments
 * - `description` : free text available to describe the payment reasons
 * - `companyName` : Public Administration full name
 * - `officeName` : Public Admninistration Department Name
 * - `debtor` : identifies the debtor to whom the debt position refers
 * - `transferList` : the list of all available transfer information (_see below to details_)
 * - `metadata` : (_see below to details_)
 */

// required attributes
const ctPaymentPA_type_pafnR = t.interface({
  creditorReferenceId: stText35_type_pafn,

  paymentAmount: stAmountNotZero_type_pafn,

  dueDate: stISODate_type_pafn,

  description: stText140_type_pafn,

  debtor: ctSubject_type_pafn,

  transferList: ctTransferListPA_type_pafn
});

// optional attributes
const ctPaymentPA_type_pafnO = t.partial({
  retentionDate: UTCISODateFromString,

  lastPayment: t.boolean,

  companyName: stText140_type_pafn,

  officeName: stText140_type_pafn,

  metadata: ctMetadata_type_pafn
});

export const ctPaymentPA_type_pafn = t.intersection(
  [ctPaymentPA_type_pafnR, ctPaymentPA_type_pafnO],
  "ctPaymentPA_type_pafn"
);

export type ctPaymentPA_type_pafn = t.TypeOf<typeof ctPaymentPA_type_pafn>;