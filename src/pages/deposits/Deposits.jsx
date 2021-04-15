import React,{useState} from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import "./Deposits.scss"
import sprite from "../../icons/deposits/symbol-defs.svg"

const initialState = {
    amount: undefined,
    email: "",    
}

const Deposits = () => {
    const [info, setInfo] = useState(initialState);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setInfo({ ...info, [name]: value });
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
    }


    return (
        <>
            <h2 className="pageTitle">DEPOSITS</h2>
            <div className="tabContainer">
                <div>
                    <Tabs defaultActiveKey="CHECK" transition={false} >
                        <Tab eventKey="CHECK" title="CHECK" className="tabtitle" >
                            <div className="contentThumb">
                                <form className="tabForm" onSubmit={handleSubmit}>
                                    <label htmlFor="amount" className="tabLabel" >Amount
                                <input id="amount" type="number" name="amount" value={info?.amount} onChange={handleChange}
                                            placeholder="1000" required className="tabInput" />
                                    </label>
                                    <label htmlFor="email" className="tabLabel" >E-mail
                            <input id="email" type="email" name="email" value={info?.email} onChange={handleChange}
                                            placeholder="E-mail" required className="tabInput" />
                                    </label>


                                    {/* =================================== */}
                                    <div className="radioThumb">
                                        <label className="radioLabel">
                                            <input type="radio" name="account" value=" Individual" defaultChecked className="radioInput" />
                         Individual Account
                        </label>
                                        <label className="radioLabel">
                                            <input type="radio" name="account" value="Joint" className="radioInput" />
                        Joint Account
                        </label>
                                    
                                    </div>
                                    <div className="btnThumb">
                                        <button type="submit" className="submitBtn">Next</button>
                                    </div>
                                </form>
                            </div>
                        </Tab>
                        <Tab eventKey="WIRE TRANSFER" title="WIRE TRANSFER">
                            <div className="placeholder"></div>
                        </Tab>
                    </Tabs>
                </div>
                {/* ============================== */}
                
                <table className="table">
                    <thead className="tableHead">
                        <tr className="tableRow">
                            <th className="tableHeadData">Date</th>
                            <th className="tableHeadData">Type</th>
                            <th className="tableHeadData">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="tableRow">
                        <td className="tableData">10/10/2019</td>
                        <td className="tableData">Lorem ipsum dolor </td>
                        <td className="tableData">$100</td>
                    </tr>
                    <tr className="tableRow">
                        <td className="tableData">10/10/2019</td>
                        <td className="tableData">Lorem ipsum dolor </td>
                        <td className="tableData">$100</td>
                    </tr>
                    <tr className="tableRow">
                        <td className="tableData">10/10/2019</td>
                        <td className="tableData">Lorem ipsum dolor </td>
                        <td className="tableData">$100</td>
                    </tr>
                    <tr className="tableRow">
                        <td className="tableData">10/10/2019</td>
                        <td className="tableData">Lorem ipsum dolor </td>
                        <td className="tableData">$100</td>
                    </tr>
                    <tr className="tableRow">
                        <td className="tableData">10/10/2019</td>
                        <td className="tableData">Lorem ipsum dolor </td>
                        <td className="tableData">$100</td>
                    </tr>
                    <tr className="tableRow">
                        <td className="tableData">10/10/2019</td>
                        <td className="tableData">Lorem ipsum dolor </td>
                        <td className="tableData">$100</td>
                        </tr>
                    </tbody>
                    <tfoot className="tableFooter">
                        <tr>
                            <td colSpan="3">
                                <button type="button" className="tableFooterBtn">
                            <svg className="tfootIcon">
                                <use href={sprite + "#arrowLeft"} />
                                </svg>
                                    <span className="tfootText">Prev</span>
                                </button>
                                 <button type="button" className="tableFooterBtn">
                                <span className="tfootText">Next</span>
                                
                            <svg className="tfootIcon">
                                <use href={sprite + "#arrowRight"} />
                                    </svg>
                                </button>
                                <button type="button" className="tableFooterBtn">
                                    <span className="tfootText">Last</span>
                                    </button>
                            </td>
                    </tr>
                    </tfoot>
  
                </table>

            </div>
        </>
    );
};

export default Deposits;