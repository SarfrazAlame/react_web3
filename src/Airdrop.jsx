import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop() {
    const wallet = useWallet();
    const {connection} = useConnection()
    
    async function sendAirdroptoUser() {
        await connection.requestAirdrop(wallet.publicKey, 10)
        alert("Airdropped")
    }
    return (
        <div>
            <input type="text" placeholder="Amount" />
            <button onClick={sendAirdroptoUser}>Send Airdrop</button>
        </div>
    )
}   