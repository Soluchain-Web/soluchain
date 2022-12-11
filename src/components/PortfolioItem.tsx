interface Props {
  name: string;
  percentage: number;
  criptoInvested: number;
}

export function PortfolioItem(props: Props) {
  return (
    <div className="row mb-3 linha-portifolio d-flex">
      <div className="col-7 overflow-hidden">
        <div className="d-flex">{props.name}</div>
      </div>
      <div className="col-1">
        <div className="d-flex">{props.percentage}%</div>
      </div>
      <div className="col-4 text-center">
        <div className="d-flex justify-content-end">
          <b>
            <small>CELOS</small> {props.criptoInvested}
          </b>
        </div>
      </div>
    </div>
  );
}
