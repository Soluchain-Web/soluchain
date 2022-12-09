interface Props{
    myPatrimony:number
    myInvestiment:number
    accountBalance:number
}

export function UserPatrimony(props:Props){
    return(
        <div className="d-flex mb-5 justify-content-between">
            <div className="d-block box-total">
            Meu Patrimônio Total
            <h5 className="fw-bold">ETH {props.myPatrimony}</h5>
            </div>
            <div className="d-block box-total pb-1 bg-light border">
            Total investido
            <h5 className="fw-bold">ETH {props.myInvestiment}</h5>
            </div>
            <div className="d-block box-total pb-3 bg-light border">
            Saldo em Conta
            <h5 className="fw-bold">ETH {props.accountBalance}</h5>
            </div>
      </div>
    )
}