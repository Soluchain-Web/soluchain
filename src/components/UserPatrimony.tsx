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
          Minha participação
          <h5 className="fw-bold">{props.myPatrimony} <small>CELOS</small></h5>
        </div>
      </div>
      <div className="col-12 col-sm-4 pb-1">
        <div className="box-total w-100 bg-light border">
          Total investido
          <h5 className="fw-bold">{props.myInvestiment} <small>CELOS</small></h5>
        </div>
      </div>
      <div className="col-12 col-sm-4 pb-3">
        <div className="box-total w-100 bg-light border">
          Saldo em conta
          <h5 className="fw-bold">{props.accountBalance} <small>CELOS</small></h5>
        </div>
      </div>
    </div>
  );
}
