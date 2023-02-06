'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "764c1c9385de00cb8690e6fcdb837c96",
"index.html": "b5630589459e8b272601d0dc6200e7c0",
"/": "b5630589459e8b272601d0dc6200e7c0",
"cropped-ACP-300x170.png": "3ba545978c4aea66dc6a62290eba0fba",
"CNAME": "5023054a628aa80a18c9b28bb259a723",
"Logo_ACP.png": "e075ceb5b66c0961e1e3018de8b8467b",
"main.dart.js": "921bd44e8ddb417467721f551a365824",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dea47a3bb2395c1ac6672d9b29f7df3c",
".git/ORIG_HEAD": "6403a4d272f3a602dcd8594066b14169",
".git/config": "5b7a3cac29b07cb767a0e88080a9e0d4",
".git/objects/59/6575c83f33d323a373cf17bd9910ee6a048ba9": "5cca87732ecad080d990d63fc3fe786c",
".git/objects/3e/7fc4a387b9d77d7bf77f117bcaab636f572e8f": "5a05b55b6b1cba0d4b7ebf1329f5440d",
".git/objects/50/e5ccfe713249790c74c3029811b90b92a7f902": "c76e0c949bece57f9f350387736d65c2",
".git/objects/57/a987362a02df8946eaf4be7a5706c0c7017a57": "41349781769a7b6150f3efa171575495",
".git/objects/6f/fc46496e23b420aec50f4707622137078ba433": "4fa03523d5a84a9b6b9eb5a55269a09a",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/9e/e04c272d4418a374396a8868c7abc792a88aea": "c2951cba3177ba451151870a16a93c43",
".git/objects/04/5d512e619b51d9ce4945e213aab1172a30e765": "0740f5b58b0d016ef2b758fe73fd8def",
".git/objects/6a/cd755772a9bcded9c927640c72256c2f0014ca": "60ab790349b68b5e9d0e16686bada629",
".git/objects/56/2dbdc2b5b9e6bdf51063856b96f8ae95f09079": "c65e0361ee7cba1f4d380a7e51e5a275",
".git/objects/67/8e315255518d0753df85d25cef01e9f29d9002": "fe641ca07e733838a604490a6a7c00d2",
".git/objects/93/95cb17d452ad00b708fb491b57cbeb0219f9e2": "a6ac1e2f48db8d2c2a2c7de4adf568ee",
".git/objects/94/54bfcb42979ee546b13ceb612762a18898f5bb": "38f94cbf0fe02acc653be27c30ce6a85",
".git/objects/60/561054f6ce8cf4e628a2f561eb227002d87641": "82d783509c68d0c2435212fd88df3cdd",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/02/b2a3997ca6e547329f5eb7bfca7791831d9392": "6571f2af15ba323f45c3a51a86e97c0e",
".git/objects/a3/9f98216ee3e3d5479323a61056774422c4af01": "2b0145a8c74fbd63999c2854809058bb",
".git/objects/ad/38f6a3e7cd2889aea284248991980368b29294": "f7205bfcac20e47dc6e8ba9c1f8144e8",
".git/objects/bb/49db05f21e14e6ef362f950d653cb3436223f2": "81afef096e9d7a9525fec935ad13c10d",
".git/objects/bb/0c0bc8394b9a963fddca1229d847182f09543c": "9b46d1430345925b5cb42a2624ffdfd5",
".git/objects/d7/c288dc0cbf7854ec15f97e5d24997973df4652": "927fb01ed43bfd7c8d7f03741e5346d2",
".git/objects/d0/6dd0d53b25e6169406565c4a96984f9bb2213e": "d881173128f450d4eda0bcd7afb598e6",
".git/objects/d0/c8efc3c92cf65a2857845580db7c9cbb9a339f": "50223507bdf817f111526f808be348a6",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/b3/8a2c918ea951c2ada5649ec85b53351dfd9369": "dbba85d5ba7a250b38e33a4c703ef812",
".git/objects/b3/70d381f303fe171724cca5f2b1b28bd70ab86e": "df37bd267c4b232ca34624a490fc5a57",
".git/objects/b4/e23081ebc578b329f2d7be00da5b8db6c52751": "c16c2f82fe5fdf368c90c11081f1205b",
".git/objects/a5/8439bb5972c7ca456627a718431d931776d0f9": "ad310a810e14c1fe9e376e39a93cc5bc",
".git/objects/a5/1688e1a7a71311c16be3464b787c33829954c1": "f43d9fd0db39cb91efc3edfe5a4c7947",
".git/objects/d8/304e8f0d5d216df77748df7ae57b02c5d732f4": "aad19095eb449b721f85330b823aa512",
".git/objects/d8/863835630a25b94561bb5a1364d43a23e4fba0": "3140ed547bd9cb65381e168ecae7ae95",
".git/objects/d8/a199492b21949513c68639901800c08c9181ac": "52fcf0a8684229aec5c3834bce53ce02",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/3479d45062184aa6a5e2dd8ea0103e594a9e36": "0dc0884d9e0a3cbeb7ea496769e98ce7",
".git/objects/c7/ff1867df640ffd766c1bd6cd5ea718b078cad6": "59ee816bbec718a3c2a894742b1164ed",
".git/objects/e3/5fe798258ad8782fa7ff151e8759b66f2780a7": "4b07abc0967f95a88e0999f5c2c6ed59",
".git/objects/cf/c520e730f6f55d514e4a3f76b114721f2b29c7": "38aab5eadf61f7dc559e6330c941bd51",
".git/objects/fe/bce31660e5ec40838fc3233dd87366186ad7df": "f9e53077914ebfec48e27111a9a14a75",
".git/objects/c8/bf5b55d78e55b8a879549f2db7239accc04170": "1059e79427e962ef4fb32d507f37566e",
".git/objects/4e/2ede9c47f7de28c325a2fc2aa38a152b69bb6e": "93baa3b3a0e240ebf85ac63b544104cf",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7d/d1682e7dca924be8eba87da2097fbcb8b01ee0": "a926a91c51d337985090fc58ce3f71b5",
".git/objects/7d/57d3c9f8505f503f07500cf6d8f7e8cf955564": "db4264c2a7b2d267a7ce1a3ab46d12e3",
".git/objects/7d/dae76e48b39ac0284aa3c97f6525ff2e82d0cb": "0d15e34501f7f489fb092b886c8ee923",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/29/8b8e19f2c11e001b1914e14d344b8de976c003": "0435bdf89e284a5ae57a6cb9aff7ab29",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/73/a8ccfce7e036b42a3d887f34f59b20b3880a08": "15ea0c84ae7965e7d4b480cb87c4e716",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8f/ce55cb4c03c401c02d7cf929d2093599409fba": "7e4b437a85a202894cfbd13b14a7d344",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/56ea756698b9049a546b004bf15136ef7b7e82": "6ab76c093ba62a0d194db0f80f27e88a",
".git/objects/4d/6ac54626355aaeac92beedea34851287596cce": "0bde8260a541f6aa99a34c8a76a97a2e",
".git/objects/75/e0b5e7c5380d1abd289d3ab9725ca232ddc7df": "d1693ca15b220ec75045e8df46d6c42f",
".git/objects/86/8c8f48af3cd6158eca767efaefbbb6d783b0b1": "93e826e602d2d0a6e54f24b2f0660a4b",
".git/objects/72/6fecc1487c505bf706c2b99da9bc9607afa8bd": "e9c267eec9060908fde8dc23110b92f2",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/4cfb5808ef5d50d9bdebe8031138be8f6c2d8f": "10201cce8d7674bb9ced83220eeac60f",
".git/objects/07/6ab6bd55136a32302de2bbddc24f5be11f00a2": "42b01340402e139e71cdacc1dc760d25",
".git/objects/00/1762c57a87527dba85fe65d84badfd7d26788a": "8df5531ea89ab8650cfe516c7b1933d6",
".git/objects/9a/b63267b618cbfe9083a8c3dfec09171337116a": "8aeb925709aa33b6b016ed179c9eafab",
".git/objects/5c/86ee4f2881c9594bcb22d78086121b2d3e8816": "1a138cedba3e3b6574206e1255cc3bdb",
".git/objects/5c/632542f21bb9aeb2b4b6a503d8b098b0fcaf74": "e9a40c7ab1a5ab9ba90c8987ca62167b",
".git/objects/96/5fe1e31a5c957323217673716f86daaec5144d": "faed978d42f81ea5eaeb25eef8392329",
".git/objects/96/6b3f1e84f6c9350441d0ef31a2cf12ba207786": "6c460a35549f2d694a23fcb445ee0151",
".git/objects/3a/e413458620982daeb962074529b320f13bde63": "dfea18bbbb70e511cfae7afeccd4e049",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/5e/cf481a3282ddd9a6da810a6ca1272fab6c9202": "4e6d306657039cf9d6de03c2362ccb1a",
".git/objects/5b/8ed39d268e44657bd2927d7a35162fafab47c0": "3b29f1190713300890e94e12ac5f4393",
".git/objects/06/b7510827f6b7c53b039b5fbd52c365b53366b2": "cba1912552fae453fa166450b07903e2",
".git/objects/39/e9a1f2d7533c8bf6ff60946bf80553d839d0f7": "50598a804ebdfd0fa2102f182cd7ff49",
".git/objects/99/8b37247ed9cacbab900dc2fe361214127f1e6c": "b2a347bb8b0f3737ae4dc76cd332a689",
".git/objects/52/9f1bfa2e0dfbe1de8f989e910efb95197c918d": "f1590cd02f1808a7aa1924367f6d7448",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/bb29e1f7a1c56125e25cfb799792b09a4a845e": "8b86faa0f8576dce90d7b3f01dc09eb4",
".git/objects/64/560151ccf56a17b3d673549acb17ac7eb945e4": "c7958198aafb3eb78801e86a03c85ddd",
".git/objects/90/50590f3ddf82ad8b989c0f695bd39b134b116b": "07b2edc88e41bd90f14c83b675d0ff80",
".git/objects/bf/351916eb882a93f33ef23d6d7e214128b836e1": "e11da3847915397871518060915607f8",
".git/objects/b8/de3a6e352cb696742d05557543a7c849f69c21": "e429cb2468aeb9a99c73a640efc9aa5d",
".git/objects/b1/0bf156ea1a3341d84a0196ff7e69e4cd2110fc": "1a3c7ee8a692ce8c41f36476b1769771",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/ab6f804a95fdbb3c40ea6e0cc7e28f5b60a159": "22203c8e42f8525fe5fa2be09a2d2c94",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/4762c5c64a4a980150be29961862670f9eedef": "9f3ac0eb1a8b2d2e5cadbee99befb1cf",
".git/objects/ea/9065065c8502acb1489766b6cef59984088544": "34babe568fcd083bde8f228f2a83e54e",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f7/5cfab84c2862ad22ad755344097b471eb15bc8": "006c091b0f9b432b845208e496be445d",
".git/objects/ff/ddbacd55426a988fe7f1e4f4ee7324c98c2573": "d79310251e2400e77b8671b7e9be50c8",
".git/objects/c2/44139bb9014e31b32a2e614d81947c0e32a6ee": "1e70cddead19cfa7cb88984592e9cc3a",
".git/objects/f6/1978537b81b18fea42ab628bdf66bd92df7741": "8ed535594b02dc51bf45c906a0357b96",
".git/objects/e7/6ee691e0a381f18ac1be3fdd8b2eff8e9babb6": "b8d7853172b518b8df2ec46989ace688",
".git/objects/ce/544d27674fb29abf228dd6e973f7f4db793350": "03adfb486417a7da46470ccbc854b46b",
".git/objects/ce/2869e7f94fc0fbf6f2c1cf55bfad20f7ab5ccc": "7e25af59aa1009a160e097a11b89cf9b",
".git/objects/ce/9dfc7830682e0bd968cbbfe697c4531eabc9f8": "faf79314f6cc60718ca2a9b649581c07",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/709b9172f8b0501977083ca77bc8e0b1ffec52": "58814dc7dc6778cdb55cad332b4611c4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/75a8b13c35d7e9e2f5f37acfa9d4de0ea57b41": "7fc82d2181826c8ef086d8081af36dd0",
".git/objects/41/4b977300147a305be0072828a13c506eac29e7": "b853a3069f31b6a921ff52a28d4c10e6",
".git/objects/77/ea8b44e99e251f7d224a17bf73ae17e0a07324": "9925d10a49d2458446e65b3d269f2dc1",
".git/objects/48/94af97df360d31664077232469098e7adfa473": "7a98c43476cd5a504b03538a2660e36d",
".git/objects/84/a89d0a2cfff1a728e9739dcef2de7d7e426836": "4c10079e09c0e9dcfc8bc05736d82c2e",
".git/objects/4a/43489f46acdcca9be5181afdb255c5231b6b8a": "2b6d72baca70b6628b47c84f281b144e",
".git/objects/23/3e699dc280c15df0d29aa1ad88bcbb28420619": "e92390e76434e4dc54834d8f89a14a29",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/15/67d715b4c66a8ae416ac046245f590cdc2d3ce": "5f46bbb5283b4b1a7f6d73a089731517",
".git/objects/12/6ce5febe097401fab4d5a4e2531c94381ecba1": "22cdabf77814e3c76dd34bcf74733f51",
".git/objects/1c/aba8bb3f310babe23ee107a05df6f0d739c819": "9a2acb63a8737ffdc036ac223afb480b",
".git/objects/40/a5793e6521693cf590e6182c90ccdaaa74124e": "cbef6d42496f76983d82308de649b91f",
".git/objects/40/61785513576461f7ed0b0ef2e3917af34ae3ca": "e929022abe1fef5dec58859bce078c99",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/0ae155acdcad8e84dfdfc86324d3502635895a": "de6b856037066adacb6e27d09a1c80ea",
".git/objects/8b/d7afb9bc1c4cf9a5cd8d8e9f848352ef38a234": "de06f003645ac265fb65a00219195e7e",
".git/objects/8b/790a16af95fbb401e828dd15ed1435ce95c0eb": "43ea5451e712d61f2e96603f4b15df79",
".git/objects/13/c0b058c205045b60367a6ba8a84d2fc96bcebf": "2b6f7585db3451694c6922a92afad93b",
".git/objects/8e/4c1c2c1d217c63aca3c14133f5861b83a5fbb1": "0c1cbbdc7985d05bd5668bc5e2e7f7be",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c69224eabe0ac4edbfa0cbd57081d0bd",
".git/logs/refs/heads/main": "63777d22561a3a50296fa220405b7dcd",
".git/logs/refs/remotes/origin/main": "f9e111748fff0cbe51ed4272ea1b6149",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "82a78de147f0117a5342a6b3709cc123",
".git/refs/remotes/origin/main": "82a78de147f0117a5342a6b3709cc123",
".git/index": "0a3824fc2f574009e48852c6d11e54c5",
".git/COMMIT_EDITMSG": "7f85845fe458007c41623a17f0e68cd1",
".git/FETCH_HEAD": "8c7b1b1f9124516e35a390d26afeb6e2",
"assets/AssetManifest.json": "e3c6ce9ed4bd516ae55b09038980cefa",
"assets/NOTICES": "d487949fbfc42b03b72b8349cc413ccc",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/shaders/ink_sparkle.frag": "5889a82b770cac3c7e59a232d9e9420a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/cropped-ACP-300x170.png": "3ba545978c4aea66dc6a62290eba0fba",
"assets/assets/images/Logo_ACP.png": "e075ceb5b66c0961e1e3018de8b8467b",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Outfit-SemiBold.ttf": "d85f24eb2925414028978bf10b2139d3",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
