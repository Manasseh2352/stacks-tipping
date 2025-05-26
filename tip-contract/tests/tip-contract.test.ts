import { Clarinet, Tx, Chain, Account } from "clarinet";

Clarinet.test({
  name: "Ensure that send-tip updates the total correctly",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    let wallet_1 = accounts.get("wallet_1")!;
    let recipient = `'${wallet_1.address}'`; // Add single quotes around the principal

    // Call the send-tip function
    let block = chain.mineBlock([
      Tx.contractCall("tip-contract", "send-tip", [recipient], wallet_1.address),
    ]);

    // Check the result
    block.receipts[0].result.expectOk().expectBool(true);

    // Verify the map value
    let tips = chain.callReadOnlyFn("tip-contract", "get-tips", [recipient], wallet_1.address);
    tips.result.expectOk().expectSome().expectUint(1);
  },
});