import React,{useState} from 'react';
import Button from './components/Button';
import Message from './components/Message';

const App = ()=>{
    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    let newRes;

    function calculate(operator) {
        console.log('cl',typeof num1,num1,num2);
        if ((typeof num1) === 'number'  && (typeof num2) === 'number'){
            if(operator === '+'){
                newRes = Number(num1) + Number(num2);
                setMessage('Result = ' + newRes.toFixed(2));
                setStatus("Success");
            }else if(operator === '-'){
                setStatus("Success");
                newRes = Number(num1) - Number(num2);
                setMessage('Result = ' + newRes.toFixed(2));
            }else if(operator === '*'){
                setStatus("Success");
                newRes = Number(num1) * Number(num2);
                setMessage('Result = ' + newRes.toFixed(2));
            }else{
                setStatus("Success");
                newRes = Number(num1) / Number(num2);
                setMessage('Result = ' + newRes.toFixed(2));
            }
        }else if((typeof num1) === 'string'){
            setStatus("Error");
            setMessage("Sorry First Number Not Valid");
        }else if((typeof num2) === 'string'){
            setStatus("Error");
            setMessage("Sorry Second Number Not Valid");
        }else if(num1 === null){
            setStatus("Error");
            setMessage("Please Enter First Number");
        }else if(num2 === null){
            setStatus("Error");
            setMessage("Please Enter Second Number");
        }


    }

    function changeNum1(e) {
        if(e.target.value === ''){
            setNum1(null);
            return;
        }
        if(isNaN(Number(e.target.value))){
            setNum1("hii");
            return;
        }
        setNum1(Number(e.target.value));
    }
    function changeNum2(e) {
        if(e.target.value === ''){
            setNum2(null);
            return;
        }
        if(isNaN(Number(e.target.value))){
            setNum2('hii');
            return;
        }
        setNum2(Number(e.target.value));
    }

    return (
        <div className="main dark">
            <h1>React Simple Calculator</h1>
            <input onChange={e=>changeNum1(e)} type="text" placeholder='Enter first number'/>
            <input onChange={e=>changeNum2(e)}  type="text" placeholder='Enter second number'/>
            <div className="btn-cont">
                <Button func={()=>calculate('+')} sign={'fa-plus'} />
                <Button func={()=>calculate('-')} sign={'fa-minus'} />
                <Button func={()=>calculate('*')} sign={'fa-xmark'} />
                <Button func={()=>calculate('/')} sign={'fa-divide'} />
            </div>{
                message &&
                <Message status={status} message={message}/>
            }
        </div>
    );
}

export default App;
