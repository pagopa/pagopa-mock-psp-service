/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { PatternString } from "italia-ts-commons/lib/strings";
import * as t from "io-ts";

export type stEMail_type_pafn = t.TypeOf<typeof stEMail_type_pafn>;
export const stEMail_type_pafn = PatternString(
  "[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*"
);
