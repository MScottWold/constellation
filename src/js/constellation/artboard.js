/**
 * points are sparated from lines and polygons so points can be re-used
 * without duplication. Lines can extend from any point to another. Polygons
 * will auto close to the first point.
 * */ 

export const artboard = {
  points: {
    0: [25, 10],
    1: [20, 80],
    2: [66,  9],
    3: [72, 88],
    4: [37, 60],
    5: [85,  8],
    6: [88, 60],
    7: [46, 26],
    8: [ 8, 41],
    9: [61, 62],
  },
  lines: [
    [0, 1,2,3,4,5,6,7,8,9, 2, 7, 0],
    [2, 5, 9, 7, 1],
    [3, 9, 4, 7]
  ],
  polygons: [
    [0, 1, 7],
    [4, 7, 9],
    [2, 5, 6]
  ],
  options: {
    vertices: {
      strokeColor: '#87998C',
      fillColor: '#A63A29',
      altFillColor: '#F5EFD5',
      lineWidth: 5,
      radius: 6
    },
    shapes: {
      strokeColor: '#87998C',
      fillColor: '#102A3B',
      lineWidth: 6,
    },
    scaleDown: {
      maxWidth: 415,
      factor: 2
    },
    stretch: true
  }
};

export const notFoundArtboard = {
  points: {
    0: [14, 66],
    1: [14, 57],
    2: [27, 20],
    3: [33, 20],
    4: [33, 20],
    5: [33, 57],
    6: [36, 57],
    7: [36, 57],
    8: [36, 66],
    9: [33, 66],
    10: [33, 66],
    11: [32, 78],
    12: [27, 78],
    13: [27, 78],
    14: [27, 67],
    15: [26, 67],
    16: [27, 57],
    17: [19, 57],
    18: [27, 37],
    19: [50, 29],
    20: [52, 30],
    21: [48, 30],
    22: [50, 70],
    23: [52, 69],
    24: [47, 68],
    25: [46, 48],
    26: [54, 49],
    27: [50, 20],
    28: [55, 21],
    29: [58, 28],
    30: [60, 48],
    31: [58, 72],
    32: [55, 77],
    33: [50, 79],
    34: [45, 77],
    35: [42, 72],
    36: [39, 49],
    37: [43, 25],
    38: [46, 21],
    39: [63, 57],
    40: [77, 20],
    41: [82, 20],
    42: [82, 57],
    43: [86, 57],
    44: [86, 67],
    45: [82, 67],
    46: [82, 78],
    47: [76, 78],
    48: [76, 67],
    49: [63, 66],
    50: [69, 57],
    51: [76, 38],
    52: [76, 57],
    53: [15, 56],
    54: [18, 57],
    55: [16, 56],
    56: [19, 55],
    57: [19, 52],
    58: [20, 46],
    59: [19, 46],
    60: [17, 52],
    61: [18, 50],
    62: [19, 45],
    63: [20, 42],
    64: [21, 36],
    65: [22, 37],
    66: [21, 42],
    67: [24, 39],
    68: [25, 37],
    69: [25, 35],
    70: [23, 44],
    71: [20, 51],
    72: [21, 46],
    73: [21, 35],
    74: [24, 30],
    75: [28, 24],
    76: [29, 23],
    77: [30, 22],
    78: [30, 23],
    79: [26, 29],
    80: [26, 33],
    81: [23, 37],
    82: [27, 25],
    83: [27, 24],
    84: [29, 21],
    85: [32, 21],
    86: [32, 24],
    87: [28, 29],
    88: [28, 28],
    89: [28, 39],
    90: [28, 45],
    91: [27, 41],
    92: [27, 49],
    93: [27, 51],
    94: [27, 54],
    95: [27, 57],
    96: [27, 62],
    97: [27, 66],
    98: [28, 73],
    99: [27, 76],
    100: [27, 78],
    101: [29, 78],
    102: [30, 78],
    103: [31, 79],
    104: [32, 78],
    105: [32, 75],
    106: [31, 69],
    107: [31, 63],
    108: [32, 57],
    109: [32, 53],
    110: [32, 51],
    111: [32, 42],
    112: [32, 37],
    113: [32, 34],
    114: [32, 25],
    115: [31, 25],
    116: [29, 30],
    117: [27, 34],
    118: [31, 33],
    119: [31, 33],
    120: [31, 41],
    121: [31, 43],
    122: [30, 43],
    123: [30, 49],
    124: [31, 50],
    125: [29, 51],
    126: [29, 50],
    127: [31, 43],
    128: [32, 50],
    129: [31, 60],
    130: [29, 53],
    131: [28, 57],
    132: [33, 56],
    133: [30, 55],
    134: [28, 59],
    135: [29, 59],
    136: [29, 63],
    137: [31, 62],
    138: [30, 67],
    139: [30, 67],
    140: [29, 67],
    141: [28, 69],
    142: [28, 73],
    143: [29, 75],
    144: [30, 76],
    145: [30, 69],
    146: [30, 73],
    147: [31, 76],
    148: [28, 76],
    149: [30, 73],
    150: [15, 59],
    151: [14, 60],
    152: [14, 63],
    153: [14, 64],
    154: [15, 65],
    155: [16, 61],
    156: [21, 60],
    157: [21, 60],
    158: [23, 60],
    159: [28, 59],
    160: [33, 59],
    161: [35, 59],
    162: [36, 58],
    163: [33, 58],
    164: [24, 59],
    165: [18, 60],
    166: [26, 59],
    167: [26, 63],
    168: [25, 65],
    169: [22, 66],
    170: [19, 66],
    171: [19, 66],
    172: [16, 66],
    173: [17, 63],
    174: [21, 63],
    175: [23, 63],
    176: [22, 62],
    177: [18, 64],
    178: [24, 65],
    179: [24, 64],
    180: [25, 60],
    181: [18, 61],
    182: [20, 64],
    183: [21, 66],
    184: [33, 66],
    185: [35, 66],
    186: [35, 66],
    187: [36, 66],
    188: [36, 59],
    189: [35, 61],
    190: [32, 62],
    191: [34, 62],
    192: [34, 63],
    193: [36, 63],
    194: [36, 61],
    195: [36, 64],
    196: [29, 65],
    197: [32, 65],
    198: [29, 40],
    199: [30, 36],
    200: [29, 32],
    201: [31, 36],
    202: [29, 33],
    203: [26, 31],
    204: [29, 26],
    205: [30, 25],
    206: [31, 29],
    207: [32, 28],
    208: [32, 31],
    209: [32, 32],
    210: [32, 28],
    211: [32, 24],
    212: [30, 20],
    213: [32, 48],
    214: [30, 47],
    215: [28, 48],
    216: [27, 47],
    217: [27, 43],
    218: [32, 46],
    219: [23, 32],
    220: [24, 28],
    221: [25, 25],
    222: [26, 22],
    223: [23, 41],
    224: [21, 40],
    225: [24, 34],
    226: [28, 36],
    227: [30, 39],
    228: [40, 51],
    229: [40, 56],
    230: [40, 58],
    231: [40, 61],
    232: [41, 64],
    233: [41, 66],
    234: [41, 68],
    235: [41, 70],
    236: [43, 73],
    237: [44, 75],
    238: [45, 77],
    239: [46, 78],
    240: [47, 78],
    241: [48, 79],
    242: [49, 80],
    243: [51, 79],
    244: [52, 79],
    245: [53, 79],
    246: [55, 77],
    247: [56, 76],
    248: [56, 74],
    249: [58, 72],
    250: [58, 70],
    251: [60, 50],
    252: [60, 52],
    253: [60, 55],
    254: [60, 57],
    255: [60, 60],
    256: [59, 63],
    257: [59, 65],
    258: [59, 68],
    259: [58, 30],
    260: [59, 32],
    261: [59, 34],
    262: [59, 35],
    263: [59, 38],
    264: [59, 41],
    265: [60, 43],
    266: [60, 47],
    267: [60, 47],
    268: [60, 45],
    269: [55, 23],
    270: [57, 25],
    271: [57, 26],
    272: [58, 27],
    273: [54, 21],
    274: [52, 20],
    275: [52, 20],
    276: [51, 20],
    277: [50, 20],
    278: [48, 20],
    279: [47, 20],
    280: [46, 21],
    281: [46, 21],
    282: [45, 22],
    283: [44, 23],
    284: [43, 23],
    285: [43, 24],
    286: [42, 26],
    287: [42, 28],
    288: [42, 30],
    289: [41, 31],
    290: [41, 31],
    291: [40, 35],
    292: [40, 37],
    293: [40, 40],
    294: [40, 41],
    295: [40, 43],
    296: [40, 45],
    297: [40, 47],
    298: [48, 31],
    299: [47, 35],
    300: [46, 39],
    301: [46, 40],
    302: [45, 46],
    303: [46, 46],
    304: [46, 51],
    305: [46, 53],
    306: [46, 55],
    307: [46, 61],
    308: [46, 63],
    309: [46, 64],
    310: [48, 68],
    311: [49, 69],
    312: [51, 69],
    313: [53, 69],
    314: [53, 66],
    315: [54, 62],
    316: [54, 60],
    317: [54, 58],
    318: [54, 57],
    319: [54, 51],
    320: [54, 46],
    321: [54, 45],
    322: [53, 38],
    323: [53, 34],
    324: [53, 33],
    325: [52, 31],
    326: [50, 29],
    327: [47, 26],
    328: [42, 28],
    329: [45, 30],
    330: [45, 27],
    331: [43, 32],
    332: [46, 33],
    333: [45, 33],
    334: [43, 35],
    335: [45, 38],
    336: [42, 38],
    337: [44, 38],
    338: [42, 46],
    339: [44, 43],
    340: [41, 42],
    341: [44, 43],
    342: [44, 45],
    343: [45, 46],
    344: [41, 51],
    345: [44, 51],
    346: [43, 50],
    347: [45, 49],
    348: [43, 52],
    349: [41, 58],
    350: [44, 56],
    351: [43, 59],
    352: [42, 60],
    353: [43, 64],
    354: [45, 58],
    355: [44, 53],
    356: [42, 55],
    357: [42, 62],
    358: [45, 62],
    359: [45, 63],
    360: [44, 66],
    361: [44, 67],
    362: [43, 65],
    363: [41, 69],
    364: [43, 69],
    365: [43, 67],
    366: [45, 73],
    367: [46, 69],
    368: [46, 68],
    369: [46, 65],
    370: [46, 69],
    371: [42, 70],
    372: [43, 71],
    373: [44, 72],
    374: [45, 73],
    375: [44, 69],
    376: [45, 75],
    377: [46, 77],
    378: [47, 71],
    379: [48, 79],
    380: [49, 78],
    381: [49, 72],
    382: [54, 73],
    383: [51, 77],
    384: [50, 77],
    385: [53, 78],
    386: [52, 76],
    387: [51, 74],
    388: [48, 75],
    389: [52, 75],
    390: [53, 75],
    391: [53, 73],
    392: [54, 71],
    393: [51, 72],
    394: [54, 72],
    395: [54, 73],
    396: [55, 74],
    397: [57, 67],
    398: [56, 70],
    399: [53, 70],
    400: [55, 69],
    401: [56, 70],
    402: [53, 64],
    403: [55, 64],
    404: [57, 62],
    405: [57, 59],
    406: [57, 58],
    407: [58, 60],
    408: [57, 61],
    409: [56, 61],
    410: [56, 57],
    411: [56, 55],
    412: [58, 53],
    413: [56, 39],
    414: [54, 41],
    415: [55, 45],
    416: [58, 46],
    417: [55, 50],
    418: [56, 53],
    419: [56, 54],
    420: [58, 53],
    421: [58, 49],
    422: [57, 42],
    423: [58, 40],
    424: [58, 34],
    425: [54, 33],
    426: [55, 34],
    427: [55, 26],
    428: [53, 23],
    429: [56, 33],
    430: [56, 33],
    431: [55, 31],
    432: [52, 30],
    433: [54, 28],
    434: [51, 24],
    435: [49, 22],
    436: [47, 23],
    437: [46, 23],
    438: [45, 25],
    439: [51, 27],
    440: [49, 26],
    441: [49, 26],
    442: [51, 23],
    443: [56, 23],
    444: [56, 24],
    445: [56, 24],
    446: [57, 28],
    447: [57, 29],
    448: [40, 54],
    449: [42, 53],
    450: [44, 54],
    451: [43, 44],
    452: [42, 48],
    453: [57, 47],
    454: [56, 51],
    455: [57, 52],
    456: [58, 56],
    457: [57, 66],
    458: [56, 67],
    459: [65, 54],
    460: [65, 50],
    461: [66, 49],
    462: [67, 45],
    463: [69, 42],
    464: [69, 39],
    465: [69, 38],
    466: [71, 36],
    467: [72, 33],
    468: [73, 30],
    469: [73, 29],
    470: [74, 26],
    471: [75, 25],
    472: [76, 22],
    473: [77, 20],
    474: [75, 24],
    475: [79, 19],
    476: [80, 19],
    477: [81, 19],
    478: [79, 20],
    479: [82, 22],
    480: [82, 25],
    481: [82, 29],
    482: [82, 30],
    483: [83, 36],
    484: [83, 37],
    485: [83, 34],
    486: [83, 44],
    487: [83, 47],
    488: [83, 47],
    489: [82, 42],
    490: [82, 51],
    491: [83, 54],
    492: [83, 56],
    493: [83, 59],
    494: [82, 63],
    495: [83, 64],
    496: [83, 68],
    497: [82, 70],
    498: [83, 73],
    499: [83, 77],
    500: [81, 78],
    501: [80, 79],
    502: [79, 78],
    503: [78, 78],
    504: [77, 78],
    505: [76, 76],
    506: [76, 73],
    507: [76, 70],
    508: [76, 70],
    509: [76, 68],
    510: [75, 67],
    511: [74, 67],
    512: [73, 67],
    513: [71, 67],
    514: [71, 67],
    515: [69, 67],
    516: [68, 67],
    517: [67, 67],
    518: [65, 67],
    519: [65, 66],
    520: [63, 65],
    521: [63, 63],
    522: [63, 62],
    523: [63, 59],
    524: [63, 58],
    525: [70, 56],
    526: [70, 53],
    527: [71, 51],
    528: [71, 50],
    529: [72, 48],
    530: [73, 46],
    531: [73, 44],
    532: [74, 43],
    533: [75, 41],
    534: [75, 39],
    535: [76, 38],
    536: [77, 39],
    537: [76, 40],
    538: [76, 42],
    539: [76, 42],
    540: [77, 45],
    541: [76, 46],
    542: [76, 48],
    543: [76, 49],
    544: [76, 49],
    545: [76, 50],
    546: [76, 54],
    547: [76, 54],
    548: [76, 58],
    549: [84, 57],
    550: [86, 57],
    551: [86, 58],
    552: [86, 60],
    553: [86, 62],
    554: [86, 64],
    555: [86, 66],
    556: [85, 67],
    557: [84, 67],
    558: [85, 63],
    559: [85, 65],
    560: [84, 65],
    561: [84, 62],
    562: [83, 58],
    563: [84, 60],
    564: [86, 59],
    565: [86, 61],
    566: [85, 62],
    567: [80, 62],
    568: [80, 51],
    569: [78, 52],
    570: [79, 53],
    571: [80, 56],
    572: [77, 48],
    573: [78, 45],
    574: [81, 38],
    575: [80, 26],
    576: [80, 25],
    577: [78, 23],
    578: [77, 23],
    579: [80, 21],
    580: [79, 32],
    581: [79, 32],
    582: [78, 30],
    583: [75, 34],
    584: [74, 35],
    585: [74, 30],
    586: [73, 36],
    587: [71, 40],
    588: [73, 41],
    589: [70, 41],
    590: [69, 48],
    591: [72, 44],
    592: [70, 46],
    593: [70, 46],
    594: [69, 50],
    595: [68, 50],
    596: [67, 52],
    597: [70, 54],
    598: [67, 54],
    599: [66, 55],
    600: [66, 60],
    601: [65, 61],
    602: [65, 62],
    603: [65, 64],
    604: [66, 65],
    605: [66, 65],
    606: [67, 60],
    607: [67, 57],
    608: [68, 63],
    609: [68, 65],
    610: [69, 63],
    611: [70, 60],
    612: [73, 64],
    613: [72, 62],
    614: [70, 65],
    615: [71, 65],
    616: [72, 65],
    617: [72, 60],
    618: [74, 60],
    619: [75, 60],
    620: [76, 60],
    621: [81, 59],
    622: [79, 60],
    623: [77, 60],
    624: [78, 58],
    625: [80, 55],
    626: [81, 53],
    627: [82, 51],
    628: [82, 41],
    629: [82, 40],
    630: [82, 46],
    631: [81, 46],
    632: [80, 48],
    633: [78, 49],
    634: [81, 44],
    635: [79, 43],
    636: [79, 43],
    637: [78, 42],
    638: [78, 34],
    639: [75, 33],
    640: [74, 39],
    641: [74, 38],
    642: [78, 28],
    643: [77, 28],
    644: [76, 26],
    645: [76, 28],
    646: [77, 32],
    647: [77, 37],
    648: [79, 38],
    649: [80, 37],
    650: [80, 35],
    651: [80, 35],
    652: [82, 34],
    653: [81, 31],
    654: [81, 26],
    655: [81, 23],
    656: [77, 25],
    657: [80, 28],
    658: [80, 57],
    659: [78, 65],
    660: [76, 63],
    661: [75, 63],
    662: [78, 65],
    663: [79, 67],
    664: [78, 71],
    665: [77, 71],
    666: [78, 74],
    667: [79, 77],
    668: [79, 77],
    669: [81, 77],
    670: [81, 76],
    671: [78, 75],
    672: [80, 74],
    673: [80, 71],
    674: [80, 72],
    675: [81, 71],
    676: [81, 65],
    677: [80, 63],
    678: [80, 66],
    679: [79, 71],
    680: [77, 65],
    681: [76, 65],
    682: [74, 65],
    683: [74, 61],
    684: [77, 61],
    685: [79, 61],
    686: [79, 56],
    687: [78, 53],
    688: [82, 47],
    689: [80, 45],
    690: [79, 45],
    691: [78, 40],
    692: [81, 40],
    693: [20, 38],
    694: [19, 41],
    695: [18, 43],
    696: [18, 46],
    697: [17, 48],
    698: [16, 51],
    699: [15, 54],
    700: [17, 54],
    701: [20, 49]
  },
  lines: [],
  polygons: [],
  options: {
    vertices: {
      strokeColor: '#87998C',
      fillColor: '#A63A29',
      altFillColor: '#F5EFD5',
      lineWidth: 2,
      radius: 4
    },
    scaleDown: {
      maxWidth: 380,
      factor: 2
    }
  }
};
