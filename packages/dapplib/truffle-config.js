require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stool dash stick push idea another army gaze'; 
let testAccounts = [
"0xad17955d6e76771aaee993f0f73b8bbf3cb0011538780bad4ea8769b9f1dc75e",
"0xe222f6e684eeeeb030063c872e7f6d5730f1fd61e5bc0f2d855f5e416a745d34",
"0x8249f4859861aeb2b22cc93585554ec4e66835807ac5c96f94b5d2c5ab39f017",
"0x1bade1312e9e22ab9919ad62a09b69d5f35f8a1a1864dc65c6a5c1edc244068c",
"0x2db7285801932bf46d39b77ade3bf97204871ed745813c69b6dcb54c32f0e455",
"0x312a1e041ef1442c381346ede69c2004ede4bab29d2c93ed8e80ac0c4363d89e",
"0x0fd703b6c90d6899fbdb28e10a80473258b6d7b6ea77dbbc731e3c89431d83ac",
"0xd573682ab2dd9dd285881c1df666b8db53e25ec3e93f1a02519a3c09bcf1a020",
"0x87644e8e13e039ad615bd38759e11dc94f0d0f129c4af4672af3b26102ac2d96",
"0xf7bfaafcefbd4d1017117198d4c3c9226a35d587fd237e54bf4237e59e147261"
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
            version: '^0.8.0'
        }
    }
};

