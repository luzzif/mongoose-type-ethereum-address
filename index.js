const mongoose = require("mongoose");
const { isAddress } = require("web3-utils");

function EthereumAddress(path, options) {
    mongoose.SchemaTypes.String.call(this, path, options);
    this.validate(
        value => isAddress(value),
        options.message || "invalid Ethereum address"
    );
}

Object.setPrototypeOf(
    EthereumAddress.prototype,
    mongoose.SchemaTypes.String.prototype
);

mongoose.SchemaTypes.EthereumAddress = EthereumAddress;
