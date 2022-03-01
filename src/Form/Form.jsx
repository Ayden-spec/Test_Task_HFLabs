import './form.css'
import { useState } from 'react';
import { PartySuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

function Form() {
    const [party, setParty] = useState();

    const [ShortName, setShortName] = useState('');
    const [FullName, setFullName] = useState('');
    const [InnKpp, setInnKpp] = useState('');
    const [Adress, setAdress] = useState('');

    const SetParty_function = (value) => {
        setShortName(value.value);
        setFullName(value.data.name.full_with_opf);
        setInnKpp(`${value.data.inn} / ${value.data.kpp}`);
        setAdress(value.data.address.unrestricted_value);
        setParty(value);
    }
    return (
        <div className='container'>
            <p><strong>Компания или ИП</strong></p>
            <PartySuggestions token="996e7278a35136a86ec11cd2752bb3f701fdb342" value={party} onChange={SetParty_function} inputProps={{ placeholder: 'Введите название, ИНН, ОГРН или адрес организации' }} />
            <div className='row'>
                <label>Краткое наименование</label>
                <input type="text" value={ShortName} onChange={(event) => setShortName(event.target.value)} className='input_form' />
            </div>
            <div className='row'>
                <label>Полное наименование</label>
                <input type="text" value={FullName} onChange={(event) => setFullName(event.target.value)} className='input_form' />
            </div>
            <div className='row'>
                <label>ИНН / КПП</label>
                <input type="text" value={InnKpp} onChange={(event) => setInnKpp(event.target.value)} className='input_form' />
            </div>
            <div className='row'>
                <label>Адрес</label>
                <input type="text" value={Adress} onChange={(event) => setAdress(event.target.value)} className='input_form' />
            </div>
        </div>
    )
}

export default Form