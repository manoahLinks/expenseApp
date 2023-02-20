import React from "react";

const AccountTable = ({accounts}) => {
    return ( 
        <div className="grid grid-cols-1">
            <table className="table-auto text-xs text-center">
                <thead>
                    <tr className="grid grid-cols-5 border-b">
                        <th className="px-4 py-2">Account Name</th>
                        <th className="px-4 py-2">Pin</th>
                        <th className="px-4 py-2">Total deposits</th>
                        <th className="px-4 py-2">Total withdrawals</th>
                        <th className="px-4 py-2">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts && accounts.map((account) => (
                        <tr className="grid grid-cols-5 hover:bg-primary hover:bg-opacity-20">
                            <td className="px-4 py-2">{account.name}</td>
                            <td className="px-4 py-2">{account.pin}</td>
                            <td className="px-4 py-2">{}</td>
                            <td className="px-4 py-2">{}</td>
                            <td className="px-4 py-2">{account.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default AccountTable;