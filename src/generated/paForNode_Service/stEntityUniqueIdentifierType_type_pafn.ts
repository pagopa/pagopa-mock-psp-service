/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { WithinRangeString } from "italia-ts-commons/lib/strings";
import * as t from "io-ts";

/**
 * Alphanumeric field indicating the nature of the subject; it can assume the following values:
 *
 * - **F** : Natural person
 * - **G** : Legal Person
 */

export type stEntityUniqueIdentifierType_type_pafn = t.TypeOf<
  typeof stEntityUniqueIdentifierType_type_pafn
>;
export const stEntityUniqueIdentifierType_type_pafn = WithinRangeString(1, 2);