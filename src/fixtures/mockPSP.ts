export type MockResponse = readonly [number, string];

export const pspNotifyPaymentRes: MockResponse = [
  200,
  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:psp="http://pagopa-api.pagopa.gov.it/psp/pspForNode.xsd">
  <soapenv:Header/>
  <soapenv:Body>
      <pfn:pspNotifyPaymentRes>
          <outcome>OK</outcome>
      </pfn:pspNotifyPaymentRes>
  </soapenv:Body>
</soapenv:Envelope>`,
];

export const pspInviaRPTRes: MockResponse = [
  200,
  `<soapenv:Envelope
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:ws="http://ws.pagamenti.telematici.gov/">
    <soapenv:Header/>
    <soapenv:Body>
        <ws:pspInviaRPTResponse>
            <pspInviaRPTResponse>
                <esitoComplessivoOperazione>OK</esitoComplessivoOperazione>
                <identificativoCarrello>cart16366383977852087</identificativoCarrello>
                <parametriPagamentoImmediato>idBruciatura=16366383977852087</parametriPagamentoImmediato>
            </pspInviaRPTResponse>
        </ws:pspInviaRPTResponse>
    </soapenv:Body>
  </soapenv:Envelope>`,
];

export const pspInviaCarrelloRPTCarteRes: MockResponse = [
  200,
  `<soapenv:Envelope
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:ws="http://ws.pagamenti.telematici.gov/">
    <soapenv:Header/>
    <soapenv:Body>
        <ws:pspInviaCarrelloRPTCarteResponse>
            <pspInviaCarrelloRPTResponse>
                <esitoComplessivoOperazione>OK</esitoComplessivoOperazione>
                <identificativoCarrello>CART_1636705689274_PROVA_RES</identificativoCarrello>
                <parametriPagamentoImmediato>idBruciatura=1636705689274</parametriPagamentoImmediato>
            </pspInviaCarrelloRPTResponse>
        </ws:pspInviaCarrelloRPTCarteResponse>
    </soapenv:Body>
  </soapenv:Envelope>`,
];

export const pspInviaCarrelloRPTRes: MockResponse = [
  200,
  `<soapenv:Envelope
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:ws="http://ws.pagamenti.telematici.gov/">
    <soapenv:Header/>
    <soapenv:Body>
        <ws:pspInviaCarrelloRPTResponse>
            <pspInviaCarrelloRPTResponse>
                <esitoComplessivoOperazione>OK</esitoComplessivoOperazione>
                <identificativoCarrello>CART_16366390630516166_PROVA_RES</identificativoCarrello>
                <parametriPagamentoImmediato>idBruciatura=16366390630516166</parametriPagamentoImmediato>
            </pspInviaCarrelloRPTResponse>
        </ws:pspInviaCarrelloRPTResponse>
    </soapenv:Body>
  </soapenv:Envelope>`,
];

export const pspInviaAckRTRes: MockResponse = [
  200,
  `<soapenv:Envelope
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:ws="http://ws.pagamenti.telematici.gov/">
    <soapenv:Header/>
    <soapenv:Body>
        <ws:pspInviaAckRTResponse>
            <pspInviaAckRTResponse>
                <esito>OK</esito>
            </pspInviaAckRTResponse>
        </ws:pspInviaAckRTResponse>
    </soapenv:Body>
  </soapenv:Envelope>`,
];

export const pspChiediRTRes: MockResponse = [
  200,
  `<soapenv:Envelope
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:ws="http://ws.pagamenti.telematici.gov/">
  <soapenv:Header/>
  <soapenv:Body>
      <ws:pspChiediRTResponse>
          <pspChiediRTResponse>
              <rt>PHBheV9pOlJUIHhzaTpzY2hlbWFMb2NhdGlvbj0iaHR0cDovL3d3dy5kaWdpdHBhLmdvdi5pdC9zY2hlbWFzLzIwMTEvUGFnYW1lbnRpLyBQYWdJbmZfUlBUX1JUXzZfMC54c2QgIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczpwYXlfaT0iaHR0cDovL3d3dy5kaWdpdHBhLmdvdi5pdC9zY2hlbWFzLzIwMTEvUGFnYW1lbnRpLyI+IDxwYXlfaTp2ZXJzaW9uZU9nZ2V0dG8+Ni4wPC9wYXlfaTp2ZXJzaW9uZU9nZ2V0dG8+IDxwYXlfaTpkb21pbmlvPiA8cGF5X2k6aWRlbnRpZmljYXRpdm9Eb21pbmlvPjc3Nzc3Nzc3Nzc3PC9wYXlfaTppZGVudGlmaWNhdGl2b0RvbWluaW8+IDxwYXlfaTppZGVudGlmaWNhdGl2b1N0YXppb25lUmljaGllZGVudGU+Nzc3Nzc3Nzc3NzdfMDE8L3BheV9pOmlkZW50aWZpY2F0aXZvU3RhemlvbmVSaWNoaWVkZW50ZT4gPC9wYXlfaTpkb21pbmlvPiA8cGF5X2k6aWRlbnRpZmljYXRpdm9NZXNzYWdnaW9SaWNldnV0YT5UUjAwMDFfMjAxMjAzMDItMTA6Mzc6NTIuMDI2NC1GMDk4PC9wYXlfaTppZGVudGlmaWNhdGl2b01lc3NhZ2dpb1JpY2V2dXRhPiA8cGF5X2k6ZGF0YU9yYU1lc3NhZ2dpb1JpY2V2dXRhPjIwMTItMDMtMDJUMTA6Mzc6NTI8L3BheV9pOmRhdGFPcmFNZXNzYWdnaW9SaWNldnV0YT4gPHBheV9pOnJpZmVyaW1lbnRvTWVzc2FnZ2lvUmljaGllc3RhPlRSMDAwMV8yMDEyMDMwMi0xMDozNzo1Mi4wMjY0LUYwOTg8L3BheV9pOnJpZmVyaW1lbnRvTWVzc2FnZ2lvUmljaGllc3RhPiA8cGF5X2k6cmlmZXJpbWVudG9EYXRhUmljaGllc3RhPjIwMTItMDEtMjY8L3BheV9pOnJpZmVyaW1lbnRvRGF0YVJpY2hpZXN0YT4gPHBheV9pOmlzdGl0dXRvQXR0ZXN0YW50ZT4gPHBheV9pOmlkZW50aWZpY2F0aXZvVW5pdm9jb0F0dGVzdGFudGU+IDxwYXlfaTp0aXBvSWRlbnRpZmljYXRpdm9Vbml2b2NvPkc8L3BheV9pOnRpcG9JZGVudGlmaWNhdGl2b1VuaXZvY28+IDxwYXlfaTpjb2RpY2VJZGVudGlmaWNhdGl2b1VuaXZvY28+Q29kaWNlSWRlbnRpZmljPC9wYXlfaTpjb2RpY2VJZGVudGlmaWNhdGl2b1VuaXZvY28+IDwvcGF5X2k6aWRlbnRpZmljYXRpdm9Vbml2b2NvQXR0ZXN0YW50ZT4gPHBheV9pOmRlbm9taW5hemlvbmVBdHRlc3RhbnRlPkRlbm9taW5hemlvbmVBdHRlc3RhbnRlPC9wYXlfaTpkZW5vbWluYXppb25lQXR0ZXN0YW50ZT4gPHBheV9pOmNvZGljZVVuaXRPcGVyQXR0ZXN0YW50ZT5Db2RpY2VVT0E8L3BheV9pOmNvZGljZVVuaXRPcGVyQXR0ZXN0YW50ZT4gPHBheV9pOmRlbm9tVW5pdE9wZXJBdHRlc3RhbnRlPkRlbm9tVW5pdE9wZXJBdHRlc3RhbnRlPC9wYXlfaTpkZW5vbVVuaXRPcGVyQXR0ZXN0YW50ZT4gPHBheV9pOmluZGlyaXp6b0F0dGVzdGFudGU+SW5kaXJpenpvQXR0ZXN0YW50ZTwvcGF5X2k6aW5kaXJpenpvQXR0ZXN0YW50ZT4gPHBheV9pOmNpdmljb0F0dGVzdGFudGU+MTE8L3BheV9pOmNpdmljb0F0dGVzdGFudGU+IDxwYXlfaTpjYXBBdHRlc3RhbnRlPjExMTExPC9wYXlfaTpjYXBBdHRlc3RhbnRlPiA8cGF5X2k6bG9jYWxpdGFBdHRlc3RhbnRlPkxvY2FsaXRhQXR0ZXN0YW50ZTwvcGF5X2k6bG9jYWxpdGFBdHRlc3RhbnRlPiA8cGF5X2k6cHJvdmluY2lhQXR0ZXN0YW50ZT5Qcm92aW5jaWFBdHRlc3RhbnRlPC9wYXlfaTpwcm92aW5jaWFBdHRlc3RhbnRlPiA8cGF5X2k6bmF6aW9uZUF0dGVzdGFudGU+SVQ8L3BheV9pOm5hemlvbmVBdHRlc3RhbnRlPiA8L3BheV9pOmlzdGl0dXRvQXR0ZXN0YW50ZT4gPHBheV9pOmVudGVCZW5lZmljaWFyaW8+IDxwYXlfaTppZGVudGlmaWNhdGl2b1VuaXZvY29CZW5lZmljaWFyaW8+IDxwYXlfaTp0aXBvSWRlbnRpZmljYXRpdm9Vbml2b2NvPkc8L3BheV9pOnRpcG9JZGVudGlmaWNhdGl2b1VuaXZvY28+IDxwYXlfaTpjb2RpY2VJZGVudGlmaWNhdGl2b1VuaXZvY28+MTExMTExMTExMTc8L3BheV9pOmNvZGljZUlkZW50aWZpY2F0aXZvVW5pdm9jbz4gPC9wYXlfaTppZGVudGlmaWNhdGl2b1VuaXZvY29CZW5lZmljaWFyaW8+IDxwYXlfaTpkZW5vbWluYXppb25lQmVuZWZpY2lhcmlvPkFaSUVOREEgWFhYPC9wYXlfaTpkZW5vbWluYXppb25lQmVuZWZpY2lhcmlvPiA8cGF5X2k6Y29kaWNlVW5pdE9wZXJCZW5lZmljaWFyaW8+MTIzPC9wYXlfaTpjb2RpY2VVbml0T3BlckJlbmVmaWNpYXJpbz4gPHBheV9pOmRlbm9tVW5pdE9wZXJCZW5lZmljaWFyaW8+WFhYPC9wYXlfaTpkZW5vbVVuaXRPcGVyQmVuZWZpY2lhcmlvPiA8cGF5X2k6aW5kaXJpenpvQmVuZWZpY2lhcmlvPkluZGlyaXp6b0JlbmVmaWNpYXJpbzwvcGF5X2k6aW5kaXJpenpvQmVuZWZpY2lhcmlvPiA8cGF5X2k6Y2l2aWNvQmVuZWZpY2lhcmlvPjEyMzwvcGF5X2k6Y2l2aWNvQmVuZWZpY2lhcmlvPiA8cGF5X2k6Y2FwQmVuZWZpY2lhcmlvPjAwMTIzPC9wYXlfaTpjYXBCZW5lZmljaWFyaW8+IDxwYXlfaTpsb2NhbGl0YUJlbmVmaWNpYXJpbz5Sb21hPC9wYXlfaTpsb2NhbGl0YUJlbmVmaWNpYXJpbz4gPHBheV9pOnByb3ZpbmNpYUJlbmVmaWNpYXJpbz5STTwvcGF5X2k6cHJvdmluY2lhQmVuZWZpY2lhcmlvPiA8cGF5X2k6bmF6aW9uZUJlbmVmaWNpYXJpbz5JVDwvcGF5X2k6bmF6aW9uZUJlbmVmaWNpYXJpbz4gPC9wYXlfaTplbnRlQmVuZWZpY2lhcmlvPiA8cGF5X2k6c29nZ2V0dG9WZXJzYW50ZT4gPHBheV9pOmlkZW50aWZpY2F0aXZvVW5pdm9jb1ZlcnNhbnRlPiA8cGF5X2k6dGlwb0lkZW50aWZpY2F0aXZvVW5pdm9jbz5GPC9wYXlfaTp0aXBvSWRlbnRpZmljYXRpdm9Vbml2b2NvPiA8cGF5X2k6Y29kaWNlSWRlbnRpZmljYXRpdm9Vbml2b2NvPlJDQ0dMRDA5UDA5SDUwMUY8L3BheV9pOmNvZGljZUlkZW50aWZpY2F0aXZvVW5pdm9jbz4gPC9wYXlfaTppZGVudGlmaWNhdGl2b1VuaXZvY29WZXJzYW50ZT4gPHBheV9pOmFuYWdyYWZpY2FWZXJzYW50ZT5HZXN1YWxkbztSaWNjaXRlbGxpPC9wYXlfaTphbmFncmFmaWNhVmVyc2FudGU+IDxwYXlfaTppbmRpcml6em9WZXJzYW50ZT52aWEgZGVsIGdlc3U8L3BheV9pOmluZGlyaXp6b1ZlcnNhbnRlPiA8cGF5X2k6Y2l2aWNvVmVyc2FudGU+MTE8L3BheV9pOmNpdmljb1ZlcnNhbnRlPiA8cGF5X2k6Y2FwVmVyc2FudGU+MDAxODY8L3BheV9pOmNhcFZlcnNhbnRlPiA8cGF5X2k6bG9jYWxpdGFWZXJzYW50ZT5Sb21hPC9wYXlfaTpsb2NhbGl0YVZlcnNhbnRlPiA8cGF5X2k6cHJvdmluY2lhVmVyc2FudGU+Uk08L3BheV9pOnByb3ZpbmNpYVZlcnNhbnRlPiA8cGF5X2k6bmF6aW9uZVZlcnNhbnRlPklUPC9wYXlfaTpuYXppb25lVmVyc2FudGU+IDwvcGF5X2k6c29nZ2V0dG9WZXJzYW50ZT4gPHBheV9pOnNvZ2dldHRvUGFnYXRvcmU+IDxwYXlfaTppZGVudGlmaWNhdGl2b1VuaXZvY29QYWdhdG9yZT4gPHBheV9pOnRpcG9JZGVudGlmaWNhdGl2b1VuaXZvY28+RjwvcGF5X2k6dGlwb0lkZW50aWZpY2F0aXZvVW5pdm9jbz4gPHBheV9pOmNvZGljZUlkZW50aWZpY2F0aXZvVW5pdm9jbz5SQ0NHTEQwOVAwOUg1MDFFPC9wYXlfaTpjb2RpY2VJZGVudGlmaWNhdGl2b1VuaXZvY28+IDwvcGF5X2k6aWRlbnRpZmljYXRpdm9Vbml2b2NvUGFnYXRvcmU+IDxwYXlfaTphbmFncmFmaWNhUGFnYXRvcmU+R2VzdWFsZG87UmljY2l0ZWxsaTwvcGF5X2k6YW5hZ3JhZmljYVBhZ2F0b3JlPiA8cGF5X2k6aW5kaXJpenpvUGFnYXRvcmU+dmlhIGRlbCBnZXN1PC9wYXlfaTppbmRpcml6em9QYWdhdG9yZT4gPHBheV9pOmNpdmljb1BhZ2F0b3JlPjExPC9wYXlfaTpjaXZpY29QYWdhdG9yZT4gPHBheV9pOmNhcFBhZ2F0b3JlPjAwMTg2PC9wYXlfaTpjYXBQYWdhdG9yZT4gPHBheV9pOmxvY2FsaXRhUGFnYXRvcmU+Um9tYTwvcGF5X2k6bG9jYWxpdGFQYWdhdG9yZT4gPHBheV9pOnByb3ZpbmNpYVBhZ2F0b3JlPlJNPC9wYXlfaTpwcm92aW5jaWFQYWdhdG9yZT4gPHBheV9pOm5hemlvbmVQYWdhdG9yZT5JVDwvcGF5X2k6bmF6aW9uZVBhZ2F0b3JlPiA8cGF5X2k6ZS1tYWlsUGFnYXRvcmU+Z2VzdWFsZG8ucmljY2l0ZWxsaUBwb3N0ZS5pdDwvcGF5X2k6ZS1tYWlsUGFnYXRvcmU+IDwvcGF5X2k6c29nZ2V0dG9QYWdhdG9yZT4gPHBheV9pOmRhdGlQYWdhbWVudG8+IDxwYXlfaTpjb2RpY2VFc2l0b1BhZ2FtZW50bz4wPC9wYXlfaTpjb2RpY2VFc2l0b1BhZ2FtZW50bz4gPHBheV9pOmltcG9ydG9Ub3RhbGVQYWdhdG8+MTAuMDA8L3BheV9pOmltcG9ydG9Ub3RhbGVQYWdhdG8+IDxwYXlfaTppZGVudGlmaWNhdGl2b1VuaXZvY29WZXJzYW1lbnRvPklVVl8yMDIxLTExLTE1XzEzOjU1OjEzLjAzODwvcGF5X2k6aWRlbnRpZmljYXRpdm9Vbml2b2NvVmVyc2FtZW50bz4gPHBheV9pOkNvZGljZUNvbnRlc3RvUGFnYW1lbnRvPkNDRDAxPC9wYXlfaTpDb2RpY2VDb250ZXN0b1BhZ2FtZW50bz4gPHBheV9pOmRhdGlTaW5nb2xvUGFnYW1lbnRvPiA8cGF5X2k6c2luZ29sb0ltcG9ydG9QYWdhdG8+MTAuMDA8L3BheV9pOnNpbmdvbG9JbXBvcnRvUGFnYXRvPiA8cGF5X2k6ZXNpdG9TaW5nb2xvUGFnYW1lbnRvPkFDQ0VQVEVEPC9wYXlfaTplc2l0b1NpbmdvbG9QYWdhbWVudG8+IDxwYXlfaTpkYXRhRXNpdG9TaW5nb2xvUGFnYW1lbnRvPjIwMTItMDMtMDI8L3BheV9pOmRhdGFFc2l0b1NpbmdvbG9QYWdhbWVudG8+IDxwYXlfaTppZGVudGlmaWNhdGl2b1VuaXZvY29SaXNjb3NzaW9uZT5JVVZfMjAyMS0xMS0xNV8xMzo1NToxMy4wMzg8L3BheV9pOmlkZW50aWZpY2F0aXZvVW5pdm9jb1Jpc2Nvc3Npb25lPiA8cGF5X2k6Y2F1c2FsZVZlcnNhbWVudG8+Y2F1c2FsZSBSVCBwdWxsPC9wYXlfaTpjYXVzYWxlVmVyc2FtZW50bz4gPHBheV9pOmRhdGlTcGVjaWZpY2lSaXNjb3NzaW9uZT4xL2FiYzwvcGF5X2k6ZGF0aVNwZWNpZmljaVJpc2Nvc3Npb25lPiA8L3BheV9pOmRhdGlTaW5nb2xvUGFnYW1lbnRvPiA8L3BheV9pOmRhdGlQYWdhbWVudG8+IDwvcGF5X2k6UlQ+</rt>
          </pspChiediRTResponse>
      </ws:pspChiediRTResponse>
  </soapenv:Body>
</soapenv:Envelope>`,
];

export const pspChiediListaRTRes: MockResponse = [
  200,
  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.pagamenti.telematici.gov/">
    <soapenv:Header/>
    <soapenv:Body>
      <ws:pspChiediListaRTResponse>
          <pspChiediListaRTResponse>
            <elementoListaRTResponse>
                <identificativoDominio>77777777777</identificativoDominio>
                <identificativoUnivocoVersamento>randomIuv</identificativoUnivocoVersamento>
                <codiceContestoPagamento>1583148755603</codiceContestoPagamento>
            </elementoListaRTResponse>
          </pspChiediListaRTResponse>
      </ws:pspChiediListaRTResponse>
    </soapenv:Body>
  </soapenv:Envelope>`,
];

export const pspChiediAvanzamentoRPTRes: MockResponse = [
  200,
  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.pagamenti.telematici.gov/">
  <soapenv:Header/>
  <soapenv:Body>
     <ws:pspChiediAvanzamentoRPTResponse>
        <pspChiediAvanzamentoRPTResponse>
           <value>OK</value>
        </pspChiediAvanzamentoRPTResponse>
     </ws:pspChiediAvanzamentoRPTResponse>
  </soapenv:Body>
</soapenv:Envelope>`,
];

export const pspNotifyPaymentV2Res: MockResponse = [
  200,
  `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:psp="http://pagopa-api.pagopa.gov.it/psp/pspForNode.xsd">
  <soapenv:Header/>
  <soapenv:Body>
      <pfn:pspNotifyPaymentV2Res>
        <outcome>OK</outcome>
      </pfn:pspNotifyPaymentV2Res>
  </soapenv:Body>
  </soapenv:Envelope>`,
];


