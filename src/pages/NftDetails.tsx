import { NftKindNavbar } from "../components/NftKindNavbar";
import { UserHeader } from "../components/UserHeader";
import exampleMap from "../assets/img/mapa.png";
import { useParams } from "react-router-dom";
import { nftDTO } from "../mock/api/NftDTO";
import { NftProps } from "../components/NftItem";
import { FormEvent, useState } from "react";

export function NftDetails() {
  const [totalQuotes, setTotalQuotes] = useState("1");

  async function handleBuyTokens(event: FormEvent) {
    event.preventDefault;

    //Toledo
  }

  const params = useParams();
  const rip = params.id;

  let data: NftProps = nftDTO.items.filter((x) => x.rip === rip)[0];

  if (data === undefined) return <div>NFT não encontrado.</div>;
  else
    return (
      <div>
        <UserHeader />
        <section className="container py-3">
          <div className="row">
            <NftKindNavbar />
            <div className="col-12 col-md-9">
              <div className="sugestoes mb-4">
                <h4>{data.name}</h4>
                <img src={exampleMap} className="banner-foto mb-4" />
                <div className="d-flex mb-5 justify-content-between">
                  <div className="d-block box-total bg-light border">
                    Valor
                    <h5 className="fw-bold">
                      {data.bruteValue} <small>CELOS</small>
                    </h5>
                  </div>
                  <div className="d-block box-total pb-1 bg-light border">
                    Área do Terreno
                    <h5 className="fw-bold">{data.landArea} hm²</h5>
                  </div>
                  <div className="d-block box-total pb-3 bg-light border">
                    UF
                    <h5 className="fw-bold">{data.uf}</h5>
                  </div>
                </div>
                <div className="mb-5">
                  <form className="row" onSubmit={handleBuyTokens}>
                    <div className="col-2 d-flex">
                      <div className="d-block w-100">Quotas:</div>
                      <div className="d-block w-100">
                        <input
                          type="number"
                          min="1"
                          max={data.quotes}
                          className="form-control"
                          value={totalQuotes}
                          onChange={(e) => {
                            setTotalQuotes(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-4 d-flex">
                      <button type="submit" className="btn btn-lg btn-primary">
                        Alugar NFT Verde
                      </button>
                    </div>
                  </form>
                </div>
                <div className="text-muted">{data.description}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
