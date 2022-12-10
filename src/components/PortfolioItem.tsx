interface Props {
  name: string;
  percentage: number;
  criptoInvested: number;
}

export function PortfolioItem(props: Props) {
  return (
    <div className="row mb-2 linha-portifolio">
      <div className="col-8 overflow-hidden">
        <div>{props.name}</div>
      </div>
      <div className="col-1 text-center">
        <div>{props.percentage}%</div>
      </div>
      <div className="col-3 text-center">
        <div>
          <b>
            <small>ETH</small> {props.criptoInvested}
          </b>
        </div>
      </div>
    </div>
  );
}
