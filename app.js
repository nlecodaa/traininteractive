// Train station data
const stationData = [
  {
    "name": "Patna Junction",
    "code": "PNBE",
    "state": "Bihar",
    "city": "Patna",
    "latitude": 25.5941,
    "longitude": 85.1376
  },
  {
    "name": "Barauni Junction",
    "code": "BJU",
    "state": "Bihar",
    "city": "Begusarai",
    "latitude": 25.4814,
    "longitude": 86.1337
  },
  {
    "name": "Samastipur Junction",
    "code": "SPJ",
    "state": "Bihar",
    "city": "Samastipur",
    "latitude": 25.8649,
    "longitude": 85.7818
  },
  {
    "name": "Gaya Junction",
    "code": "GAYA",
    "state": "Bihar",
    "city": "Gaya",
    "latitude": 24.7914,
    "longitude": 85.0002
  },
  {
    "name": "Kiul Junction",
    "code": "KIUL",
    "state": "Bihar",
    "city": "Lakhisarai",
    "latitude": 25.0382,
    "longitude": 87.0053
  },
  {
    "name": "Chhapra Junction",
    "code": "CPR",
    "state": "Bihar",
    "city": "Chhapra",
    "latitude": 25.7781,
    "longitude": 84.7278
  },
  {
    "name": "Muzaffarpur Junction",
    "code": "MFP",
    "state": "Bihar",
    "city": "Muzaffarpur",
    "latitude": 26.1209,
    "longitude": 85.3647
  },
  {
    "name": "Katihar Junction",
    "code": "KIR",
    "state": "Bihar",
    "city": "Katihar",
    "latitude": 25.5394,
    "longitude": 87.5761
  },
  {
    "name": "Hajipur Junction",
    "code": "HJP",
    "state": "Bihar",
    "city": "Hajipur",
    "latitude": 25.6892,
    "longitude": 85.2107
  },
  {
    "name": "Mokama Junction",
    "code": "MKA",
    "state": "Bihar",
    "city": "Mokama",
    "latitude": 25.3959,
    "longitude": 85.9168
  },
  {
    "name": "Bakhtiyarpur Junction",
    "code": "BKP",
    "state": "Bihar",
    "city": "Bakhtiarpur",
    "latitude": 25.4613,
    "longitude": 85.5311
  },
  {
    "name": "Ara Junction",
    "code": "ARA",
    "state": "Bihar",
    "city": "Ara",
    "latitude": 25.5564,
    "longitude": 84.6678
  },
  {
    "name": "Danapur",
    "code": "DNR",
    "state": "Bihar",
    "city": "Danapur",
    "latitude": 25.6303,
    "longitude": 85.0464
  },
  {
    "name": "Buxar",
    "code": "BXR",
    "state": "Bihar",
    "city": "Buxar",
    "latitude": 25.5647,
    "longitude": 83.9784
  },
  {
    "name": "Jhajha",
    "code": "JAJ",
    "state": "Bihar",
    "city": "Jhajha",
    "latitude": 24.771,
    "longitude": 86.3781
  },
  {
    "name": "Khagaria Junction",
    "code": "KGG",
    "state": "Bihar",
    "city": "Khagaria",
    "latitude": 25.5018,
    "longitude": 86.4785
  },
  {
    "name": "Sonpur Junction",
    "code": "SEE",
    "state": "Bihar",
    "city": "Sonepur",
    "latitude": 25.6959,
    "longitude": 85.1782
  },
  {
    "name": "Darbhanga Junction",
    "code": "DBG",
    "state": "Bihar",
    "city": "Darbhanga",
    "latitude": 26.1542,
    "longitude": 85.8918
  },
  {
    "name": "Rajendra Nagar Terminal",
    "code": "RJPB",
    "state": "Bihar",
    "city": "Patna",
    "latitude": 25.6093,
    "longitude": 85.1025
  },
  {
    "name": "Siwan Junction",
    "code": "SV",
    "state": "Bihar",
    "city": "Siwan",
    "latitude": 26.2183,
    "longitude": 84.3631
  },
  {
    "name": "Barsoi Junction",
    "code": "BOE",
    "state": "Bihar",
    "city": "Barsoi",
    "latitude": 25.4567,
    "longitude": 87.9012
  },
  {
    "name": "Jamalpur Junction",
    "code": "JMP",
    "state": "Bihar",
    "city": "Jamalpur",
    "latitude": 25.3122,
    "longitude": 86.4893
  },
  {
    "name": "Sasaram Junction",
    "code": "SSM",
    "state": "Bihar",
    "city": "Sasaram",
    "latitude": 24.9518,
    "longitude": 84.0229
  },
  {
    "name": "Fatuha Junction",
    "code": "FUT",
    "state": "Bihar",
    "city": "Fatuha",
    "latitude": 25.5031,
    "longitude": 85.3156
  },
  {
    "name": "Dehri On Sone",
    "code": "DOS",
    "state": "Bihar",
    "city": "Dehri",
    "latitude": 24.9002,
    "longitude": 84.1828
  },
  {
    "name": "Begusarai",
    "code": "BGS",
    "state": "Bihar",
    "city": "Begusarai",
    "latitude": 25.4181,
    "longitude": 86.1274
  },
  {
    "name": "Bhagalpur Junction",
    "code": "BGP",
    "state": "Bihar",
    "city": "Bhagalpur",
    "latitude": 25.2425,
    "longitude": 87.0081
  },
  {
    "name": "Barh",
    "code": "BARH",
    "state": "Bihar",
    "city": "Barh",
    "latitude": 25.4831,
    "longitude": 85.707
  },
  {
    "name": "Naugachia",
    "code": "NNA",
    "state": "Bihar",
    "city": "Naugachhia",
    "latitude": 25.3906,
    "longitude": 87.0979
  },
  {
    "name": "Barhiya",
    "code": "BRY",
    "state": "Bihar",
    "city": "Barahiya",
    "latitude": 25.2876,
    "longitude": 86.5193
  },
  {
    "name": "Mansi Junction",
    "code": "MNE",
    "state": "Bihar",
    "city": "Mansi",
    "latitude": 25.9938,
    "longitude": 86.6229
  },
  {
    "name": "Narkatiaganj Junction",
    "code": "NKE",
    "state": "Bihar",
    "city": "Narkatiaganj",
    "latitude": 26.7742,
    "longitude": 84.4281
  },
  {
    "name": "Sagauli Junction",
    "code": "SGL",
    "state": "Bihar",
    "city": "Sugauli",
    "latitude": 26.7965,
    "longitude": 84.7476
  },
  {
    "name": "Raxaul Junction",
    "code": "RXL",
    "state": "Bihar",
    "city": "Raxaul",
    "latitude": 26.9824,
    "longitude": 84.8519
  },
  {
    "name": "Sitamarhi Junction",
    "code": "SMI",
    "state": "Bihar",
    "city": "Sitamarhi",
    "latitude": 26.591,
    "longitude": 85.483
  },
  {
    "name": "Motihari",
    "code": "MYE",
    "state": "Bihar",
    "city": "Motihari",
    "latitude": 26.6521,
    "longitude": 84.9165
  },
  {
    "name": "Purnia Junction",
    "code": "PRNA",
    "state": "Bihar",
    "city": "Purnia",
    "latitude": 25.7891,
    "longitude": 87.4753
  },
  {
    "name": "Forbesganj",
    "code": "FBG",
    "state": "Bihar",
    "city": "Forbesganj",
    "latitude": 26.3023,
    "longitude": 87.2664
  },
  {
    "name": "Araria",
    "code": "ARR",
    "state": "Bihar",
    "city": "Araria",
    "latitude": 26.1521,
    "longitude": 87.519
  },
  {
    "name": "Bagaha",
    "code": "BUG",
    "state": "Bihar",
    "city": "Bagaha",
    "latitude": 27.099,
    "longitude": 84.089
  },
  {
    "name": "Bettiah",
    "code": "BTH",
    "state": "Bihar",
    "city": "Bettiah",
    "latitude": 26.8,
    "longitude": 84.503
  },
  {
    "name": "Kanpur Central",
    "code": "CNB",
    "state": "Uttar Pradesh",
    "city": "Kanpur",
    "latitude": 26.4499,
    "longitude": 80.3319
  },
  {
    "name": "Prayagraj Junction",
    "code": "PRYJ",
    "state": "Uttar Pradesh",
    "city": "Prayagraj",
    "latitude": 25.4358,
    "longitude": 81.8463
  },
  {
    "name": "Gorakhpur Junction",
    "code": "GKP",
    "state": "Uttar Pradesh",
    "city": "Gorakhpur",
    "latitude": 26.7598,
    "longitude": 83.3818
  },
  {
    "name": "Aligarh Junction",
    "code": "ALJN",
    "state": "Uttar Pradesh",
    "city": "Aligarh",
    "latitude": 27.8896,
    "longitude": 78.0746
  },
  {
    "name": "Bareilly Junction",
    "code": "BE",
    "state": "Uttar Pradesh",
    "city": "Bareilly",
    "latitude": 28.367,
    "longitude": 79.4304
  },
  {
    "name": "Moradabad Junction",
    "code": "MB",
    "state": "Uttar Pradesh",
    "city": "Moradabad",
    "latitude": 28.8386,
    "longitude": 78.7733
  },
  {
    "name": "Varanasi Junction",
    "code": "BSB",
    "state": "Uttar Pradesh",
    "city": "Varanasi",
    "latitude": 25.3176,
    "longitude": 82.9739
  },
  {
    "name": "Agra Cantt",
    "code": "AGC",
    "state": "Uttar Pradesh",
    "city": "Agra",
    "latitude": 27.1767,
    "longitude": 78.0081
  },
  {
    "name": "Lucknow Junction",
    "code": "LJN",
    "state": "Uttar Pradesh",
    "city": "Lucknow",
    "latitude": 26.8467,
    "longitude": 80.9462
  },
  {
    "name": "Ghaziabad Junction",
    "code": "GZB",
    "state": "Uttar Pradesh",
    "city": "Ghaziabad",
    "latitude": 28.6692,
    "longitude": 77.4538
  },
  {
    "name": "Mathura Junction",
    "code": "MTJ",
    "state": "Uttar Pradesh",
    "city": "Mathura",
    "latitude": 27.4924,
    "longitude": 77.6737
  },
  {
    "name": "Firozabad",
    "code": "FZD",
    "state": "Uttar Pradesh",
    "city": "Firozabad",
    "latitude": 27.1592,
    "longitude": 78.3957
  },
  {
    "name": "Tundla Junction",
    "code": "TDL",
    "state": "Uttar Pradesh",
    "city": "Tundla",
    "latitude": 27.2004,
    "longitude": 78.2754
  },
  {
    "name": "Etawah Junction",
    "code": "ETW",
    "state": "Uttar Pradesh",
    "city": "Etawah",
    "latitude": 26.7606,
    "longitude": 79.0193
  },
  {
    "name": "Faizabad Junction",
    "code": "FD",
    "state": "Uttar Pradesh",
    "city": "Ayodhya",
    "latitude": 26.7751,
    "longitude": 82.149
  },
  {
    "name": "Jhansi Junction",
    "code": "JHS",
    "state": "Uttar Pradesh",
    "city": "Jhansi",
    "latitude": 25.4484,
    "longitude": 78.5685
  },
  {
    "name": "Meerut City",
    "code": "MTC",
    "state": "Uttar Pradesh",
    "city": "Meerut",
    "latitude": 28.9845,
    "longitude": 77.7064
  },
  {
    "name": "Saharanpur",
    "code": "SRE",
    "state": "Uttar Pradesh",
    "city": "Saharanpur",
    "latitude": 29.968,
    "longitude": 77.5552
  },
  {
    "name": "Muzaffarnagar",
    "code": "MOZ",
    "state": "Uttar Pradesh",
    "city": "Muzaffarnagar",
    "latitude": 29.4727,
    "longitude": 77.7085
  },
  {
    "name": "Rampur",
    "code": "RMU",
    "state": "Uttar Pradesh",
    "city": "Rampur",
    "latitude": 28.8156,
    "longitude": 79.0213
  },
  {
    "name": "Shahjahanpur",
    "code": "SPN",
    "state": "Uttar Pradesh",
    "city": "Shahjahanpur",
    "latitude": 27.88,
    "longitude": 79.91
  },
  {
    "name": "Hardoi",
    "code": "HRI",
    "state": "Uttar Pradesh",
    "city": "Hardoi",
    "latitude": 27.3969,
    "longitude": 80.1314
  },
  {
    "name": "Sitapur",
    "code": "STP",
    "state": "Uttar Pradesh",
    "city": "Sitapur",
    "latitude": 27.5677,
    "longitude": 80.6947
  },
  {
    "name": "Bahraich",
    "code": "BRK",
    "state": "Uttar Pradesh",
    "city": "Bahraich",
    "latitude": 27.5741,
    "longitude": 81.5939
  },
  {
    "name": "Balrampur",
    "code": "BLP",
    "state": "Uttar Pradesh",
    "city": "Balrampur",
    "latitude": 27.4307,
    "longitude": 82.1808
  },
  {
    "name": "Banda Junction",
    "code": "BNDA",
    "state": "Uttar Pradesh",
    "city": "Banda",
    "latitude": 25.4751,
    "longitude": 80.3347
  },
  {
    "name": "Barabanki Junction",
    "code": "BBK",
    "state": "Uttar Pradesh",
    "city": "Barabanki",
    "latitude": 26.9224,
    "longitude": 81.2047
  },
  {
    "name": "Basti",
    "code": "BST",
    "state": "Uttar Pradesh",
    "city": "Basti",
    "latitude": 26.8023,
    "longitude": 82.7367
  },
  {
    "name": "Deoria Sadar",
    "code": "DEOS",
    "state": "Uttar Pradesh",
    "city": "Deoria",
    "latitude": 26.5024,
    "longitude": 83.779
  },
  {
    "name": "Gonda Junction",
    "code": "GD",
    "state": "Uttar Pradesh",
    "city": "Gonda",
    "latitude": 27.1336,
    "longitude": 81.9623
  },
  {
    "name": "Khalilabad",
    "code": "KLD",
    "state": "Uttar Pradesh",
    "city": "Khalilabad",
    "latitude": 26.7704,
    "longitude": 83.0707
  },
  {
    "name": "Padrauna",
    "code": "PDNA",
    "state": "Uttar Pradesh",
    "city": "Padrauna",
    "latitude": 26.9029,
    "longitude": 83.9819
  },
  {
    "name": "Sultanpur Junction",
    "code": "SLN",
    "state": "Uttar Pradesh",
    "city": "Sultanpur",
    "latitude": 26.2557,
    "longitude": 82.0739
  },
  {
    "name": "Kathgodam",
    "code": "KGM",
    "state": "Uttar Pradesh",
    "city": "Kathgodam",
    "latitude": 29.2118,
    "longitude": 79.5115
  },
  {
    "name": "Rudrapur City",
    "code": "RPC",
    "state": "Uttar Pradesh",
    "city": "Rudrapur",
    "latitude": 28.9845,
    "longitude": 79.409
  },
  {
    "name": "Lalkuan Junction",
    "code": "LKU",
    "state": "Uttar Pradesh",
    "city": "Lalkuan",
    "latitude": 28.844,
    "longitude": 79.4456
  },
  {
    "name": "Haldwani",
    "code": "HDW",
    "state": "Uttar Pradesh",
    "city": "Haldwani",
    "latitude": 29.2183,
    "longitude": 79.513
  },
  {
    "name": "Kasganj Junction",
    "code": "KSJ",
    "state": "Uttar Pradesh",
    "city": "Kasganj",
    "latitude": 27.8067,
    "longitude": 78.6446
  },
  {
    "name": "Hathras Junction",
    "code": "HTC",
    "state": "Uttar Pradesh",
    "city": "Hathras",
    "latitude": 27.595,
    "longitude": 78.0467
  },
  {
    "name": "Farrukhabad",
    "code": "FBD",
    "state": "Uttar Pradesh",
    "city": "Farrukhabad",
    "latitude": 27.395,
    "longitude": 79.58
  },
  {
    "name": "Kannauj",
    "code": "CNJ",
    "state": "Uttar Pradesh",
    "city": "Kannauj",
    "latitude": 27.052,
    "longitude": 79.919
  },
  {
    "name": "Kanpur Anwarganj",
    "code": "CPA",
    "state": "Uttar Pradesh",
    "city": "Kanpur",
    "latitude": 26.478,
    "longitude": 80.3319
  },
  {
    "name": "Unchahar Junction",
    "code": "UCR",
    "state": "Uttar Pradesh",
    "city": "Unchahar",
    "latitude": 26.347,
    "longitude": 80.459
  },
  {
    "name": "Rae Bareli Junction",
    "code": "RBL",
    "state": "Uttar Pradesh",
    "city": "Rae Bareli",
    "latitude": 26.223,
    "longitude": 81.233
  },
  {
    "name": "Pratapgarh Junction",
    "code": "PBH",
    "state": "Uttar Pradesh",
    "city": "Pratapgarh",
    "latitude": 25.8969,
    "longitude": 81.9428
  },
  {
    "name": "Janghai Junction",
    "code": "JGJ",
    "state": "Uttar Pradesh",
    "city": "Janghai",
    "latitude": 26.2642,
    "longitude": 82.6739
  },
  {
    "name": "Zamania",
    "code": "ZNA",
    "state": "Uttar Pradesh",
    "city": "Zamania",
    "latitude": 25.419,
    "longitude": 83.56
  },
  {
    "name": "Gyanpur Road",
    "code": "GYR",
    "state": "Uttar Pradesh",
    "city": "Gyanpur",
    "latitude": 25.334,
    "longitude": 82.971
  },
  {
    "name": "Mau Junction",
    "code": "MAU",
    "state": "Uttar Pradesh",
    "city": "Mau",
    "latitude": 25.9417,
    "longitude": 83.5611
  },
  {
    "name": "Azamgarh",
    "code": "AMH",
    "state": "Uttar Pradesh",
    "city": "Azamgarh",
    "latitude": 26.0685,
    "longitude": 83.1836
  },
  {
    "name": "Ballia",
    "code": "BUI",
    "state": "Uttar Pradesh",
    "city": "Ballia",
    "latitude": 25.7661,
    "longitude": 84.1499
  },
  {
    "name": "Ghazipur City",
    "code": "GCT",
    "state": "Uttar Pradesh",
    "city": "Ghazipur",
    "latitude": 25.5881,
    "longitude": 83.578
  },
  {
    "name": "Pilibhit Junction",
    "code": "PBE",
    "state": "Uttar Pradesh",
    "city": "Pilibhit",
    "latitude": 28.63,
    "longitude": 79.804
  },
  {
    "name": "Mailani Junction",
    "code": "MLN",
    "state": "Uttar Pradesh",
    "city": "Mailani",
    "latitude": 28.294,
    "longitude": 80.316
  },
  {
    "name": "Lakhimpur",
    "code": "LMP",
    "state": "Uttar Pradesh",
    "city": "Lakhimpur Kheri",
    "latitude": 27.944,
    "longitude": 80.778
  },
  {
    "name": "Khurja Junction",
    "code": "KRJ",
    "state": "Uttar Pradesh",
    "city": "Khurja",
    "latitude": 28.2516,
    "longitude": 77.857
  },
  {
    "name": "Bulandshahr",
    "code": "BSC",
    "state": "Uttar Pradesh",
    "city": "Bulandshahr",
    "latitude": 28.407,
    "longitude": 77.8498
  },
  {
    "name": "Hapur",
    "code": "HPU",
    "state": "Uttar Pradesh",
    "city": "Hapur",
    "latitude": 28.729,
    "longitude": 77.776
  },
  {
    "name": "New Delhi Railway Station",
    "code": "NDLS",
    "state": "Delhi",
    "city": "New Delhi",
    "latitude": 28.642,
    "longitude": 77.2207
  },
  {
    "name": "Anand Vihar Terminal",
    "code": "ANVT",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.6508,
    "longitude": 77.3152
  },
  {
    "name": "Old Delhi Railway Station",
    "code": "DLI",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.6641,
    "longitude": 77.2273
  },
  {
    "name": "Hazrat Nizamuddin",
    "code": "NZM",
    "state": "Delhi",
    "city": "New Delhi",
    "latitude": 28.5881,
    "longitude": 77.2507
  },
  {
    "name": "Sarai Rohilla",
    "code": "DEE",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.6758,
    "longitude": 77.1874
  },
  {
    "name": "Delhi Cantt",
    "code": "DEC",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.5797,
    "longitude": 77.1345
  },
  {
    "name": "Delhi Shahdara",
    "code": "DSA",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.6725,
    "longitude": 77.2933
  },
  {
    "name": "Subzi Mandi",
    "code": "SZM",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.7041,
    "longitude": 77.2202
  },
  {
    "name": "Tilak Bridge",
    "code": "TKJ",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.6255,
    "longitude": 77.249
  },
  {
    "name": "Lajpat Nagar",
    "code": "LJN",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.5669,
    "longitude": 77.2436
  },
  {
    "name": "Okhla",
    "code": "OKA",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.5356,
    "longitude": 77.2722
  },
  {
    "name": "Tughlakabad",
    "code": "TKD",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.5074,
    "longitude": 77.2793
  },
  {
    "name": "Bijwasan",
    "code": "BJW",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.507,
    "longitude": 77.082
  },
  {
    "name": "Patel Nagar",
    "code": "PTNR",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.659,
    "longitude": 77.173
  },
  {
    "name": "Kirti Nagar",
    "code": "KRTI",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.652,
    "longitude": 77.143
  },
  {
    "name": "Naraina Vihar",
    "code": "NRVR",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.622,
    "longitude": 77.128
  },
  {
    "name": "Delhi Indrapuri",
    "code": "DINR",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.684,
    "longitude": 77.112
  },
  {
    "name": "Dayabasti",
    "code": "DYBH",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.671,
    "longitude": 77.214
  },
  {
    "name": "Shivaji Bridge",
    "code": "CSB",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.639,
    "longitude": 77.243
  },
  {
    "name": "Pragati Maidan",
    "code": "PRGD",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.615,
    "longitude": 77.246
  },
  {
    "name": "Lodhi Colony",
    "code": "LDCY",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.592,
    "longitude": 77.236
  },
  {
    "name": "Chanakyapuri",
    "code": "CPUR",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.597,
    "longitude": 77.184
  },
  {
    "name": "Sarojini Nagar",
    "code": "SOJ",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.575,
    "longitude": 77.202
  },
  {
    "name": "Delhi Safdarjung",
    "code": "DSFJ",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.578,
    "longitude": 77.208
  },
  {
    "name": "Sewa Nagar",
    "code": "SWNR",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.585,
    "longitude": 77.225
  },
  {
    "name": "Barar Square",
    "code": "BRSQ",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.569,
    "longitude": 77.258
  },
  {
    "name": "Delhi Kishanganj",
    "code": "DKJ",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.688,
    "longitude": 77.202
  },
  {
    "name": "Adarsh Nagar Delhi",
    "code": "ANVR",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.713,
    "longitude": 77.185
  },
  {
    "name": "Azadpur",
    "code": "AZP",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.708,
    "longitude": 77.179
  },
  {
    "name": "Badli",
    "code": "BHD",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.715,
    "longitude": 77.21
  },
  {
    "name": "Shakur Basti",
    "code": "SSB",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.679,
    "longitude": 77.164
  },
  {
    "name": "Narela",
    "code": "NRL",
    "state": "Delhi",
    "city": "Delhi",
    "latitude": 28.851,
    "longitude": 77.095
  }
];

// Color mapping for states
const stateColors = {
  'Bihar': '#DC2626',
  'Uttar Pradesh': '#2563EB',
  'Delhi': '#16A34A'
};

// Global variables
let map;
let markers = {};
let layerGroups = {
  'Bihar': L.layerGroup(),
  'Uttar Pradesh': L.layerGroup(),
  'Delhi': L.layerGroup()
};
let filteredStations = [...stationData];
let searchTimeout;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeMap();
  addStationMarkers();
  setupEventListeners();
  updateStatistics();
  fitMapToBounds();
});

// Initialize the Leaflet map
function initializeMap() {
  map = L.map('map', {
    center: [27.136, 81.301],
    zoom: 6,
    zoomControl: true
  });

  // Add OpenStreetMap tiles as base layer
  const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(map);

  // Add satellite imagery layer with fallback
  const satelliteLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    attribution: '© Google',
    maxZoom: 18
  });

  // Try to add satellite layer, fallback to terrain if needed
  try {
    map.removeLayer(osmLayer);
    satelliteLayer.addTo(map);
  } catch (e) {
    // Fallback to terrain layer if satellite fails
    const terrainLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenTopoMap contributors',
      maxZoom: 17
    });
    map.removeLayer(osmLayer);
    terrainLayer.addTo(map);
  }

  // Add labels layer on top
  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.png', {
    attribution: '© Stamen Design, © OpenStreetMap contributors',
    maxZoom: 18,
    opacity: 0.7
  }).addTo(map);

  // Add layer control
  const overlayMaps = {
    'Bihar Stations': layerGroups['Bihar'],
    'Uttar Pradesh Stations': layerGroups['Uttar Pradesh'],
    'Delhi Stations': layerGroups['Delhi']
  };

  // Add all layers to map initially
  Object.values(layerGroups).forEach(layer => layer.addTo(map));
}

// Add station markers to the map
function addStationMarkers() {
  stationData.forEach(station => {
    const color = stateColors[station.state];
    
    // Create custom marker
    const marker = L.circleMarker([station.latitude, station.longitude], {
      color: '#ffffff',
      fillColor: color,
      fillOpacity: 0.8,
      weight: 2,
      radius: 8
    });

    // Create popup content
    const popupContent = `
      <div class="popup-content">
        <div class="popup-title">${station.name}</div>
        <div class="popup-details">Code: ${station.code}</div>
        <div class="popup-details">City: ${station.city}</div>
        <div class="popup-details">State: ${station.state}</div>
        <div class="popup-button">
          <button class="btn btn--sm btn--primary" onclick="openStationModal('${station.code}')">
            View Details
          </button>
        </div>
      </div>
    `;

    marker.bindPopup(popupContent);

    // Add hover tooltip
    marker.bindTooltip(`${station.name} (${station.code})`, {
      permanent: false,
      direction: 'top',
      offset: [0, -10]
    });

    // Add click event for modal
    marker.on('click', function() {
      setTimeout(() => openStationModal(station.code), 100);
    });

    // Store marker and add to appropriate layer group
    markers[station.code] = marker;
    layerGroups[station.state].addLayer(marker);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Search functionality
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', handleSearch);

  // Filter checkboxes
  ['bihar', 'up', 'delhi'].forEach(state => {
    const checkbox = document.getElementById(`filter-${state}`);
    checkbox.addEventListener('change', handleFilterChange);
  });

  // Modal close events
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('station-modal').addEventListener('click', function(e) {
    if (e.target.id === 'station-modal') {
      closeModal();
    }
  });

  // Escape key to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// Handle search functionality
function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase().trim();
  
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    if (searchTerm === '') {
      // Reset to show all stations based on current filters
      applyFilters();
      return;
    }

    // Filter stations based on search term
    const matchingStations = stationData.filter(station => 
      station.name.toLowerCase().includes(searchTerm) ||
      station.code.toLowerCase().includes(searchTerm) ||
      station.city.toLowerCase().includes(searchTerm)
    );

    // Hide all markers first
    Object.values(markers).forEach(marker => {
      Object.values(layerGroups).forEach(group => {
        if (group.hasLayer(marker)) {
          group.removeLayer(marker);
        }
      });
    });

    // Show only matching markers that pass current filters
    matchingStations.forEach(station => {
      const checkbox = getStateCheckbox(station.state);
      if (checkbox && checkbox.checked) {
        layerGroups[station.state].addLayer(markers[station.code]);
      }
    });

    // Fit map to matching stations if any found
    if (matchingStations.length > 0) {
      const group = new L.featureGroup(matchingStations.map(station => markers[station.code]));
      map.fitBounds(group.getBounds(), { padding: [20, 20] });
    }
  }, 300);
}

// Handle filter changes
function handleFilterChange() {
  applyFilters();
}

// Apply current filter settings
function applyFilters() {
  const searchTerm = document.getElementById('search').value.toLowerCase().trim();
  
  // Get current filter states
  const filters = {
    'Bihar': document.getElementById('filter-bihar').checked,
    'Uttar Pradesh': document.getElementById('filter-up').checked,
    'Delhi': document.getElementById('filter-delhi').checked
  };

  // Apply filters to layer groups
  Object.entries(filters).forEach(([state, isChecked]) => {
    if (isChecked) {
      if (!map.hasLayer(layerGroups[state])) {
        map.addLayer(layerGroups[state]);
      }
    } else {
      if (map.hasLayer(layerGroups[state])) {
        map.removeLayer(layerGroups[state]);
      }
    }
  });

  // If there's a search term, re-apply search
  if (searchTerm) {
    handleSearch({ target: { value: searchTerm } });
  }

  updateStatistics();
}

// Get checkbox element for state
function getStateCheckbox(state) {
  const stateMap = {
    'Bihar': 'filter-bihar',
    'Uttar Pradesh': 'filter-up',
    'Delhi': 'filter-delhi'
  };
  return document.getElementById(stateMap[state]);
}

// Update statistics display
function updateStatistics() {
  const counts = {
    'Bihar': 0,
    'Uttar Pradesh': 0,
    'Delhi': 0
  };

  // Count stations by state
  stationData.forEach(station => {
    counts[station.state]++;
  });

  // Update displays
  document.getElementById('bihar-total').textContent = counts['Bihar'];
  document.getElementById('bihar-count').textContent = counts['Bihar'];
  
  document.getElementById('up-total').textContent = counts['Uttar Pradesh'];
  document.getElementById('up-count').textContent = counts['Uttar Pradesh'];
  
  document.getElementById('delhi-total').textContent = counts['Delhi'];
  document.getElementById('delhi-count').textContent = counts['Delhi'];

  const total = counts['Bihar'] + counts['Uttar Pradesh'] + counts['Delhi'];
  document.getElementById('total-stations').textContent = total;
}

// Fit map bounds to show all stations
function fitMapToBounds() {
  const allMarkers = Object.values(markers);
  if (allMarkers.length > 0) {
    const group = new L.featureGroup(allMarkers);
    map.fitBounds(group.getBounds(), { padding: [50, 50] });
  }
}

// Open station details modal
function openStationModal(stationCode) {
  const station = stationData.find(s => s.code === stationCode);
  if (!station) return;

  document.getElementById('modal-title').textContent = station.name;
  document.getElementById('modal-code').textContent = station.code;
  document.getElementById('modal-city').textContent = station.city;
  document.getElementById('modal-state').textContent = station.state;
  document.getElementById('modal-coordinates').textContent = 
    `${station.latitude.toFixed(4)}°N, ${station.longitude.toFixed(4)}°E`;

  const modal = document.getElementById('station-modal');
  modal.classList.remove('hidden');
}

// Close modal
function closeModal() {
  const modal = document.getElementById('station-modal');
  modal.classList.add('hidden');
}