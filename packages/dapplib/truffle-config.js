require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remain modify grace cricket blue transfer'; 
let testAccounts = [
"0x49d93a46e2f68c732f6a0033c60a1b1106855673220ed2be7c8c0a0f86008125",
"0xb4fdf9b8e73e5f324dcc75ab19174f7d212cffa2f740967d0177e9d4d53dc80b",
"0x3c40a0a79247251ca5a60f01b7b95bec3ab77543bbbf46b15987d04c30a177f4",
"0x2d1514f598bef9f30a4456d880b79b8b3432a53afa739fb7696ae92a223c970a",
"0xb1d5aea5eb443338c7f487c4cd1c1fefecbdfa6147333b81b4ceecdb1424fc73",
"0x8642421f41f8f6729515cd9df4cda7f548389ef2a248f22553388e5d23414f75",
"0x20a35d1382b8dd14c006b606f42c71bf9007907356d0a7d72f7fe329ea15e135",
"0xc1fd6ea8f850934d1e9187c544725bcb85ea7ebf72aabade7fecf19db4cc57fc",
"0xe1597c6f2b90ced6463818da48eefbf33c0c906e784f0d5ebc5e5135bb76d816",
"0xfce9a774be21ec200b5c5b3969e277fed1584b7cf0c01006ddbe35871bcafed1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
