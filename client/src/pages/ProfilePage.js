import React, {useState} from "react";
import AlertBox from "../components/AlertBox";
import DepositForm from "../components/DepositForm";
import ExpenseCard from "../components/ExpenseCard";
import ExpenseForm from "../components/ExpenseForm";
import LoadingPage from "../components/Loading";
import ScoreCard from "../components/ScoreCard";
import TableGrid from "../components/TableGrid";
import useFetch from "../useFetch";

const ProfilePage = () => {

    const [profile, setProfile] = useState(true)
    const [deposit, setDeposit] = useState(false)
    const [withdraw, setWithdraw] = useState(false)
    const [accountId, setAccountId] = useState('')


    const handleDeposits = (acctId) =>{
        setDeposit(true)
        setWithdraw(false)
        setProfile(false)
        setAccountId(acctId)
    }

    const handleWithdraw = () =>{
        setProfile(false)
        setDeposit(false)
        setWithdraw(true)
    }

    let {result , isPending, error} = useFetch(`https://expesetracker.herokuapp.com/api/expense`)
    let {result: cards} = useFetch(`https://expesetracker.herokuapp.com/api/account`)

    return ( 
        <div className="grid grid-cols-1 bg-purple-50">
            {cards && <ExpenseCard cards={cards} click={handleDeposits} click2={handleWithdraw} />}
            {profile && result && <ScoreCard expenses={result} />}
            {deposit && <DepositForm id={accountId}></DepositForm>}
            {withdraw && <ExpenseForm></ExpenseForm>}
            <div className={`grid grid-cols-1 m-2 p-2 rounded-lg bg-white shadow-md ${deposit && 'hidden' || withdraw && 'hidden'}`}>
                <div className="flex mb-2 items-center">
                    <h4 className="text-sm">Transaction history</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mx-2">
                        <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd"/>
                    </svg>
                </div>
                {result && <TableGrid expenses={result} ></TableGrid>}
            </div>
            {isPending && <LoadingPage></LoadingPage>}
            {error && <AlertBox message={`failed to find resource check your internet connection`}></AlertBox>}
            <button className="p-2 bg-white shadow-md mt-4 m-2 text-sm text-purple-900 rounded-lg">Log Out</button>
        </div>
     );
}
 
export default ProfilePage;