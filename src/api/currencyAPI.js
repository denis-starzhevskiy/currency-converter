import axiosInstance from './axiosInstance'

export const getCurrencyValues = async () => {
  // const response = await axiosInstance.get(
  //   'https://api.currencyapi.com/v3/latest?apikey=TbdHwmG5woYXKtFsjaCMt54u21KUzJTzcO7ka1Q6'
  // )
  //
  // return response.data

  return {
    data: {
      ADA: {
        code: 'ADA',
        value: 3.608671,
      },
      AED: {
        code: 'AED',
        value: 3.672806,
      },
      AFN: {
        code: 'AFN',
        value: 88.500154,
      },
      ALL: {
        code: 'ALL',
        value: 110.850113,
      },
      AMD: {
        code: 'AMD',
        value: 396.368822,
      },
      ANG: {
        code: 'ANG',
        value: 1.803835,
      },
      AOA: {
        code: 'AOA',
        value: 503.86545,
      },
      ARS: {
        code: 'ARS',
        value: 178.947783,
      },
      AUD: {
        code: 'AUD',
        value: 1.453302,
      },
      AVAX: {
        code: 'AVAX',
        value: 0.085103,
      },
      AWG: {
        code: 'AWG',
        value: 1.802503,
      },
      AZN: {
        code: 'AZN',
        value: 1.700003,
      },
      BAM: {
        code: 'BAM',
        value: 1.865354,
      },
      BBD: {
        code: 'BBD',
        value: 2.020881,
      },
      BDT: {
        code: 'BDT',
        value: 103.894722,
      },
      BGN: {
        code: 'BGN',
        value: 1.838594,
      },
      BHD: {
        code: 'BHD',
        value: 0.377005,
      },
      BIF: {
        code: 'BIF',
        value: 2062.003393,
      },
      BMD: {
        code: 'BMD',
        value: 1.000002,
      },
      BNB: {
        code: 'BNB',
        value: 0.003818,
      },
      BND: {
        code: 'BND',
        value: 1.349173,
      },
      BOB: {
        code: 'BOB',
        value: 6.916142,
      },
      BRL: {
        code: 'BRL',
        value: 5.225908,
      },
      BSD: {
        code: 'BSD',
        value: 1.000855,
      },
      BTC: {
        code: 'BTC',
        value: 0.000059,
      },
      BTN: {
        code: 'BTN',
        value: 82.683396,
      },
      BWP: {
        code: 'BWP',
        value: 12.898479,
      },
      BYN: {
        code: 'BYN',
        value: 2.5264,
      },
      BYR: {
        code: 'BYR',
        value: 19600,
      },
      BZD: {
        code: 'BZD',
        value: 2.017446,
      },
      CAD: {
        code: 'CAD',
        value: 1.344952,
      },
      CDF: {
        code: 'CDF',
        value: 2027.004016,
      },
      CHF: {
        code: 'CHF',
        value: 0.927894,
      },
      CLF: {
        code: 'CLF',
        value: 0.030493,
      },
      CLP: {
        code: 'CLP',
        value: 841.381117,
      },
      CNY: {
        code: 'CNY',
        value: 6.838412,
      },
      COP: {
        code: 'COP',
        value: 4860.006863,
      },
      CRC: {
        code: 'CRC',
        value: 591.109398,
      },
      CUC: {
        code: 'CUC',
        value: 1.004954,
      },
      CUP: {
        code: 'CUP',
        value: 24.022083,
      },
      CVE: {
        code: 'CVE',
        value: 104.325181,
      },
      CZK: {
        code: 'CZK',
        value: 22.54164,
      },
      DJF: {
        code: 'DJF',
        value: 177.720334,
      },
      DKK: {
        code: 'DKK',
        value: 6.987907,
      },
      DOP: {
        code: 'DOP',
        value: 56.550086,
      },
      DOT: {
        code: 'DOT',
        value: 0.214325,
      },
      DZD: {
        code: 'DZD',
        value: 137.314233,
      },
      EGP: {
        code: 'EGP',
        value: 27.154348,
      },
      ERN: {
        code: 'ERN',
        value: 15.000028,
      },
      ETB: {
        code: 'ETB',
        value: 53.900089,
      },
      ETH: {
        code: 'ETH',
        value: 0.000789,
      },
      EUR: {
        code: 'EUR',
        value: 0.937752,
      },
      FJD: {
        code: 'FJD',
        value: 2.187753,
      },
      FKP: {
        code: 'FKP',
        value: 0.826876,
      },
      GBP: {
        code: 'GBP',
        value: 0.826926,
      },
      GEL: {
        code: 'GEL',
        value: 2.700003,
      },
      GGP: {
        code: 'GGP',
        value: 0.826877,
      },
      GHS: {
        code: 'GHS',
        value: 10.350018,
      },
      GIP: {
        code: 'GIP',
        value: 0.826876,
      },
      GMD: {
        code: 'GMD',
        value: 62.120113,
      },
      GNF: {
        code: 'GNF',
        value: 8775.014551,
      },
      GTQ: {
        code: 'GTQ',
        value: 7.854432,
      },
      GYD: {
        code: 'GYD',
        value: 209.515617,
      },
      HKD: {
        code: 'HKD',
        value: 7.807763,
      },
      HNL: {
        code: 'HNL',
        value: 24.670037,
      },
      HRK: {
        code: 'HRK',
        value: 7.042209,
      },
      HTG: {
        code: 'HTG',
        value: 148.134689,
      },
      HUF: {
        code: 'HUF',
        value: 370.580435,
      },
      IDR: {
        code: 'IDR',
        value: 15607.328642,
      },
      ILS: {
        code: 'ILS',
        value: 3.506997,
      },
      IMP: {
        code: 'IMP',
        value: 0.826877,
      },
      INR: {
        code: 'INR',
        value: 82.273761,
      },
      IQD: {
        code: 'IQD',
        value: 1460.502486,
      },
      IRR: {
        code: 'IRR',
        value: 41850.081448,
      },
      ISK: {
        code: 'ISK',
        value: 143.660206,
      },
      JEP: {
        code: 'JEP',
        value: 0.826877,
      },
      JMD: {
        code: 'JMD',
        value: 152.577308,
      },
      JOD: {
        code: 'JOD',
        value: 0.709301,
      },
      JPY: {
        code: 'JPY',
        value: 132.085251,
      },
      KES: {
        code: 'KES',
        value: 123.650185,
      },
      KGS: {
        code: 'KGS',
        value: 85.680168,
      },
      KHR: {
        code: 'KHR',
        value: 4120.005462,
      },
      KMF: {
        code: 'KMF',
        value: 462.950855,
      },
      KPW: {
        code: 'KPW',
        value: 900.000928,
      },
      KRW: {
        code: 'KRW',
        value: 1253.881365,
      },
      KWD: {
        code: 'KWD',
        value: 0.30614,
      },
      KYD: {
        code: 'KYD',
        value: 0.834058,
      },
      KZT: {
        code: 'KZT',
        value: 464.767748,
      },
      LAK: {
        code: 'LAK',
        value: 17180.01756,
      },
      LBP: {
        code: 'LBP',
        value: 1515.69552,
      },
      LKR: {
        code: 'LKR',
        value: 365.833731,
      },
      LRD: {
        code: 'LRD',
        value: 154.550243,
      },
      LSL: {
        code: 'LSL',
        value: 17.130025,
      },
      LTC: {
        code: 'LTC',
        value: 0.013041,
      },
      LTL: {
        code: 'LTL',
        value: 2.95274,
      },
      LVL: {
        code: 'LVL',
        value: 0.60489,
      },
      LYD: {
        code: 'LYD',
        value: 4.820008,
      },
      MAD: {
        code: 'MAD',
        value: 10.336013,
      },
      MATIC: {
        code: 'MATIC',
        value: 1.239378,
      },
      MDL: {
        code: 'MDL',
        value: 19.247519,
      },
      MGA: {
        code: 'MGA',
        value: 4500.006448,
      },
      MKD: {
        code: 'MKD',
        value: 58.761929,
      },
      MMK: {
        code: 'MMK',
        value: 2101.936996,
      },
      MNT: {
        code: 'MNT',
        value: 3458.506483,
      },
      MOP: {
        code: 'MOP',
        value: 8.05251,
      },
      MRO: {
        code: 'MRO',
        value: 356.999828,
      },
      MUR: {
        code: 'MUR',
        value: 43.750052,
      },
      MVR: {
        code: 'MVR',
        value: 15.410018,
      },
      MWK: {
        code: 'MWK',
        value: 1024.001099,
      },
      MXN: {
        code: 'MXN',
        value: 19.135276,
      },
      MYR: {
        code: 'MYR',
        value: 4.403507,
      },
      MZN: {
        code: 'MZN',
        value: 63.830098,
      },
      NAD: {
        code: 'NAD',
        value: 17.130027,
      },
      NGN: {
        code: 'NGN',
        value: 450.050848,
      },
      NIO: {
        code: 'NIO',
        value: 36.380047,
      },
      NOK: {
        code: 'NOK',
        value: 9.987566,
      },
      NPR: {
        code: 'NPR',
        value: 132.291749,
      },
      NZD: {
        code: 'NZD',
        value: 1.574311,
      },
      OMR: {
        code: 'OMR',
        value: 0.385001,
      },
      PAB: {
        code: 'PAB',
        value: 1.000855,
      },
      PEN: {
        code: 'PEN',
        value: 3.790006,
      },
      PGK: {
        code: 'PGK',
        value: 3.525005,
      },
      PHP: {
        code: 'PHP',
        value: 55.522082,
      },
      PKR: {
        code: 'PKR',
        value: 227.250294,
      },
      PLN: {
        code: 'PLN',
        value: 4.169905,
      },
      PYG: {
        code: 'PYG',
        value: 7330.335905,
      },
      QAR: {
        code: 'QAR',
        value: 3.641007,
      },
      RON: {
        code: 'RON',
        value: 4.629706,
      },
      RSD: {
        code: 'RSD',
        value: 110.240145,
      },
      RUB: {
        code: 'RUB',
        value: 72.500082,
      },
      RWF: {
        code: 'RWF',
        value: 1072.001991,
      },
      SAR: {
        code: 'SAR',
        value: 3.758513,
      },
      SBD: {
        code: 'SBD',
        value: 8.298913,
      },
      SCR: {
        code: 'SCR',
        value: 14.288948,
      },
      SDG: {
        code: 'SDG',
        value: 573.000734,
      },
      SEK: {
        code: 'SEK',
        value: 10.522624,
      },
      SGD: {
        code: 'SGD',
        value: 1.336402,
      },
      SHP: {
        code: 'SHP',
        value: 1.377401,
      },
      SLL: {
        code: 'SLL',
        value: 18910.033977,
      },
      SOL: {
        code: 'SOL',
        value: 0.076339,
      },
      SOS: {
        code: 'SOS',
        value: 569.500605,
      },
      SRD: {
        code: 'SRD',
        value: 31.557548,
      },
      STD: {
        code: 'STD',
        value: 20697.981008,
      },
      SVC: {
        code: 'SVC',
        value: 8.757242,
      },
      SYP: {
        code: 'SYP',
        value: 2512.534666,
      },
      SZL: {
        code: 'SZL',
        value: 17.130022,
      },
      THB: {
        code: 'THB',
        value: 33.730058,
      },
      TJS: {
        code: 'TJS',
        value: 10.22906,
      },
      TMT: {
        code: 'TMT',
        value: 3.510005,
      },
      TND: {
        code: 'TND',
        value: 3.124504,
      },
      TOP: {
        code: 'TOP',
        value: 2.352853,
      },
      TRY: {
        code: 'TRY',
        value: 18.754437,
      },
      TTD: {
        code: 'TTD',
        value: 6.793301,
      },
      TWD: {
        code: 'TWD',
        value: 30.576553,
      },
      TZS: {
        code: 'TZS',
        value: 2337.003159,
      },
      UAH: {
        code: 'UAH',
        value: 36.778524,
      },
      UGX: {
        code: 'UGX',
        value: 3713.186803,
      },
      USD: {
        code: 'USD',
        value: 1,
      },
      UYU: {
        code: 'UYU',
        value: 39.911946,
      },
      UZS: {
        code: 'UZS',
        value: 11325.013853,
      },
      VEF: {
        code: 'VEF',
        value: 1835387.106719,
      },
      VND: {
        code: 'VND',
        value: 23470.029306,
      },
      VUV: {
        code: 'VUV',
        value: 117.9225,
      },
      WST: {
        code: 'WST',
        value: 2.710017,
      },
      XAF: {
        code: 'XAF',
        value: 625.639394,
      },
      XAG: {
        code: 'XAG',
        value: 0.041945,
      },
      XAU: {
        code: 'XAU',
        value: 0.000536,
      },
      XCD: {
        code: 'XCD',
        value: 2.702555,
      },
      XDR: {
        code: 'XDR',
        value: 0.750619,
      },
      XOF: {
        code: 'XOF',
        value: 623.500731,
      },
      XPF: {
        code: 'XPF',
        value: 112.570147,
      },
      XRP: {
        code: 'XRP',
        value: 2.875228,
      },
      YER: {
        code: 'YER',
        value: 250.300461,
      },
      ZAR: {
        code: 'ZAR',
        value: 17.107742,
      },
      ZMK: {
        code: 'ZMK',
        value: 9001.2,
      },
      ZMW: {
        code: 'ZMW',
        value: 18.250813,
      },
      ZWL: {
        code: 'ZWL',
        value: 321.999592,
      },
    },
  }
}
