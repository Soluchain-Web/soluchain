import { Link } from "react-router-dom";
import { useSPUNFT } from "../hooks/useSPULand";

export interface NftProps {
  //   rip: string;
  //   name: string;
  //   description: string;
  //   bruteValue: number;
  //   appreciation: number;
  //   date: string;
  //   imageUrl: string;
  //   landArea: number;
  //   uf: string;
  //   quotes: number;
  address: string;
}

export function NftItem({ address }: NftProps) {
  const nft = useSPUNFT(address);
  //   const isAppreciationNegative =
  //     appreciation > 0 ? "text-success d-block" : "text-danger d-block";

  if (!nft.nftData) {
    return <p>carregando...</p>;
  }

  console.log("nft.nftData.rip", nft.nftData.rip);

  return (
    <Link
      to={`/NFT/${nft.nftData.rip.toString()}`}
      className="text-decoration-none text-dark"
    >
      <div key={nft.nftData.rip.toString()} className="border p-4 mb-4">
        <div className="pb-3">
          <h6 className="fw-bold primary-color">
            Pegue o nome do array de nfts
          </h6>
          <h6>pegue a descricao do array de nfts</h6>
        </div>
        <div className="d-flex justify-content-between border-top py-1">
          <span className="fs-6">
            <small>
              Valor bruto: <b className="d-block">{0} CELOS</b>
            </small>
          </span>
          {/* <span className="fs-6">
            <small>
              Impacto gerado:{" "}
              <b className={isAppreciationNegative}>{appreciation} árvores</b>
            </small> 
          </span>*/}
          {/* <span className="fs-6">
            <small>
              Vencimento: <b className="d-block">{date}</b>
            </small>
          </span> */}
        </div>
      </div>
    </Link>
  );
}
