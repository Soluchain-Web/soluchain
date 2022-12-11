import { userDTO } from "../mock/api/UserDTO";

interface Props {
  myInvestiment: number;
  accountBalance: number;
}

export function UserPatrimony(props: Props) {
  const participationAmount = userDTO.myPorfolio.reduce(
    (amount, el) => amount + el.criptoInvested,
    0
  );
  
  const myQuotas = userDTO.myPorfolio.reduce(
    (amount, el) => amount + el.percentage,
    0
  );

  return (
    <div className="row text-center ">
      <div className="col-12 col-sm-4">
        <div className="box-total w-100">
          Minha participação
          <h5 className="fw-bold">
            {participationAmount} <small>CELOS</small>
          </h5>
        </div>
      </div>
      <div className="col-12 col-sm-4 pb-1">
        <div className="box-total w-100 bg-light border">
          Total de Quotas
          <h5 className="fw-bold">{myQuotas}</h5>
        </div>
      </div>
      <div className="col-12 col-sm-4 pb-3">
        <div className="box-total w-100 bg-light border">
          Saldo na carteira
          <h5 className="fw-bold">
            {props.accountBalance} <small>CELOS</small>
          </h5>
        </div>
      </div>
    </div>
  );
}
