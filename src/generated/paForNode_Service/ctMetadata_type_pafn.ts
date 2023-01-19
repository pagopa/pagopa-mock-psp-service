/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { ctMapEntry_type_pafn } from "./ctMapEntry_type_pafn";
import * as t from "io-ts";

/**
 * Its a _key/value_ store fields for the exclusive use of the PA.
 * The data will return in the receipt (`paSendRT`)
 */

// required attributes
const ctMetadata_type_pafnR = t.interface({
  mapEntry: t.readonlyArray(
    ctMapEntry_type_pafn,
    "array of ctMapEntry_type_pafn"
  )
});

// optional attributes
const ctMetadata_type_pafnO = t.partial({});

export const ctMetadata_type_pafn = t.intersection(
  [ctMetadata_type_pafnR, ctMetadata_type_pafnO],
  "ctMetadata_type_pafn"
);

export type ctMetadata_type_pafn = t.TypeOf<typeof ctMetadata_type_pafn>;
