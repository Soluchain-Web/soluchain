import { UserHeader } from "../components/UserHeader";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Help() {
  return (
    <div>
      <UserHeader />
      <div className="container py-3">
        <h4>Ajuda</h4>
        <p className="alert alert-info d-flex">
          <FontAwesomeIcon icon={faInfo} border /> Página em construção
        </p>
      </div>
    </div>
  );
}
