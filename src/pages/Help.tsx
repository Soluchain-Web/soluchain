import { UserHeader } from "../components/UserHeader";

export function Help() {
  return (
    <div>
      <UserHeader />
      <div className="container py-3">
        <h4>Ajuda</h4>
        <p className="alert alert-info">
          <i className="fas fa-info"></i> Página em construção
        </p>
      </div>
    </div>
  );
}
