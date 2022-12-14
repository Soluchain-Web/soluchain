import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { NftProps } from "../components/NftItem";
import { nftDTO } from "../mock/api/NftDTO";

export function NftRegister() {
  const [ripCode, setRipCode] = useState("");
  const [quotes, setQuotes] = useState("1");
  const [value, setValue] = useState("1");

  const navigate = useNavigate();

  async function handleCreateToken(event: FormEvent) {
    event.preventDefault();

    if (Number(quotes) > 1000 || Number(quotes) < 1) {
      return alert(
        "ERROR! você deve dividir o imóvel/patrimônio em até 1000 vezes"
      );
    }

    if (Number(value) > 1000 || Number(value) < 1) {
        return alert(
          "ERROR! você deve dividir o imóvel/patrimônio em até 1000 vezes"
        );
      }

    if (!ripCode) {
      return alert("O Código RIP não pode estar vazio");
    }

    let ripValidated: NftProps = nftDTO.items.filter(
      (x) => x.rip === ripCode
    )[0];

    if (!ripValidated) {
      return alert(
        "O código RIP digitado não consta em na base de dados, verifique com os administradores"
      );
    }

    try {
      // Toledo
      ripValidated.bruteValue;
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(
        "Ocorreu um erro inesperado, entre em contato conosco ou tente novamente mais tarde"
      );
    }
  }

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Form onSubmit={handleCreateToken}>
        <Form.Group className="mb-3 w-100" controlId="rip-code">
          <Form.Label>RIP</Form.Label>
          <Form.Control
            type="text"
            value={ripCode}
            onChange={(e) => setRipCode(e.currentTarget.value)}
            placeholder="Digite o código RIP"
          />
          <Form.Text className="text-muted">
            RIP: Registro Imobiliário Patrimonial
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="value">
          <Form.Label>Preço total em CELOS</Form.Label>
          <Form.Control
            type="number"
            max={10000}
            min={1}
            onChange={(e) => setValue(e.currentTarget.value)}
            value={value}
          />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="quotes">
          <Form.Label>Dividir em quantos tokens?</Form.Label>
          <Form.Control
            type="number"
            max={1000}
            min={1}
            onChange={(e) => setQuotes(e.currentTarget.value)}
            value={quotes}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Tokenizar
        </Button>
        <Link to='/'>
            <Button className="w-100 mt-2 bg-danger">
                Voltar
            </Button>
        </Link>
      </Form>
    </div>
  );
}
