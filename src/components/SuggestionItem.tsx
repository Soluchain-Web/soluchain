import {Link} from 'react-router-dom'

interface Props{
    id: string
    name: string
    description: string
    bruteValue: number
    appreciation: number
    date: string
}

export function SuggestionItem(props:Props){
    const isAppreciationNegative = props.appreciation > 0 ? 'text-success': 'text-danger'


    return(
        <Link to={`/NFT/${props.id}`} className='text-decoration-none text-dark'>
            <div key={props.id} className="border p-3 my-4">
                <div className="pb-3">
                    <h6 className="fw-bold primary-color">{props.name}</h6>
                    <h6>{props.description}</h6>
                </div>
                <div className="d-flex justify-content-between border-top py-1">
                    <span className="fs-6">
                        Valor bruto: <b>{props.bruteValue} ETH</b>
                    </span>
                    <span className="fs-6">
                        Valorização: <b className={isAppreciationNegative}>{props.appreciation}%</b>
                    </span>
                    <span className="fs-6">
                        Vencimento: <b>{props.date}</b>
                    </span>
                </div>
            </div>
        </Link>
    )
}