import imgLogoSrc from "../assets/img/logo.png";
import { ConnectWallet } from "../components/ConnectWallet";

export function Login() {
  return (
    <div className="bg-login">
      <div className="row">
        <div className="col-1 col-sm-2 col-md-4"></div>
        <div className="col-10 col-sm-8 col-md-4 bg-white rounded shadow my-5 p-5">
          <div className="d-flex justify-content-center pb-5 border-bottom">
            <img src={imgLogoSrc} width="350" className="w-100" />
          </div>
          <div className="text-center mt-5">
            <h2>Identificação</h2>
            <p className="lead">Para começar, conecte-se a uma carteira</p>
            <div className="d-flex justify-content-center">
              <ConnectWallet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
