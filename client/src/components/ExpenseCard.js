import React from "react";

const ExpenseCard = ({cards, click, click2}) => {

    return (
        <div className="grid">
            {cards.map((card)=>(
                <div key={card._id}  className="flex flex-col m-2 rounded-md shadow-lg bg-white">
                    <div className="flex justify-between">
                        <div className="flex bg-zinc-100 justify-center w-6/12 items-center">
                            <h4 className="font-semibold text-sm text-purple-800">Balance</h4>
                        </div>
                        
                        <div className="">
                            <h4>Account no.</h4>
                            <div className="flex items-center">
                                <h4 className="text-sm text-purple-900">{card.name}</h4>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-4 mx-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                                </svg>
                            </div>
                        </div>
                    </div>
        
                    <div className="flex flex-col items-center p-2">
                        <div className="flex items-center p-2">
                            <h4 className="text-sm">Total</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mx-2">
                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                            </svg>                    
                        </div>
                        <div className="flex items-center py-3">
                            <h4 className="text-xl font-semibold">N {card.balance}</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mx-2">
                                <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex">
                            <button onClick={click2} className="px-4 py-2 font-semibold border border-silver-100 rounded-md">withdraw</button>
                            <button onClick={()=>{click(card._id)}}  className="mx-3 px-8 font-semibold py-2 text-white rounded-md bg-purple-800">Fund</button>
                        </div>
                    </div>
                </div>
            ))}
            
        </div> 

        
     );
}
 
export default ExpenseCard;