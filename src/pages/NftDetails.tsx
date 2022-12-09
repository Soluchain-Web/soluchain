import { NftKindNavbar } from "../components/NftKindNavbar";
import { UserHeader } from "../components/UserHeader";
import exampleMap from '../assets/img/mapa.png'
import { useParams } from "react-router-dom";
import { nftData } from "../utils/model";
import { NftProps } from "../components/NftItem";

export function NftDetails(){
  const params = useParams();
  const id = params.id
  let data : NftProps = {}

  for(let i = 0; i < nftData.items.length; i++){
    if(nftData.items[i].id === id){
      data = nftData.items[i]
      break
    }
  }

  return(
      <div>
        <UserHeader/>
        <section className="container py-3">
          <div className="row">
            <NftKindNavbar/>
            <div className="col-12 col-md-9">
              <div className="sugestoes mb-4">
                <h4>{data.name}</h4>
                <img
                  src={exampleMap}
                  className="banner-foto mb-4"
                />
                <div className="d-flex mb-5 justify-content-between">
                  <div className="d-block box-total bg-light border">
                    Valor
                    <h5 className="fw-bold">ETH {data.bruteValue}</h5>
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
                  <div className="row">
                    <div className="col-2 d-flex">
                      <div className="d-block">Quotas:</div>
                      <div className="d-block">
                        <input type="number" value="1" max={data.quotes} className="form-control" />
                      </div>
                    </div>
                    <div className="col-2 d-flex">
                      <button className="btn btn-lg btn-primary">Alugar</button>
                    </div>
                  </div>
                </div>
                <div className="text-mutted">
                  {data.description}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}