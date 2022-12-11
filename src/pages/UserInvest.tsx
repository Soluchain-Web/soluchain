import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { NftKindNavbar } from "../components/NftKindNavbar";

import { NftItem } from "../components/NftItem";
import { UserHeader } from "../components/UserHeader";
import { userData, nftData } from "../utils/model";
import { useSPUMarket } from "../hooks/useSPUMarket";

export function UserInvest() {
  const market = useSPUMarket();

  console.log("lands created", market.data.landsCreated);

  return (
    <div>
      <UserHeader />
      <section className="container py-3">
        <div className="row">
          <NftKindNavbar />
          <div className="col-12 col-md-9">
            <div className="sugestoes mt-4">
              <h4>Investir em Créditos de Carbono</h4>
              <div className="my-3 search-box">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar investimentos"
                    aria-label="Pesquisar"
                    aria-describedby="basic-addon1"
                  />
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
              {market.data.landsCreated?.map((item) => {
                return <NftItem address={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
