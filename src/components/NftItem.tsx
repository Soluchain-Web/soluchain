import {Link} from 'react-router-dom'

export interface NftProps{
    rip: string
    name: string
    description: string
    bruteValue: number
    appreciation: number,
    results: string,
    date: string
    imageUrl: string
    landArea: number
    uf: string
    quotes: number
}

export function NftItem({rip, name, description, bruteValue, appreciation, results, date} : NftProps){
    const isAppreciationNegative = appreciation > 0 ? 'text-success d-block': 'text-danger d-block'

    return(
        <Link to={`/NFT/${rip}`} className='text-decoration-none text-dark'>
            <div key={rip} className="border p-4 mb-4">
                <div className="pb-3">
                    <h6 className="fw-bold primary-color">{name}</h6>
                    <h6>{description}</h6>
                </div>
                <div className="d-flex justify-content-between border-top py-1">
                    <span className="fs-6">
                        <small>Valor bruto: <b className='d-block'>{bruteValue} CELOS</b></small>
                    </span>
                    <span className="fs-6">
                        <small>Impacto gerado: <b className={isAppreciationNegative}>{results}</b></small>
                    </span>
                    <span className="fs-6">
                        <small>Vencimento: <b className='d-block'>{date}</b></small>
                    </span>
                </div>
            </div>
        </Link>
    )
}