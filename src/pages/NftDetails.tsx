import { NftKindNavbar } from "../components/NftKindNavbar";
import { UserHeader } from "../components/UserHeader";
import exampleMap from '../assets/img/mapa.png'

export function NftDetails(){
    return(
      <div>
        <UserHeader/>
        <section className="container py-3">
          <div className="row">
            <NftKindNavbar/>
            <div className="col-12 col-md-9">
              <div className="sugestoes mb-4">
                <h4>Fundo ABC da Amazônia</h4>
                <img
                  src={exampleMap}
                  className="banner-foto mb-4"
                />
                <div className="d-flex mb-5 justify-content-between">
                  <div className="d-block box-total bg-light border">
                    Valor
                    <h5 className="fw-bold">ETH 4</h5>
                  </div>
                  <div className="d-block box-total pb-1 bg-light border">
                    Área do Terreno
                    <h5 className="fw-bold">50 km²</h5>
                  </div>
                  <div className="d-block box-total pb-3 bg-light border">
                    UF
                    <h5 className="fw-bold">Amazonas</h5>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="row">
                    <div className="col-2 d-flex">
                      <div className="d-block">Quotas:</div>
                      <div className="d-block">
                        <input type="number" value="1" className="form-control" />
                      </div>
                    </div>
                    <div className="col-2 d-flex">
                      <button className="btn btn-lg btn-primary">Alugar</button>
                    </div>
                  </div>
                </div>
                <div className="text-mutted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  elit mauris, ullamcorper vitae mattis quis, facilisis quis odio.
                  Quisque non ante quis sapien scelerisque volutpat. Ut cursus
                  tellus in maximus porta. In metus est, venenatis eu nisl auctor,
                  hendrerit interdum velit. Nulla facilisi. Ut at ullamcorper neque,
                  a euismod leo. <br />Phasellus in dui ornare, scelerisque augue
                  vitae, cursus est. Sed eleifend ultrices consequat. Curabitur
                  cursus ligula eget nulla efficitur, sed maximus odio commodo.
                  Phasellus aliquam gravida sollicitudin. Cras venenatis in lacus
                  vitae consequat. Duis vulputate viverra urna, sit amet consectetur
                  mi iaculis in. Suspendisse potenti.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}