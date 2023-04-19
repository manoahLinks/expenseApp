const AccountGrid = ({accounts}) => {
    return ( 
        <div className="flex flex-col block gap-y-2 md:hidden bg-white rounded-lg p-2">
            {accounts && accounts.map((account)=>(
                <div className="flex border p-1 rounded-md">
                    <h4>{account.name}</h4>
                </div>
            ))}
            
        </div>
     );
}
 
export default AccountGrid;