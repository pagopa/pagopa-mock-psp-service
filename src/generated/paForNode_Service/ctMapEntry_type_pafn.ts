/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { stText140_type_pafn } from "./stText140_type_pafn";
import * as t from "io-ts";

// required attributes
const ctMapEntry_type_pafnR = t.interface({
  key: stText140_type_pafn,

  value: stText140_type_pafn
});

// optional attributes
const ctMapEntry_type_pafnO = t.partial({});

export const ctMapEntry_type_pafn = t.intersection(
  [ctMapEntry_type_pafnR, ctMapEntry_type_pafnO],
  "ctMapEntry_type_pafn"
);

export type ctMapEntry_type_pafn = t.TypeOf<typeof ctMapEntry_type_pafn>;
