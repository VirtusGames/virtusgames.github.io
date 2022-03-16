'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4802fcebd761ca4f04c9a6320330fd10",
".git/config": "ad9bf75b87f0215468d8f022d983a1e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b9e627c1490c002e632cd8e43cca9265",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "210aef15dfebc158fe0e3f08c06cfeaf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "27ac2267357e42ad77ec96d998a20923",
".git/logs/refs/heads/github-pages": "a0b9be3af63530f6b48b50d8746db4fc",
".git/logs/refs/heads/hasan": "b41fe8ffbb924d86e773ff584ba35a80",
".git/logs/refs/heads/main": "eec4242c2e808da87a26a8e2d371d45b",
".git/logs/refs/remotes/origin/hasan": "f99400e1d887228e2078f149e5fc5029",
".git/logs/refs/remotes/origin/main": "633a8370fbc3f2b580ded0a90e256775",
".git/objects/03/0179d6d230ed9ac9af2b0fde78858e3dce0fb1": "42119d431e27736f61e5590c68c4939f",
".git/objects/03/71080737d98bb0b1d6cafeae83837ef156c1df": "af52bfdd70d5e113ec0f1bfbf48c2499",
".git/objects/05/f49751bdbcaeee4c2982971ee17af79720a246": "58261ba0f00a2521c030a0c989fb33cc",
".git/objects/07/efb4fd4597f7d784f9d0a7b1cb20d401d169bd": "3857ca513b0aa9b8ba365fdef46f34d9",
".git/objects/08/2c3c54c03b657d2751d5016685f16e440082be": "1af9a6b00ee4a00629bd474a2bb236fa",
".git/objects/0a/f5a565d291e2cf021cdf09525636be4236a2db": "92072080c6412d3ffb3bbccd7bad823d",
".git/objects/0b/53b9acdfea3f1a40ddc20a31b865e0e67499c6": "52a1567be1707592f0eefe22356d18b1",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/405bd2b1c62fb04e1efbd626a6ec7e1b5a724a": "62fd044820a89b3087a147dbe753e615",
".git/objects/0f/f01f83542c7a6c742dbb33c6e80fd86298b157": "a71195c89456aa78c0227d1ea049eaa8",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/14/f79995d73451da812d273ef82ce379fd7a07d9": "11c97ee051e33e7d3f9066795e83de59",
".git/objects/15/4c4c900e2a3dab90b57cb61f2f94f2efd20587": "d4b33c640e0205db96d18ca90db47e39",
".git/objects/18/9c3193289197ce8b5180256acc88d96898ba2d": "957af38d49a9e2e156fdbab65c4a5df4",
".git/objects/1c/8a531215d0f86dc621cc3a13256fea18dcfa0d": "6c6b8dfd521cc2ec5b4de1864d834ca6",
".git/objects/1d/845105846c4b1b7164571b90f0f695566bb2e2": "be019f8182c130aa2b5b017d7e4ffd27",
".git/objects/1d/c7e888995a1893171bdf1bb9be41c2d6685ccc": "a617cc51f8773ae80410cb79331a7248",
".git/objects/1e/c448ce75b20a3c217f964e72ff9d73797a3233": "be0069a042a2157d38cd08b0cf59c146",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/c4d9696af2901e13f692069ab536bc3fef3243": "dee47d9a81a6e23f1aa13c1220fe7d8b",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/33/8cebfadf97c242f873b9b0d7ae3c263781f076": "881b7809b08c2f2a25dfe4cee639e1dd",
".git/objects/34/014bcb1a8047c4e99dfb47d6f5d6c83b5c0a62": "a8a781a2eceaabdfec8cd9c322e42317",
".git/objects/35/bc0d8ec146e571e6b5f4526e3e6ff266b5c558": "ceb044722fd878d44281bfe94dcd6a1e",
".git/objects/37/3c32024462c55d383c007461d7ac9857b4f714": "3396c075c798a6a53751758c2bdf5284",
".git/objects/39/2111a66b62ef72c460b18de3ed203e0db38c39": "77f1f672ed9ddbd743331282a100a712",
".git/objects/3a/7235c012b174b1cf96abfe1eaf257924dd8ad5": "1f2e1610f5a0e7e64d347cb02073572a",
".git/objects/3d/f7a4859bb86b2def91374666f1e342cb2dfff8": "5d62c379fcc314a882fa95362b0467a8",
".git/objects/40/79361738dae390e2dba090538ed64c0b9d6aef": "79ac22b4685bb5f5f20f266beaf73262",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/23cf17f55c885fe451f28cb45d249cb4ceaad5": "5e656f195440f5d98fb6f854987c7d8b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/0219181abd832fc7b094bb16cfbe759a6151b2": "54a4aab67a4d5f7377dea41d7c7467b8",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/e369f2c91a5357e607c67dd17290483cc66945": "a797a118be692efebc4e6c9d13eeb673",
".git/objects/54/2eec390664ca54ad94a04879af9219b145b3af": "34c17a2183d7a97278e9dae780046d00",
".git/objects/56/67862d014ebfbd7c90fc93905c26f9e8123b34": "b396b5eccb859cb07e4abda3561a73f2",
".git/objects/57/4ec444561247e218efce749b5ebccef4af8f5f": "590a11eaf27b170f64251a0aad65e773",
".git/objects/58/2eca5d8a54b782ce31cab896c05dafd86d6631": "497ac7457615c27b3fd3b96620f0bdeb",
".git/objects/59/6332185d751f60377c5f470520ff847aa5cf10": "d34f94e3bab80ae4f92208839fd339f2",
".git/objects/5a/de6d883be62e8a43f8f1e61e60842982899719": "24e429113323f128857564a2ca40a50c",
".git/objects/5b/8d2cba8a30378e9feef2cc6e9ef7c393f326d2": "643481a762343e441c5c6d33410f2c8a",
".git/objects/61/95f3e62a18e9b858607f141e606f007f2a37e3": "0b166eb2296516caa0f485722aa69ed8",
".git/objects/64/72543bf8327d4ba6a7449d8664fe9470f0fa66": "9d2a312187f0497bbea2103cc83d06fa",
".git/objects/69/2507d1bbdb642cd69aa0b2e204d8d8d988f723": "c02cb20e2f8c55c08c76c0a750bd915c",
".git/objects/6e/4b1f17b1c038a9cfe833d5ad7bc10e7f7c909e": "89e740e535ed9ca2d0ad2c470ae1946c",
".git/objects/70/47dd4ab1c2faa11d8c0d08d19c7df8bc0b6694": "3a13a60aeacc173ea00fb82954026716",
".git/objects/71/706444ed518e4f69000f53eeef63d8e6a8cd44": "0d1791bee221525db216e2b50eb4fa8d",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/12ff4305df8e7bd3717745e071927bea178cba": "556a82687181fa2c357a6870e737b979",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/aa302a523f143d7dc46a4fc8ea7661f741b5f9": "72c2c62bdfc5b4558a1d9319d31049a9",
".git/objects/7c/09660093584f7c960ada9e87ce889127cee7af": "cdc0c2fd7cef099b7337d0a246625388",
".git/objects/7f/2863b66d92de413c6ab598dbd2cc84eb2049f7": "3f429295c4450335d07b20558e3c56aa",
".git/objects/7f/7e09b478f9d1b2f05601af51e969bd3ee242e7": "b0b5bcabab2171005ac21f8dd6889e96",
".git/objects/81/0fca5dbb87df73bb3087f485f3b2ce3fd37f05": "23522cf6ad529bef27c60eba1f431e78",
".git/objects/85/23897a6c966bfd0fa3f9e4f5a5597c25dadcd5": "a9a7312f9770b84be82142c7a5de30cb",
".git/objects/85/938b93a454ea0ec65faf930d6b92c16aa3d42a": "4ba2e97f7233482f85b06e72dedea14c",
".git/objects/88/7953a00bc567ebd6851072cf6f4dd412112822": "fa8d43c3696ec854bd9c140b7204e6e2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/a28200d0ae66af5e66ee59410ec20481c8f36d": "fd156852e58777cd63348be0aa13ab71",
".git/objects/8a/a891601fe6d82dbc6cf4a6e31c55f4167fd34f": "530b3a5a2463327ce7c7b36a608643cf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/cc5284b052ad61a5543fdb5a0b52f265930ff8": "c8bccb49445153953de4b56eb52a0520",
".git/objects/8f/dc6d5bba09f8d45f600b85acd6f86c8c8a1f4a": "eea28a113311b07c38311eb05a6041e4",
".git/objects/92/2a768a184385f5e0d56a705745c71312e26f1a": "4169171cf9acc6fe8fcdc27302d8ea98",
".git/objects/9b/1a2c244ea8ef7ac01a9f28ee8d0ab11d194478": "cf0979a88a2dd1f5392ac5c503d40ccd",
".git/objects/9b/f796bf583ba276d3c010d19a889040527617a3": "21466bc4c6126d30c01dd00212fa2398",
".git/objects/9d/4cebc1bff00fa2ae0382e0e66f5549160769b0": "8d77a98c4fa17651b501bcd0a9c0fb94",
".git/objects/9d/f64a076526cc21b8b621713f6900b1773e81f5": "13d371bd8da4d959b5a47482c2fbcfc4",
".git/objects/9e/507654764a2cb1b79ab458a1e9720dd66623b0": "1752209ef86e008ba32c7e187484efb5",
".git/objects/a0/ec24e26ebfcc2bf81a6344200fcf89e95817ae": "cf1adae62548e8262ae0c2119a45c28c",
".git/objects/a1/166690920c5290dce52124849b1d4c78f03acf": "8758d3a617d86d07f2e0c648095e5963",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/e530aa2513e9dff7d2c6559a65fef80ee7607f": "c1e709aeca3738745696d411233bea58",
".git/objects/a5/0a3a9cb4c56784cbc90f1e7b3c38964b08a60f": "bbcc9a7656ea6c0dd813a9bbe088bc54",
".git/objects/a7/45ec683374d75a280f4c8800378a62ba9d2753": "ddbb1fb137bbcac1ca777924698e44cf",
".git/objects/a8/7f60375e623506a6a2c0c2fbb234daa6c2926c": "3941eb10cf664e1770b261dc279396ea",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/83189d41c729906d24540fc9b6b5f334ffcbdc": "a1bf5ad6d4dc455a9d41aab2e57e8083",
".git/objects/b3/94d8ec0dbd0247e041de3bf8c0e6c4c726e0fb": "7990ae997ebdc7ff943ab6038b6168de",
".git/objects/b4/e193f404c003b57d6a579b1c3af6cc954e407b": "62843f5b1b2db11854ff361784f14418",
".git/objects/b5/59a5ca9d56de687100f6fbeace441cf999ab5c": "47687ecd41ff5ef0c6a580ac11f7e0ec",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3aeaf3432c7b4437a2169932b2a504fa1dd3b3": "50171a00857ff05b96800e4938dde740",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/1c439eb69311631fa42153d3edb6b4ed8f807c": "a4cd4c1fdf4f9195be27a01fbcf133f1",
".git/objects/bb/8534c8581605716abee016a7c0b5477a8999a9": "ceb66c78283fb71302d12ff8fe2cf3e3",
".git/objects/bb/eb7abf3901fa34f80b26dbaa2802ccb1dbf86b": "02fc9f8d2afd6ccdb95430f3910f2069",
".git/objects/bd/654eb2154593548d3a354a28dd527fb66e4a3b": "4b5ca54824daf90882e79e42d3f5a654",
".git/objects/bd/dd37411517a478c2f270e1ac92c705fd216c35": "3a2ea7e6f8932b8ea9ae6cf1e0c565ed",
".git/objects/c3/a36d06bdab43f361bb75ad063ad9e26e3e7650": "9141583a260e1d4705c2f7ed1ea97e71",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cb/7a9e14748f1f75250a3a92a7497a73b07faef3": "b193d13eee1d1d611f925ecb9da7e160",
".git/objects/cd/5c3fb55aad06a491b61b25ac4f5f126d43a8a1": "3b9c922f295f7d9535f336c62d2356a5",
".git/objects/cd/864b9f8cb2073faccbabc17e6e79958bcc5911": "ba4cf3ef3c6dfeea80445e20afe1ff2b",
".git/objects/ce/d80a0a1643bd18d381112781ba822d44cadce6": "611c60a714ccbfeb179a1316cb3e672f",
".git/objects/d0/4eb9d9c8d23919f2f1c5c18045646198d376fb": "70f77514391f74b8d2a64738c95f1f40",
".git/objects/d1/9685cc59581d868a8e15ae55484c7a8d53ea62": "86021b945aebfca67512868867c5be2f",
".git/objects/d2/a690ea257f5b340310a6e22cb7b298d9b87abf": "f1af0e4cf6912f160f5d4cc4c01e6f9f",
".git/objects/d4/8a2fc4ca3c099f53f3633ce0655db25d1cc8ad": "5dfc5881b44796eaebd947c8f2beb669",
".git/objects/d6/3a3c11ceb88b17e51cb613a74f38610906e4b1": "310ee71cfaf231a0206c996fd1f9807c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/eb2c8cd0260da4939ee1fe400bbf9cf7933d0d": "ffadce79c7c6019349ffc844e2ca011b",
".git/objects/d9/d8e90ec89e63cf4ba9b7d42e2c5433a48b05c0": "5b6c1941e7e302b9505bc14312d714b0",
".git/objects/da/6b3b5d8086f34e8713dfc20251d509b2f31a44": "628b8ddb8b7f793dbfed5bcd3c3ce3d2",
".git/objects/da/ba0bd546044574c56f6ecc5e8d101d05e2a59b": "4b59794fe5889ff44f7c35c397f62c64",
".git/objects/dc/0abbac02bc28124afef260351896e0b5aaefa0": "845778191b0f3de673cf5a56039c1926",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e2/4df52ca59894d1d343344e5a02ee34117bee2c": "96c310deb8dd1035455e948f78a32925",
".git/objects/e2/756931c1a29a56ffdb7832421f34c0780ac718": "78330bd502becd5ac0afe79fedf60218",
".git/objects/e4/7f334e880dbb60df12140af570be92d2a6bb83": "d938a50de0a10f17212b5ce1690c4c07",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/2db392eaf089e2b92770e9440f79e4f16ee4e6": "b1494275fd05992d8615fa0bbd8f2751",
".git/objects/e6/6c51fb3c03896f90a09ed1d9bf34094ddc0fcb": "bd8be3809e6134a3cb856d760c2956d1",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/a3f1d4a6e6b109a2aa7632822f7846d3e481f3": "f65054d8fbd0633b4f76db9f8899c720",
".git/objects/f1/c228dd5f34cf0020dcbfa781ff0494c20b0d2f": "71aac3ba122a58802e6292d9c2c73308",
".git/objects/f4/e090e707f6ef1c2d1926fdd757d7dfc9db2d84": "55656fef3d4306ae0b4b170d0120599c",
".git/objects/f5/6b6e607ef921c3abe5ef03d780f6c6174403d4": "73d44c73f064cd31757dfa097bf16784",
".git/objects/f6/96584e40355b26a4d4400ebfc21cfd3b26e311": "790441fd251818936d9af89c232af678",
".git/ORIG_HEAD": "7f542855f4422ce08625f47c6b339cf2",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/github-pages": "e9b6cce6e313c28cd7051bc8eed6b554",
".git/refs/heads/hasan": "d6792021d0aa1a83a040b99aa15bbb24",
".git/refs/heads/main": "7f542855f4422ce08625f47c6b339cf2",
".git/refs/remotes/origin/hasan": "d6792021d0aa1a83a040b99aa15bbb24",
".git/refs/remotes/origin/main": "7f542855f4422ce08625f47c6b339cf2",
"assets/AssetManifest.json": "fce48d658f97f222209719feea0e328c",
"assets/assets/virtus.jpeg": "5bd77f6884825219416181fcdaf3cc01",
"assets/assets/virtus128.jpeg": "83219ad0c2c42e6c34a0c28f6c82d952",
"assets/assets/virtus16.jpeg": "a3251c40819fe568587395e14502392c",
"assets/assets/virtus28.jpeg": "4d83f104daeb7863083481797b42bade",
"assets/assets/virtus64.jpeg": "9fd81c669587f5ed949f56b5b8449264",
"assets/assets/virtus8.jpeg": "bd95cc730edb28fb429b25c78bd71099",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2ceedb153a9ddf191c47e7cb8b46fda6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "19139fff7f997000f65d291a7f8eef2f",
"/": "19139fff7f997000f65d291a7f8eef2f",
"main.dart.js": "54c53ff3c8e05498cc07db54d87d580a",
"manifest.json": "3539339f19858a8084b7cdc3b9001a6c",
"README.md": "a5f86a8cc127ee84b05d344c11b8ee01",
"version.json": "7209d9816eaa0e31867d69ac01531f74"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
