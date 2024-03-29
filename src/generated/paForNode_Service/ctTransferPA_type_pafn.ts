/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { stIdTransfer_type_pafn } from "./stIdTransfer_type_pafn";
import { stAmountNotZero_type_pafn } from "./stAmountNotZero_type_pafn";
import { stFiscalCodePA_type_pafn } from "./stFiscalCodePA_type_pafn";
import { stIBAN_type_pafn } from "./stIBAN_type_pafn";
import { stText140_type_pafn } from "./stText140_type_pafn";
import * as t from "io-ts";

// required attributes
const ctTransferPA_type_pafnR = t.interface({
  idTransfer: stIdTransfer_type_pafn,

  transferAmount: stAmountNotZero_type_pafn,

  fiscalCodePA: stFiscalCodePA_type_pafn,

  IBAN: stIBAN_type_pafn,

  remittanceInformation: stText140_type_pafn,

  transferCategory: stText140_type_pafn
});

// optional attributes
const ctTransferPA_type_pafnO = t.partial({});

export const ctTransferPA_type_pafn = t.intersection(
  [ctTransferPA_type_pafnR, ctTransferPA_type_pafnO],
  "ctTransferPA_type_pafn"
);

export type ctTransferPA_type_pafn = t.TypeOf<typeof ctTransferPA_type_pafn>;
