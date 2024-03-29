/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { Security } from "./Security";
import * as t from "io-ts";

/**
 * Input headers for wsdl operation paSendRTReq
 */

// required attributes
const paSendRTHeaderR = t.interface({});

// optional attributes
const paSendRTHeaderO = t.partial({
  Security: Security
});

export const paSendRTHeader = t.intersection(
  [paSendRTHeaderR, paSendRTHeaderO],
  "paSendRTHeader"
);

export type paSendRTHeader = t.TypeOf<typeof paSendRTHeader>;
