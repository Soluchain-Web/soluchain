import { NftItem } from "../components/NftItem";
import { UserHeader } from "../components/UserHeader";
import { UserPatrimony } from "../components/UserPatrimony";
import { PortfolioItem } from "../components/PortfolioItem";
import { nftDTO } from "../mock/api/NftDTO";
import { userDTO } from "../mock/api/UserDTO";

export function UserHome() {
  return (
    <div>
      <UserHeader />
      <section className="container py-3">
        <div className="row">
          <div className="offset-0 offset-xl-2">
            <div className="col-12 col-xl-8">
              <UserPatrimony
                myInvestiment={userDTO.userPatrimony.myInvestiment}
                accountBalance={userDTO.userPatrimony.balanceAccount}
              />
              <div className="my-5">
                <div className="portifolio">
                  <h4>Meu Portfólio</h4>
                  {userDTO.myPorfolio.map((item) => {
                    return (
                      <PortfolioItem
                        name={item.name}
                        percentage={item.percentage}
                        criptoInvested={item.criptoInvested}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="sugestoes mt-5">
                <h4>Sugestões para participação em projetos</h4>
                {nftDTO.items.map((item) => {
                  return (
                    <NftItem
                      rip={item.rip}
                      name={item.name}
                      description={item.description}
                      bruteValue={item.bruteValue}
                      appreciation={item.appreciation}
                      results={item.results}
                      date={item.date}
                      landArea={item.landArea}
                      imageUrl={item.imageUrl}
                      uf={item.uf}
                      quotes={item.quotes}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
