import {Link} from 'react-router-dom'

export interface NftProps{
    id: string
    name: string
    description: string
    bruteValue: number
    appreciation: number
    date: string
    imageUrl: string
    landArea: number
    uf: string
    quotes: number
}

export function NftItem({id, name, description, bruteValue, appreciation, date} : NftProps){
    const isAppreciationNegative = appreciation > 0 ? 'text-success': 'text-danger'

    return(
        <Link to={`/NFT/${id}`} className='text-decoration-none text-dark'>
            <div key={id} className="border p-3 my-4">
                <div className="pb-3">
                    <h6 className="fw-bold primary-color">{name}</h6>
                    <h6>{description}</h6>
                </div>
                <div className="d-flex justify-content-between border-top py-1">
                    <span className="fs-6">
                        Valor bruto: <b>{bruteValue} ETH</b>
                    </span>
                    <span className="fs-6">
                        Valorização: <b className={isAppreciationNegative}>{appreciation}%</b>
                    </span>
                    <span className="fs-6">
                        Vencimento: <b>{date}</b>
                    </span>
                </div>
            </div>
        </Link>
    )
}