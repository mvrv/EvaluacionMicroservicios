// firebaseconfig.js
const { initializeApp } = require("firebase/app");
const { getFirestore } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');

// Configuración de Firebase utilizando credenciales del servicio
const firebaseConfig = {
  type: "service_account",
  project_id: "edos-84ac7",
  private_key_id: "6f0024b6c18425c1c499d94e06cfb14747e36a15",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCvCiFpFCCv/5Qk\nQqt/xIZYW2er9sjI+XogcZEYtxJH4siiQ6egdNVAycImww+luDzoheBxfp7kFHSy\ny95WFpc8nkfTY4fD5+glzBiQkxJ646vQAMXsE3dtsUkWrcjscjNc5dmIT1v09zOW\nwX+8UUEv4JXBRMPaVfM2KPzeAdIpIZOBOoYIWU5zHxyoiHoR3LKFSZFZ1fd8gI4y\nIpNH7lwHDB/RTfDrHoO1tavOXMI8jbFH+GJ1c0NRY5sXYOmmB2M4BlQRAbB2JDu/\nclxJdZSCyg7YYohH7EABuSKwPrHPnex2pTj3wOmYAZGGzXHUAoV1GRdx/Wb4A21z\ncm/xQDXZAgMBAAECggEAJYzXjoaAHamHMwEvb90t0eon8yLhv4WPfsLGNQZfEFdV\nIcRAQ2KU9g1iTnT1mCBORrajp81ZUkYWI94q4A6AGsO81lspfqwzJ9qhIXC/m+fY\nDasAyqyBaCGKc6hL7HdyT9lKQZz+te5LHan8mF5ZDOeR0NCK8H2US5fe6VR8LJDZ\nTovQx6Q2SfJJKY1X/2KkmNnes8zd7nSyR7RWrwDWgwEsLtZvLJ75xWU8oJBWNxzk\nqMNNsM69lS9hcyQIEu4OT/Xdf6DYYJ6+hQDlODEjPTX2VVdI8dZk/Fv9Xueh/0PH\nPjQfGECGNixqMbhubftTodYMGGo9tW2UFamrx0FTdQKBgQDro25nw1BHWx8udwPq\nWbCvVArF5j39B0hVGXalQ6yjC7HmHzDKvJH25E67Kd6FaCQ1nSeWvUjistrTypUl\nj37WE5s4xZT4/SaT3DmEBSqqqxZy5eUAtrdr5D6vdGxEXOzBW6aYSmfhFmDLUfd2\n37dgZKNebowIDh09tkbJx1pmZQKBgQC+KjCDyvSbpEAh1gvqHd1cSr4YUiEj0Ujo\nLvhxzfxGRlY9IxLbQuYl0GCy1j+45Ah4tcX549TFfMoueXB6P4J1715pUHP+2Lv5\ngzDwLFLTjIFbZrD2u716h0xgx/goW24XlOBw/bD4+tmOR9WU3nmTJEkq2Z7c4fIj\n5iBPirmQZQKBgQDUulVozZXC5YuP6hgZ0GDG1+tl38ckkBeH5BYNerv28g7nvk7R\nKE3qAxDkvRbLf0n5MOhVmIqdRnRxcVkWcKZD461lIlKsOfZC1DUEb5mmPBBnKA6G\nh22ttH+27Db1vKJsqS4MHFgNh6NYyqXKpospNZGbJde7SeqyFMVxUkzVVQKBgQCq\nvERsv9cYusLd3kk6PPAXQgAk4/BfMTNtS2bC/vdGvTYGlCwE8q6iOtHnH1d9EDfO\n8R08PGM3oNACJARprgXbDzxL//D1WfCDmFdi+9itmVQ3FR9Dl9IKZdmcd04GJfjV\ncVSF/jBbixWzmilYDNtI0eZjc5ofpTl7I83UvK/YxQKBgQCYNgl9jD+Sw89XhkoV\nfHLVbPaoVgd5BpjRalJtF9Wm0TWmxUEnWswQj22/6Vxaag9uz/yE4ZSztXy5ZJUI\n1kv3tEWM6rcxAxsy1P4iNV0Sx/ycRFLMJBGIc/EkMTxWVe5mufRjGU4gy197T8+N\n3O3yKMXEVH7U2YKlfxucRlyfJw==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-zip84@edos-84ac7.iam.gserviceaccount.com",
  client_id: "116057195658126338851",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zip84%40edos-84ac7.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Exportar db y storage
module.exports = { db, storage };
