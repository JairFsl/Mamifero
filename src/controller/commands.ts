import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Função para adicionar características ao Esquilo
async function adicionarCaracteristicas(req: any, res: any) {
  const {
    habitat,
    comidaFavorita,
    descricao,
    quantidadePatas,
    sexo,
    hibernacao,
  } = req.body;

  const novoEsquilo = await prisma.esquilo.create({
    data: {
      habitat,
      comidaFavorita,
      descricao,
      quantidadePatas,
      sexo,
      hibernacao,
    },
  });

  return res.status(201).send("Características Salvas!");
}

// Função para listar todas características dos Esquilos
async function listarCaracteristicas() {
  const listarEsquilo = await prisma.esquilo.findMany();

  return listarEsquilo;
}

async function buscaCaracteristicas(req: any, res: any) {
  // const { query: query } = req.query;
  // console.log(req.query);
  const { q, query } = req.params;

  if (typeof q !== "string") {
    throw new Error(res.send("Busca Inválida"));
  }

  const buscaEsquilo = await prisma.esquilo.findMany({
    where: {
      OR: [
        {
          habitat: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          comidaFavorita: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          descricao: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          sexo: {
            contains: q,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  return res.send(buscaEsquilo);
}

async function editarCaracteristicas(req: any, res: any) {
  const { id } = req.params;
  const {
    habitat,
    comidaFavorita,
    descricao,
    quantidadePatas,
    sexo,
    hibernacao,
  } = req.body;
  const editarEsquilo = await prisma.esquilo.update({
    where: {
      id: id,
    },
    data: {
      habitat: habitat,
      comidaFavorita: comidaFavorita,
      descricao: descricao,
      quantidadePatas: quantidadePatas,
      sexo: sexo,
      hibernacao: hibernacao,
    },
  });

  return res.status(205).send("Características alteradas com sucesso!");
}

export default {
  adicionarCaracteristicas,
  listarCaracteristicas,
  buscaCaracteristicas,
  editarCaracteristicas,
};
