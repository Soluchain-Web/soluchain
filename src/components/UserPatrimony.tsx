import { userData } from "../utils/model";

interface Props {
  myInvestiment: number;
  accountBalance: number;
}

export function UserPatrimony(props: Props) {
  const participationAmount = userData.myPorfolio.reduce((amount, el)=> amount + el.criptoInvested, 0)

  return (
    <div className="row text-center ">
      <div className="col-12 col-sm-4">
        <div className="box-total w-100">
          Minha participação
          <h5 className="fw-bold">{participationAmount} <small>CELOS</small></h5>
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
