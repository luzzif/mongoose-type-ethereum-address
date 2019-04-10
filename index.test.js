const mongoose = require("mongoose");
require(".");

const Account = new mongoose.model(
    "account",
    new mongoose.Schema({
        address: mongoose.SchemaTypes.EthereumAddress
    })
);

describe("mongoose type ethereum address", () => {
    it("sould correctly validate a valid address", done => {
        new Account({
            address: "0xc1912fee45d61c87cc5ea59dae31190fffff232d"
        }).validate(done);
    });

    it("sould correctly validate an invalid address", () => {
        expect(
            new Account({
                address: "0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d"
            }).validate()
        ).rejects.toThrow(
            "account validation failed: address: invalid Ethereum address"
        );
    });
});
