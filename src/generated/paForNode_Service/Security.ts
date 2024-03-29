/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import * as t from "io-ts";

/**
 * Header for WS-Security
 */

// required attributes
const SecurityUsernameTokenR = t.interface({});

// optional attributes
const SecurityUsernameTokenO = t.partial({
  Username: t.string,

  Password: t.string,

  Nonce: t.string,

  Created: t.string
});

export const SecurityUsernameToken = t.intersection(
  [SecurityUsernameTokenR, SecurityUsernameTokenO],
  "SecurityUsernameToken"
);

export type SecurityUsernameToken = t.TypeOf<typeof SecurityUsernameToken>;

// required attributes
const SecurityTimestampR = t.interface({});

// optional attributes
const SecurityTimestampO = t.partial({
  Created: t.string,

  Expires: t.string,

  Id: t.string
});

export const SecurityTimestamp = t.intersection(
  [SecurityTimestampR, SecurityTimestampO],
  "SecurityTimestamp"
);

export type SecurityTimestamp = t.TypeOf<typeof SecurityTimestamp>;

// required attributes
const SecurityR = t.interface({});

// optional attributes
const SecurityO = t.partial({
  UsernameToken: SecurityUsernameToken,

  Timestamp: SecurityTimestamp
});

export const Security = t.intersection([SecurityR, SecurityO], "Security");

export type Security = t.TypeOf<typeof Security>;
