interface Props {
  myPatrimony: number;
  myInvestiment: number;
  accountBalance: number;
}

export function UserPatrimony(props: Props) {
  return (
    <div className="row text-center ">
      <div className="col-12 col-sm-4">
        <div className="box-total w-100">
          Meu Patrimônio
          <h5 className="fw-bold">ETH {props.myPatrimony}</h5>
        </div>
      </div>
      <div className="col-12 col-sm-4 pb-1">
        <div className="box-total w-100 bg-light border">
          Total investido
          <h5 className="fw-bold">ETH {props.myInvestiment}</h5>
        </div>
      </div>
      <div className="col-12 col-sm-4 pb-3">
        <div className="box-total w-100 bg-light border">
          Saldo em Conta
          <h5 className="fw-bold">ETH {props.accountBalance}</h5>
        </div>
      </div>
    </div>
  );
}
